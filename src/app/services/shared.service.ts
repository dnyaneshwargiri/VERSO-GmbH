import { Injectable } from "@angular/core";
import { WritableSignal, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private _stopSignal: WritableSignal<boolean> = signal<boolean>(false);

  get stopSignal() {
    return this._stopSignal;
  }

  triggerStop() {
    this._stopSignal.set(true);
  }

  resetStop() {
    this._stopSignal.set(false);
  }
}
