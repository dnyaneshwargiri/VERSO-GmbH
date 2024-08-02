import { Subscription } from "rxjs";

export function AutoUnsubscribe() {
  return function (constructor: Function) {
    const originalOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      if (this.subscriptions && Array.isArray(this.subscriptions)) {
        this.subscriptions.forEach((subscription: Subscription) =>
          subscription.unsubscribe()
        );
      }
      if (originalOnDestroy) {
        originalOnDestroy.apply(this);
        console.log("dstryed");
      }
    };
  };
}
