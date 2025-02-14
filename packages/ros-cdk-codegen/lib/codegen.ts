import { schema, filteredSpecification } from '@alicloud/ros-cdk-spec';
import { CodeMaker } from 'codemaker';
import * as genspec from './genspec';
import { itemTypeNames, PropertyAttributeName, scalarTypeNames, SpecName } from './spec-utils';
import { upcaseFirst } from './util';

const CORE = genspec.CORE_NAMESPACE;
// base class for all resources
const RESOURCE_BASE_CLASS = `${CORE}.RosResource`;
const CONSTRUCT_CLASS = `${CORE}.Construct`;
const TAG_TYPE = `${CORE}.TagType`;
const TAG_MANAGER = `${CORE}.TagManager`;

interface Dictionary<T> {
  [key: string]: T;
}

export interface CodeGeneratorOptions {
  /**
   * How to import the core library.
   *
   * @default '@alicloud/ros-cdk-core'
   */
  readonly coreImport?: string;
}

/**
 * Emits classes for all resource types
 */
export default class CodeGenerator {
  public readonly outputFile: string;

  private code = new CodeMaker();

  /**
   * Creates the code generator.
   * @param moduleName the name of the module (used to determine the file name).
   * @param spec     resource specification
   */
  constructor(
      moduleName: string,
      private readonly spec: schema.Specification,
      private readonly affix: string,
      options: CodeGeneratorOptions = {},
  ) {
    this.outputFile = `${moduleName}`;
    this.code.openFile(this.outputFile);
    const coreImport = options.coreImport ?? '@alicloud/ros-cdk-core';

    this.code.line('// Generated from the AliCloud ROS Resource Specification');
    this.code.line();
    this.code.line(`import * as ${CORE} from '${coreImport}';`);
  }

  public async emitCode(resourceTypes: string[]) {
    for (const name of resourceTypes.sort()) {
      const resourceType = filteredSpecification(name).ResourceTypes[name]
      const rosName = SpecName.parse(name);
      const resourceName = genspec.CodeName.forRosResource(rosName, this.affix);
      this.code.line();
      this.emitRosResourceType(resourceName, resourceType);
      this.emitPropertyTypes(name, resourceName);
    }
  }

  /**
   * Saves the generated file.
   */
  public async save(dir: string): Promise<string[]> {
    this.code.closeFile(this.outputFile);
    return await this.code.save(dir);
  }

  /**
   * Emits classes for all property types
   */
  private emitPropertyTypes(resourceName: string, resourceClass: genspec.CodeName): void {
    const prefix = `${resourceName}.`;
    for (const name of Object.keys(filteredSpecification(resourceName).PropertyTypes).sort()) {
      if (!name.startsWith(prefix)) {
        continue;
      }

      const rosTypeName = PropertyAttributeName.parse(name);
      const propTypeName = genspec.CodeName.forPropertyType(rosTypeName, resourceClass);
      const type = filteredSpecification(resourceName).PropertyTypes[name];
      if (schema.isRecordType(type)) {
        this.emitPropertyType(resourceClass, propTypeName, type);
      }
    }
  }

  private openClass(name: genspec.CodeName, superClasses?: string): string {
    const extendsPostfix = superClasses ? ` extends ${superClasses}` : '';
    this.code.openBlock(`export class ${name.className}${extendsPostfix}${''}`);
    return name.className;
  }

  private closeClass(_name: genspec.CodeName) {
    this.code.closeBlock();
  }

  private emitPropsType(resourceContext: genspec.CodeName, spec: schema.ResourceType): genspec.CodeName | undefined {
    if (!spec.Properties) {
      return;
    }
    const name = genspec.CodeName.forResourceProperties(resourceContext);

    this.docLink(spec.Documentation, `Properties for defining a \`${resourceContext.specName!.fqn}\``);
    this.code.openBlock(`export interface ${name.className}`);
    const conversionTable = this.emitPropsTypeProperties(resourceContext, spec.Properties, Container.Interface);

    this.code.closeBlock();

    this.code.line();
    this.emitValidator(resourceContext, name, spec.Properties, conversionTable);
    this.code.line();
    this.emitRosTemplateMapper(resourceContext, name, spec.Properties, conversionTable);

    return name;
  }

