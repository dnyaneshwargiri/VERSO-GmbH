import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private _stopSignal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  stopSignal(): Observable<boolean> {
    return this._stopSignal$.asObservable();
  }

  triggerStop() {
    this._stopSignal$.next(true);
  }

  resetStop() {
    this._stopSignal$.next(false);
  }
}
