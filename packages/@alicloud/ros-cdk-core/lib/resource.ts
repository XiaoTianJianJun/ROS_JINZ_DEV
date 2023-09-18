import { Construct, IConstruct } from "./construct-compat";
import {
  generatePhysicalName,
  isGeneratedWhenNeededMarker,
} from "./private/physical-name-generator";
import { RosResource } from "./ros-resource";
import { RemovalPolicy } from "./ros-removal-policy";
import { RosCondition } from "./ros-condition";
import { Token } from "./token";
import { Lazy } from "./lazy";
import { Stack } from "./stack";
import {IResolvable} from "./resolvable";
/**
 * Interface for the Resource construct.
 */
export interface IResource extends IConstruct {
  /**
   * The stack in which this resource is defined.
   */
  readonly stack: Stack;
}

/**
 * Construction properties for {@link Resource}.
 */
export interface ResourceProps {
  /**
   * The value passed in by users to the physical name prop of the resource.
   *
   * - `undefined` implies that a physical name will be allocated during deployment.
   * - a concrete value implies a specific physical name
   * - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
   *   by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.
   *
   * @default - The physical name will be allocated at deployment time
   */
  readonly physicalName?: string;
}

/**
 * A construct which represents a resource.
 */
export abstract class Resource extends Construct implements IResource {
  public readonly stack: Stack;
  public resource: RosResource | undefined;
  /**
   * Returns a string-encoded token that resolves to the physical name that
   * should be passed to the ROS resource.
   *
   * This value will resolve to one of the following:
   * - a concrete value (e.g. `"my-awesome-bucket"`)
   * - `undefined`, when a name should be generated by ROS
   * - a concrete name generated automatically during synthesis, in
   *   cross-environment scenarios.
   *
   * @experimental
   */
  protected readonly physicalName: string;

  private _physicalName: string | undefined;
  private readonly _allowCrossEnvironment: boolean;

  constructor(scope: Construct, id: string, props: ResourceProps = {}) {
    super(scope, id);
    this.stack = Stack.of(this);

    let physicalName = props.physicalName;

    if (props.physicalName && isGeneratedWhenNeededMarker(props.physicalName)) {
      // auto-generate only if cross-env is required
      this._physicalName = undefined;
      this._allowCrossEnvironment = true;
      physicalName = Lazy.stringValue({ produce: () => this._physicalName });
    } else if (props.physicalName && !Token.isUnresolved(props.physicalName)) {
      // concrete value specified by the user
      this._physicalName = props.physicalName;
      this._allowCrossEnvironment = true;
    } else {
      // either undefined (deploy-time) or has tokens, which means we can't use for cross-env
      this._physicalName = props.physicalName;
      this._allowCrossEnvironment = false;
    }

    if (physicalName === undefined) {
      physicalName = Token.asString(undefined);
    }

    this.physicalName = physicalName;
  }

  public addDependency(resource: Resource): void {
    this.resource?.addRosDependency(resource.node.id);
  }
  public applyRemovalPolicy(policy: RemovalPolicy) {
    this.resource?.applyRemovalPolicy(policy);
  }

  public addCondition(condition: RosCondition) {
    this.resource?.addCondition(condition);
  }

  public addResourceDesc(desc: string) {
    this.resource?.addDesc(desc);
  }

  public setMetadata(key: string, value: any) {
    if (this.resource) {
      this.resource.addMetaData(key, value);
    }
  }

  public addCount(count: number | IResolvable) {
    this.resource?.addCount(count);
  }

  public getAtt(name: string): IResolvable {
    return Token.asAny(this.resource?.getAtt(name));
  }

  public get ref(): string {
    return Token.asString(this.resource?.ref);
  }

  /**
   * Called when this resource is referenced across environments
   * (account/region) to order to request that a physical name will be generated
   * for this resource during synthesis, so the resource can be referenced
   * through it's absolute name/arn.
   *
   * @internal
   */
  public _enableCrossEnvironment(): void {
    if (!this._allowCrossEnvironment) {
      // error out - a deploy-time name cannot be used across environments
      throw new Error(
        `Cannot use resource '${this.node.path}' in a cross-environment fashion, ` +
          "the resource's physical name must be explicit set or use `PhysicalName.GENERATE_IF_NEEDED`"
      );
    }

    if (!this._physicalName) {
      this._physicalName = this.generatePhysicalName();
    }
  }

  protected generatePhysicalName(): string {
    return generatePhysicalName(this);
  }
}