  /**
   * Emit TypeScript for each of the ROS properties, while renaming
   *
   * Return a mapping of { originalName -> newName }.
   */
  private emitPropsTypeProperties(
      resource: genspec.CodeName,
      propertiesSpec: { [name: string]: schema.Property },
      container: Container,
  ): Dictionary<string> {
    const propertyMap: Dictionary<string> = {};
    Object.keys(propertiesSpec)
        .sort(propertyComparator)
        .forEach((propName) => {
          this.code.line();
          const propSpec = propertiesSpec[propName];
          const additionalDocs = resource.specName!.relativeName(propName).fqn;

          propertyMap[propName] = this.emitProperty(
              {
                context: resource,
                propName,
                spec: propSpec,
                additionalDocs: quoteCode(additionalDocs),
              },
              container,
          );
        });

    return propertyMap;

    /**
     * A comparator that places required properties before optional properties,
     * and sorts properties alphabetically.
     * @param l the left property name.
     * @param r the right property name.
     */
    function propertyComparator(l: string, r: string): number {
      const lp = propertiesSpec[l];
      const rp = propertiesSpec[r];
      if (lp.Required === rp.Required) {
        return l.localeCompare(r);
      } else if (lp.Required) {
        return -1;
      }
      return 1;
    }
  }

  private emitRosResourceType(resourceName: genspec.CodeName, spec: schema.ResourceType): void {
    this.beginNamespace(resourceName);

    const rosTypeName = resourceName.specName!.fqn;

    //
    // Props Bag for this Resource
    //
    const propsType = this.emitPropsType(resourceName, spec);
    if (propsType) {
      this.code.line();
    }
    //
    // The class declaration representing this Resource
    //

    this.docLink(spec.Documentation, `A ROS template type:  \`${rosTypeName}\``);
    this.openClass(resourceName, RESOURCE_BASE_CLASS);
    //
    // Static inspectors.
    //

    const rosResourceTypeName = `${JSON.stringify(rosTypeName)}`;
    this.code.line('/**');
    this.code.line(' * The resource type name for this resource class.');
    this.code.line(' */');
    this.code.line(`public static readonly ROS_RESOURCE_TYPE_NAME = ${rosResourceTypeName};`);

    this.code.line();
    this.code.line('/**');
    this.code.line(' * A factory method that creates a new instance of this class from an object');
    this.code.line(' * containing the properties of this ROS resource.');
    this.code.line(' */');

    //
    // Attributes
    //

    const attributes = new Array<genspec.Attribute>();

    if (spec.Attributes) {
      for (const attributeName of Object.keys(spec.Attributes).sort()) {
        if (
            !(attributeName[0] >= 'a' && attributeName[0] <= 'z') &&
            !(attributeName[0] >= 'A' && attributeName[0] <= 'Z')
        )
          continue;

        const attributeSpec = spec.Attributes![attributeName];

        this.code.line();

        this.docLink(undefined, `@Attribute ${attributeName}: ${(attributeSpec as schema.Description).Description}`);
        const attr = genspec.attributeDefinition(attributeName);
        this.code.line(`public readonly ${attr.propertyName}: ${CORE}.IResolvable;`);

        attributes.push(attr);
      }
    }

    //
    // Set class properties to match ROS Properties spec
    //

    let propMap;
    if (propsType) {
      this.code.line();
      this.code.line(`public enableResourcePropertyConstraint: boolean;`);
      this.code.line();
      propMap = this.emitPropsTypeProperties(resourceName, spec.Properties!, Container.Class);
    }
    //
    // Constructor
    //

    this.code.line();
    this.code.line('/**');
    this.code.line(` * Create a new ${quoteCode(resourceName.specName!.fqn)}.`);
    this.code.line(' *');
    this.code.line(' * @param scope - scope in which this resource is defined');
    this.code.line(' * @param id    - scoped id of the resource');
    this.code.line(' * @param props - resource properties');
    this.code.line(' */');
    const propsArgument = propsType ? `, props: ${propsType.className}` : '';
    this.code.openBlock(
        `constructor(scope: ${CONSTRUCT_CLASS}, id: string${propsArgument}, enableResourcePropertyConstraint: boolean)`,
    );
    this.code.line(
        `super(scope, id, { type: ${resourceName.className}.ROS_RESOURCE_TYPE_NAME${
            propsType ? ', properties: props' : ''
        } });`,
    );

    // initialize all attribute properties
    for (const at of attributes) {
      let attributeName = at.propertyName.substring(4);
      if (
          !(attributeName[0] >= 'a' && attributeName[0] <= 'z') &&
          !(attributeName[0] >= 'A' && attributeName[0] <= 'Z')
      )
        continue;

      this.code.line(`this.${at.propertyName} = ${at.constructorArguments};`);
    }

    // initialize all property class members
    if (propsType && propMap) {
      this.code.line();
      this.code.line(`this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;`);
      for (const prop of Object.values(propMap)) {
        if (schema.isTagPropertyName(upcaseFirst(prop)) && schema.isTaggableResource(spec)) {
          this.code.line(
              `this.tags = new ${TAG_MANAGER}(${tagType(
                  spec,
              )}, ${rosResourceTypeName}, props.${prop}, { tagPropertyName: '${prop}' });`,
          );
        } else {
          this.code.line(`this.${prop} = props.${prop};`);
        }
      }
    }
    this.code.closeBlock();

    this.code.line();
    // this.emitTreeAttributes(resourceName);

    // setup render properties
    if (propsType && propMap) {
      this.code.line();
      this.emitRosTemplateProperties(propsType, propMap, schema.isTaggableResource(spec));
    }

    this.closeClass(resourceName);

    this.endNamespace(resourceName);
  }

