"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = exports.JestFriendlyAssertion = exports.Assertion = void 0;
class Assertion {
    /**
     * Assert this thing and another thing
     */
    and(assertion) {
        // Needs to delegate to a function so that we can import mutually dependent classes in the right order
        return and(this, assertion);
    }
    assertOrThrow(inspector) {
        if (!this.assertUsing(inspector)) {
            throw new Error(`${JSON.stringify(inspector.value, null, 2)} does not match ${this.description}`);
        }
    }
}
exports.Assertion = Assertion;
class JestFriendlyAssertion extends Assertion {
}
exports.JestFriendlyAssertion = JestFriendlyAssertion;
const and_assertion_1 = require("./assertions/and-assertion");
function and(left, right) {
    return new and_assertion_1.AndAssertion(left, right);
}
const negated_assertion_1 = require("./assertions/negated-assertion");
function not(assertion) {
    return new negated_assertion_1.NegatedAssertion(assertion);
}
exports.not = not;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXJ0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQXNCLFNBQVM7SUFLN0I7O09BRUc7SUFDSSxHQUFHLENBQUMsU0FBb0M7UUFDN0Msc0dBQXNHO1FBQ3RHLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sYUFBYSxDQUFDLFNBQXlCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbkc7SUFDSCxDQUFDO0NBQ0Y7QUFsQkQsOEJBa0JDO0FBRUQsTUFBc0IscUJBQXdELFNBQVEsU0FBeUI7Q0FLOUc7QUFMRCxzREFLQztBQUVELDhEQUEwRDtBQUUxRCxTQUFTLEdBQUcsQ0FBc0IsSUFBa0IsRUFBRSxLQUFtQjtJQUN2RSxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELHNFQUFrRTtBQUVsRSxTQUFnQixHQUFHLENBQXNCLFNBQXVCO0lBQzlELE9BQU8sSUFBSSxvQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRkQsa0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnNwZWN0b3IgfSBmcm9tICcuL2luc3BlY3Rvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBc3NlcnRpb248SW5zcGVjdG9yQ2xhc3MgZXh0ZW5kcyBJbnNwZWN0b3I+IHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgcHVibGljIGFic3RyYWN0IGFzc2VydFVzaW5nKGluc3BlY3RvcjogSW5zcGVjdG9yQ2xhc3MpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBc3NlcnQgdGhpcyB0aGluZyBhbmQgYW5vdGhlciB0aGluZ1xuICAgKi9cbiAgcHVibGljIGFuZChhc3NlcnRpb246IEFzc2VydGlvbjxJbnNwZWN0b3JDbGFzcz4pOiBBc3NlcnRpb248SW5zcGVjdG9yQ2xhc3M+IHtcbiAgICAvLyBOZWVkcyB0byBkZWxlZ2F0ZSB0byBhIGZ1bmN0aW9uIHNvIHRoYXQgd2UgY2FuIGltcG9ydCBtdXR1YWxseSBkZXBlbmRlbnQgY2xhc3NlcyBpbiB0aGUgcmlnaHQgb3JkZXJcbiAgICByZXR1cm4gYW5kKHRoaXMsIGFzc2VydGlvbik7XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0T3JUaHJvdyhpbnNwZWN0b3I6IEluc3BlY3RvckNsYXNzKSB7XG4gICAgaWYgKCF0aGlzLmFzc2VydFVzaW5nKGluc3BlY3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShpbnNwZWN0b3IudmFsdWUsIG51bGwsIDIpfSBkb2VzIG5vdCBtYXRjaCAke3RoaXMuZGVzY3JpcHRpb259YCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKZXN0RnJpZW5kbHlBc3NlcnRpb248SW5zcGVjdG9yQ2xhc3MgZXh0ZW5kcyBJbnNwZWN0b3I+IGV4dGVuZHMgQXNzZXJ0aW9uPEluc3BlY3RvckNsYXNzPiB7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbWVzc2FnZSB0aGF0IGNhbiBiZSB1c2VkIGJ5IEplc3QuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoKTogc3RyaW5nO1xufVxuXG5pbXBvcnQgeyBBbmRBc3NlcnRpb24gfSBmcm9tICcuL2Fzc2VydGlvbnMvYW5kLWFzc2VydGlvbic7XG5cbmZ1bmN0aW9uIGFuZDxJIGV4dGVuZHMgSW5zcGVjdG9yPihsZWZ0OiBBc3NlcnRpb248ST4sIHJpZ2h0OiBBc3NlcnRpb248ST4pOiBBc3NlcnRpb248ST4ge1xuICByZXR1cm4gbmV3IEFuZEFzc2VydGlvbihsZWZ0LCByaWdodCk7XG59XG5cbmltcG9ydCB7IE5lZ2F0ZWRBc3NlcnRpb24gfSBmcm9tICcuL2Fzc2VydGlvbnMvbmVnYXRlZC1hc3NlcnRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gbm90PFQgZXh0ZW5kcyBJbnNwZWN0b3I+KGFzc2VydGlvbjogQXNzZXJ0aW9uPFQ+KTogQXNzZXJ0aW9uPFQ+IHtcbiAgcmV0dXJuIG5ldyBOZWdhdGVkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG59XG4iXX0=