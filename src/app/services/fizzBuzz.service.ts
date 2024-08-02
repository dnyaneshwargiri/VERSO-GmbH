import { inject, Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import { concatMap, delay, takeUntil } from "rxjs/operators";
import { SharedService } from "./shared.service";
import { toObservable } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class FizzBuzzService {
  constructor(private sharedService: SharedService) {}
  private injector = inject(Injector);

  getFizzBuzz(): Observable<string> {
    const values = Array.from({ length: 100 }, (_, i) =>
      this.getFizzBuzzValue(i + 1)
    );
    return of(...values).pipe(concatMap((value) => of(value).pipe(delay(500))));
  }

  private getFizzBuzzValue(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num.toString();
  }
}