  /**
   * We resolve here.
   *
   * Since resolve() deep-resolves, we only need to do this once.
   */
  private emitRosTemplateProperties(propsType: genspec.CodeName, propMap: Dictionary<string>, taggable: boolean): void {
    this.code.openBlock('protected get rosProperties(): { [key: string]: any } ');
    this.code.indent('return {');
    for (const prop of Object.values(propMap)) {
      // handle tag rendering because of special cases
      if (taggable && schema.isTagPropertyName(upcaseFirst(prop))) {
        this.code.line(`${prop}: this.tags.renderTags(),`);
        continue;
      }
      this.code.line(`${prop}: this.${prop},`);
    }
    this.code.unindent('};');
    this.code.closeBlock();
    this.code.openBlock('protected renderProperties(props: {[key: string]: any}): { [key: string]: any } ');
    this.code.line(`return ${genspec.rosMapperName(propsType).fqn}(props, this.enableResourcePropertyConstraint);`);
    this.code.closeBlock();
  }

  /**
   * Emit the function that is going to map the generated TypeScript object back into the schema that ROS template expects
   *
   * The generated code looks like this:
   *
   *  function bucketPropsToRosTemplate(properties: any): any {
   *    if (!cdk.canInspect(properties)) return properties;
   *    BucketPropsValidator(properties).assertSuccess();
   *    return {
   *      AccelerateConfiguration: bucketAccelerateConfigurationPropertyToRosTemplate(properties.accelerateConfiguration),
   *      AccessControl: cdk.stringToRosTemplate(properties.accessControl),
   *      AnalyticsConfigurations: cdk.listMapper(bucketAnalyticsConfigurationPropertyToRosTemplate)
   *                                          (properties.analyticsConfigurations),
   *      // ...
   *    };
   *  }
   *
   * Generated as a top-level function outside any namespace so we can hide it from library consumers.
   */
  private emitRosTemplateMapper(
      resource: genspec.CodeName,
      typeName: genspec.CodeName,
      propSpecs: { [name: string]: schema.Property },
      nameConversionTable: Dictionary<string>,
      isResourceType: boolean = true,
  ) {
    const mapperName = genspec.rosMapperName(typeName);

    this.code.line('/**');
    this.code.line(
        ` * Renders the AliCloud ROS Resource properties of an ${quoteCode(typeName.specName!.fqn)} resource`,
    );
    this.code.line(' *');
    this.code.line(` * @param properties - the TypeScript properties of a ${quoteCode(typeName.className)}`);
    this.code.line(' *');
    this.code.line(
        ` * @returns the AliCloud ROS Resource properties of an ${quoteCode(typeName.specName!.fqn)} resource.`,
    );
    this.code.line(' */');
    this.code.line('// @ts-ignore TS6133');
    if (isResourceType) {
      this.code.openBlock(
          `function ${mapperName.functionName}(properties: any, enableResourcePropertyConstraint: boolean): any`,
      );
    } else {
      this.code.openBlock(`function ${mapperName.functionName}(properties: any): any`);
    }

    // It might be that this value is 'null' or 'undefined', and that that's OK. Simply return
    // the falsey value, the upstream struct is in a better position to know whether this is required or not.
    this.code.line(`if (!${CORE}.canInspect(properties)) { return properties; }`);
    const validatorName = genspec.validatorName(typeName);

    // property type depend on the resource type, so the entry of validator, meaning whether validate the props,
    // should be in main resource's validtor and there is no need for property type
    if (isResourceType) {
      this.code.openBlock(`if(enableResourcePropertyConstraint)`);
      this.code.line(`${validatorName.fqn}(properties).assertSuccess();`);
      this.code.closeBlock();
    } else {
      this.code.line(`${validatorName.fqn}(properties).assertSuccess();`);
    }

    // Generate the return object
    this.code.line('return {');

    const self = this;
    Object.keys(nameConversionTable).forEach((rosTypeName) => {
      const propName = nameConversionTable[rosTypeName];
      const propSpec = propSpecs[rosTypeName];

      const mapperExpression = genspec.typeDispatch<string>(resource, propSpec, {
        visitAtom(type: genspec.CodeName) {
          const specType = type.specName && self.spec.PropertyTypes[type.specName.fqn];
          if (specType && !schema.isRecordType(specType)) {
            return genspec.typeDispatch(resource, specType, this);
          }
          return genspec.rosMapperName(type).fqn;
        },
        visitAtomUnion(types: genspec.CodeName[]) {
          const validators = types.map((type) => genspec.validatorName(type).fqn);
          const mappers = types.map((type) => this.visitAtom(type));
          return `${CORE}.unionMapper([${validators.join(', ')}], [${mappers.join(', ')}])`;
        },
        visitList(itemType: genspec.CodeName) {
          return `${CORE}.listMapper(${this.visitAtom(itemType)})`;
        },
        visitUnionList(itemTypes: genspec.CodeName[]) {
          const validators = itemTypes.map((type) => genspec.validatorName(type).fqn);
          const mappers = itemTypes.map((type) => this.visitAtom(type));
          return `${CORE}.listMapper(${CORE}.unionMapper([${validators.join(', ')}], [${mappers.join(', ')}]))`;
        },
        visitMap(itemType: genspec.CodeName) {
          return `${CORE}.hashMapper(${this.visitAtom(itemType)})`;
        },
        visitUnionMap(itemTypes: genspec.CodeName[]) {
          const validators = itemTypes.map((type) => genspec.validatorName(type).fqn);
          const mappers = itemTypes.map((type) => this.visitAtom(type));
          return `${CORE}.hashMapper(${CORE}.unionMapper([${validators.join(', ')}], [${mappers.join(', ')}]))`;
        },
        visitListOrAtom(types: genspec.CodeName[], itemTypes: genspec.CodeName[]) {
          const validatorNames = types.map((type) => genspec.validatorName(type).fqn).join(', ');
          const itemValidatorNames = itemTypes.map((type) => genspec.validatorName(type).fqn).join(', ');

          const scalarValidator = `${CORE}.unionValidator(${validatorNames})`;
          const listValidator = `${CORE}.listValidator(${CORE}.unionValidator(${itemValidatorNames}))`;
          const scalarMapper = `${CORE}.unionMapper([${validatorNames}], [${types
              .map((type) => this.visitAtom(type))
              .join(', ')}])`;
          // tslint:disable-next-line:max-line-length
          const listMapper = `${CORE}.listMapper(${CORE}.unionMapper([${itemValidatorNames}], [${itemTypes
              .map((type) => this.visitAtom(type))
              .join(', ')}]))`;

          return `${CORE}.unionMapper([${scalarValidator}, ${listValidator}], [${scalarMapper}, ${listMapper}])`;
        },
      });

      self.code.line(`  ${rosTypeName}: ${mapperExpression}(properties.${propName}),`);
    });
    this.code.line('};');
    this.code.closeBlock();
  }

