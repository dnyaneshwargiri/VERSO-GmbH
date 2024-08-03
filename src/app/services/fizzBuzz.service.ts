import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { concatMap, delay, filter, takeUntil, tap } from "rxjs/operators";
import { SharedService } from "../shared/services/shared.service";
import { Sequence } from "../shared/types/fizzBuzz";

@Injectable({
  providedIn: "root",
})
export class FizzBuzzService {
  constructor(private sharedService: SharedService) {}
  MAX_NUMBER = 100;

  getFizzBuzz(): Observable<string> {
    const sequence: Sequence = Array.from({ length: this.MAX_NUMBER }, (_, i) =>
      this.getFizzBuzzValue(i + 1)
    );
    return of(...sequence).pipe(
      concatMap((value) => of(value).pipe(delay(500))),
      takeUntil(this.sharedService.stopSignal().pipe(filter((stop) => stop)))
    );
  }

  // filter(
  //   () => !this.sharedService.stopSignal().pipe(filter((start) => !start))
  // )

  private getFizzBuzzValue(input: number): string {
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input.toString();
  }
}
