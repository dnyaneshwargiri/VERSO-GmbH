import { Injectable } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FizzBuzzService {
  getFizzBuzz(): Observable<string> {
    return interval(500).pipe(
      map((i) => i + 1),
      takeWhile((i) => i <= 100),
      map((i) => {
        if (i % 3 === 0 && i % 5 === 0) return "FizzBuzz";
        if (i % 3 === 0) return "Fizz";
        if (i % 5 === 0) return "Buzz";
        return i.toString();
      })
    );
  }
}