  /**
   * Emit a function that will validate whether the given property bag matches the schema of this complex type
   *
   * Generated as a top-level function outside any namespace so we can hide it from library consumers.
   */
  private emitValidator(
      resource: genspec.CodeName,
      typeName: genspec.CodeName,
      propSpecs: { [name: string]: schema.Property },
      nameConversionTable: Dictionary<string>,
  ) {
    const validatorName = genspec.validatorName(typeName);

    this.code.line('/**');
    this.code.line(` * Determine whether the given properties match those of a ${quoteCode(typeName.className)}`);
    this.code.line(' *');
    this.code.line(` * @param properties - the TypeScript properties of a ${quoteCode(typeName.className)}`);
    this.code.line(' *');
    this.code.line(' * @returns the result of the validation.');
    this.code.line(' */');
    this.code.openBlock(`function ${validatorName.functionName}(properties: any): ${CORE}.ValidationResult`);
    this.code.line(`if (!${CORE}.canInspect(properties)) { return ${CORE}.VALIDATION_SUCCESS; }`);

    this.code.line(`const errors = new ${CORE}.ValidationResults();`);

    Object.keys(propSpecs).forEach((rosPropName) => {
      const propSpec = propSpecs[rosPropName];
      const propName = nameConversionTable[rosPropName];
      if (propSpec.Required) {
        this.code.line(
            `errors.collect(${CORE}.propertyValidator('${propName}', ${CORE}.requiredValidator)(properties.${propName}));`,
        );
      }
      // props constraint
      this.emitConstraints(propSpec, propName);

      const self = this;
      const validatorExpression = genspec.typeDispatch<string>(resource, propSpec, {
        visitAtom(type: genspec.CodeName) {
          const specType = type.specName && self.spec.PropertyTypes[type.specName.fqn];
          if (specType && !schema.isRecordType(specType)) {
            return genspec.typeDispatch(resource, specType, this);
          }
          return genspec.validatorName(type).fqn;
        },
        visitAtomUnion(types: genspec.CodeName[]) {
          return `${CORE}.unionValidator(${types.map((type) => this.visitAtom(type)).join(', ')})`;
        },
        visitList(itemType: genspec.CodeName) {
          return `${CORE}.listValidator(${this.visitAtom(itemType)})`;
        },
        visitUnionList(itemTypes: genspec.CodeName[]) {
          return `${CORE}.listValidator(${CORE}.unionValidator(${itemTypes
              .map((type) => this.visitAtom(type))
              .join(', ')}))`;
        },
        visitMap(itemType: genspec.CodeName) {
          return `${CORE}.hashValidator(${this.visitAtom(itemType)})`;
        },
        visitUnionMap(itemTypes: genspec.CodeName[]) {
          return `${CORE}.hashValidator(${CORE}.unionValidator(${itemTypes
              .map((type) => this.visitAtom(type))
              .join(', ')}))`;
        },
        visitListOrAtom(types: genspec.CodeName[], itemTypes: genspec.CodeName[]) {
          const scalarValidator = `${CORE}.unionValidator(${types.map((type) => this.visitAtom(type)).join(', ')})`;
          const listValidator = `${CORE}.listValidator(${CORE}.unionValidator(${itemTypes
              .map((type) => this.visitAtom(type))
              .join(', ')}))`;

          return `${CORE}.unionValidator(${scalarValidator}, ${listValidator})`;
        },
      });
      self.code.line(
          `errors.collect(${CORE}.propertyValidator('${propName}', ${validatorExpression})(properties.${propName}));`,
      );
    });

    this.code.line(`return errors.wrap('supplied properties not correct for "${typeName.className}"');`);

    this.code.closeBlock();
  }

  private emitConstraints(propSpec: schema.Property, propName: string) {
    if (!propSpec.Constraints || propSpec.Type === 'Map') return;
    for (let constraint of propSpec.Constraints) {
      let constraintType = Object.keys(constraint)[0];
      if (constraintType === 'Range') {
        if (
            (propSpec as schema.PrimitiveProperty).PrimitiveType === 'Integer' ||
            (propSpec as schema.PrimitiveProperty).PrimitiveType === 'Number'
        ) {
          this.code.openBlock(`if(properties.${propName} && (typeof properties.${propName}) !== 'object')`);
          this.code.line(`errors.collect(${CORE}.propertyValidator('${propName}', ${CORE}.validate${constraintType})({
            data: properties.${propName},
            min: ${Object.values(constraint)[0]['Min']},
            max: ${Object.values(constraint)[0]['Max']},
          }));`);
          this.code.closeBlock();
        }
      } else if (constraintType === 'Length') {
        if ((propSpec as schema.PrimitiveProperty).PrimitiveType === 'String' || propSpec.Type === 'List') {
          this.code.openBlock(
              `if(properties.${propName} && (Array.isArray(properties.${propName}) || (typeof properties.${propName}) === 'string'))`,
          );
          this.code.line(`errors.collect(${CORE}.propertyValidator('${propName}', ${CORE}.validate${constraintType})({
            data: properties.${propName}.length,
            min: ${Object.values(constraint)[0]['Min']},
            max: ${Object.values(constraint)[0]['Max']},
          }));`);
          this.code.closeBlock();
        }
      } else if (constraintType === 'AllowedValues') {
        let allowedValuesCode = '';
        if ((propSpec as schema.PrimitiveProperty).PrimitiveType === 'String') {
          allowedValuesCode = `["${Object.values(constraint)[0].join('","')}"],`;
        } else if (
            (propSpec as schema.PrimitiveProperty).PrimitiveType === 'Integer' ||
            (propSpec as schema.PrimitiveProperty).PrimitiveType === 'Number' ||
            (propSpec as schema.PrimitiveProperty).PrimitiveType === 'Boolean'
        ) {
          allowedValuesCode = `[${Object.values(constraint)[0]}],`;
        } else continue;
        this.code.openBlock(`if(properties.${propName} && (typeof properties.${propName}) !== 'object')`);
        this.code.line(`errors.collect(${CORE}.propertyValidator('${propName}', ${CORE}.validateAllowedValues)({
          data: properties.${propName},
          allowedValues: ${allowedValuesCode}
        }));`);
        this.code.closeBlock();
      } else if (constraintType === 'AllowedPattern') {
        this.code.openBlock(`if(properties.${propName} && (typeof properties.${propName}) !== 'object')`);
        this.code.line(`errors.collect(${CORE}.propertyValidator('${propName}', ${CORE}.validateAllowedPattern)({
          data: properties.${propName},
          reg: /${Object.values(constraint)[0].replaceAll('/', `\\/`)}/
        }));`);
        this.code.closeBlock();
      }
    }
  }

  private emitInterfaceProperty(props: EmitPropertyProps): string {
    const javascriptPropertyName = genspec.rosTemplateToScriptName(props.propName);

    this.docLink(
        undefined,
        `@Property ${javascriptPropertyName}: ${props.spec.Description?.replace(new RegExp('\n', 'gm'), '\n     * ')}`,
    );
    const line =
        props.propName === 'Tags' && (props.spec as schema.ComplexListProperty).ItemType === 'Tag'
            ? `: ${CORE}.RosTag[];`
            : `: ${this.findNativeType(props.context, props.spec, props.propName)};`;
    const question = props.spec.Required ? '' : '?';
    this.code.line(`readonly ${javascriptPropertyName}${question}${line}`);

    return javascriptPropertyName;
  }

  private emitClassProperty(props: EmitPropertyProps): string {
    const javascriptPropertyName = genspec.rosTemplateToScriptName(props.propName);
    this.docLink(
        undefined,
        `@Property ${javascriptPropertyName}: ${props.spec.Description?.replace(new RegExp('\n', 'gm'), '\n     * ')}`,
    );
    const question = props.spec.Required ? ';' : ' | undefined;';
    const line = `: ${`${this.findNativeType(props.context, props.spec, props.propName)}`}${question}`;
    if (schema.isTagPropertyName(props.propName) && schema.isTagProperty(props.spec)) {
      this.code.line(`public readonly tags: ${TAG_MANAGER};`);
    } else {
      this.code.line(`public ${javascriptPropertyName}${line}`);
    }

    return javascriptPropertyName;
  }

  private emitProperty(props: EmitPropertyProps, container: Container): string {
    switch (container) {
      case Container.Class:
        return this.emitClassProperty(props);
      case Container.Interface:
        return this.emitInterfaceProperty(props);
      default:
        throw new Error(`Unsupported container ${container}`);
    }
  }

  private beginNamespace(type: genspec.CodeName): void {
    if (type.namespace) {
      const parts = type.namespace.split('.');
      for (const part of parts) {
        this.code.openBlock(`export namespace ${part}`);
      }
    }
  }

  private endNamespace(type: genspec.CodeName): void {
    if (type.namespace) {
      const parts = type.namespace.split('.');
      for (const _ of parts) {
        this.code.closeBlock();
      }
    }
  }

  private emitPropertyType(
      resourceContext: genspec.CodeName,
      typeName: genspec.CodeName,
      propTypeSpec: schema.RecordProperty,
  ): void {
    this.code.line();
    this.beginNamespace(typeName);

    this.docLink(propTypeSpec.Documentation, '@stability external');
    if (!propTypeSpec.Properties || Object.keys(propTypeSpec.Properties).length === 0) {
      this.code.line('// tslint:disable-next-line:no-empty-interface | A genuine empty-object type');
    }
    this.code.openBlock(`export interface ${typeName.className}`);
    const conversionTable: Dictionary<string> = {};

    if (propTypeSpec.Properties) {
      Object.keys(propTypeSpec.Properties).forEach((propName) => {
        const propSpec = propTypeSpec.Properties[propName];
        const additionalDocs = quoteCode(`${typeName.fqn}.${propName}`);
        const newName = this.emitInterfaceProperty({
          context: resourceContext,
          propName,
          spec: propSpec,
          additionalDocs,
        });
        conversionTable[propName] = newName;
      });
    }

    this.code.closeBlock();
    this.endNamespace(typeName);

    // this.code.line();
    this.emitValidator(resourceContext, typeName, propTypeSpec.Properties, conversionTable);
    this.code.line();
    this.emitRosTemplateMapper(resourceContext, typeName, propTypeSpec.Properties, conversionTable, false);
  }

  /**
   * Return the native type expression for the given propSpec
   */
  private findNativeType(resourceContext: genspec.CodeName, propSpec: schema.Property, propName?: string): string {
    const alternatives: string[] = [];

    // render the union of all item types
    if (schema.isCollectionProperty(propSpec)) {
      // render the union of all item types
      const itemTypes = genspec.specTypesToCodeTypes(resourceContext, itemTypeNames(propSpec));

      // 'tokenizableType' operates at the level of rendered type names in TypeScript, so stringify
      // the objects.
      const renderedTypes = itemTypes.map((t) => this.renderCodeName(resourceContext, t));
      if (!tokenizableType(renderedTypes) && !schema.isTagPropertyName(propName)) {
        // Always accept a token in place of any list element (unless the list elements are tokenizable)
        itemTypes.push(genspec.TOKEN_NAME);
      }

      const union = this.renderTypeUnion(resourceContext, itemTypes);

      if (schema.isMapProperty(propSpec)) {
        alternatives.push(`{ [key: string]: (${union}) }`);
      } else if (schema.isListProperty(propSpec) &&
          (propSpec as schema.PrimitiveListProperty).PrimitiveItemType === schema.PrimitiveType.AnyDict) {
        alternatives.push(`Array<{ [key: string]: any }>`);
      } else {
        // To make TSLint happy, we have to either emit: SingleType[] or Array<Alt1 | Alt2>
        if (union.indexOf('|') !== -1) {
          alternatives.push(`Array<${union}>`);
        } else {
          alternatives.push(`${union}[]`);
        }
      }
    }

    // Yes, some types can be both collection and scalar. Looking at you, SAM.
    if (schema.isScalarProperty(propSpec)) {
      // Scalar type
      const typeNames = scalarTypeNames(propSpec);
      const types = genspec.specTypesToCodeTypes(resourceContext, typeNames);
      alternatives.push(this.renderTypeUnion(resourceContext, types));
    }

    // Only if this property is not of a "tokenizable type" (string, string[],
    // number in the future) we add a type union for `cdk.Token`. We rather
    // everything to be tokenizable because there are languages that do not
    // support union types (i.e. Java, .NET), so we lose type safety if we have
    // a union.
    if (!tokenizableType(alternatives) && !schema.isTagPropertyName(propName)) {
      alternatives.push(genspec.TOKEN_NAME.fqn);
    }
    return alternatives.join(' | ');
  }

  /**
   * Render a CodeName to a string representation of it in TypeScript
   */
  private renderCodeName(context: genspec.CodeName, type: genspec.CodeName): string {
    const rel = type.relativeTo(context);
    const specType = rel.specName && this.spec.PropertyTypes[rel.specName.fqn];
    if (!specType || schema.isRecordType(specType)) {
      return rel.fqn;
    }
    return this.findNativeType(context, specType);
  }

  private renderTypeUnion(context: genspec.CodeName, types: genspec.CodeName[]): string {
    return types.map((t) => this.renderCodeName(context, t)).join(' | ');
  }

  private docLink(link: string | undefined, ...before: string[]): void {
    if (!link && before.length === 0) {
      return;
    }
    this.code.line('/**');
    before.forEach((line) => this.code.line(` * ${line}`.trimRight()));
    if (link) {
      this.code.line(` * @see ${link}`);
    }
    this.code.line(' */');
    return;
  }
}

/**
 * Quotes a code name for inclusion in a JSDoc comment, so it will render properly
 * in the Markdown output.
 *
 * @param code a code name to be quoted.
 *
 * @returns the code name surrounded by double backticks.
 */
function quoteCode(code: string): string {
  return '`' + code + '`';
}

function tokenizableType(alternatives: string[]): boolean {
  if (alternatives.length > 1) {
    return false;
  }

  // 支持IResolvable隐式转换
  // const type = alternatives[0];
  // if (type === 'string') {
  //   return true;
  // }
  //
  // if (type === 'string[]') {
  //   return true;
  // }
  //
  // if (type === 'number') {
  //   return true;
  // }

  return false;
}

function tagType(resource: schema.TaggableResource): string {
  for (const name of Object.keys(resource.Properties)) {
    if (!schema.isTagPropertyName(name)) {
      continue;
    }
    if (schema.isTagPropertyStandard(resource.Properties[name])) {
      return `${TAG_TYPE}.STANDARD`;
    }
    if (schema.isTagPropertyAutoScalingGroup(resource.Properties[name])) {
      return `${TAG_TYPE}.AUTOSCALING_GROUP`;
    }
    if (
        schema.isTagPropertyJson(resource.Properties[name]) ||
        schema.isTagPropertyStringMap(resource.Properties[name])
    ) {
      return `${TAG_TYPE}.MAP`;
    }
  }
  return `${TAG_TYPE}.NOT_TAGGABLE`;
}

enum Container {
  Interface = 'INTERFACE',
  Class = 'CLASS',
}

interface EmitPropertyProps {
  context: genspec.CodeName;
  propName: string;
  spec: schema.Property;
  additionalDocs: string;
}
