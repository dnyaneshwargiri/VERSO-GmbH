import { Component, OnInit, OnDestroy, computed, inject } from "@angular/core";
import { FizzBuzzService } from "../../services/fizzBuzz.service";
import { InputBoxComponent } from "../widgets/inputBox/inputBox.component";
import { CommonModule } from "@angular/common";
import { AutoUnsubscribe } from "../../decorators/autoUnsubscribe.decorator";
import { Subscription } from "rxjs";

@AutoUnsubscribe()
@Component({
  selector: "app-fizz-buzz",
  templateUrl: "./fizzBuzz.component.html",
  imports: [InputBoxComponent, CommonModule],
  standalone: true,
})
export class FizzBuzzComponent implements OnInit, OnDestroy {
  values: string[] = [];
  private readonly maxItemsPerColumn = 10;
  columns: string[][] = [];
  private subscriptions: Subscription[] = [];
  private fizzBuzzService = inject(FizzBuzzService);

  ngOnInit() {
    this.startFizzBuzz();
  }

  startFizzBuzz() {
    const fizzBuzzSubscription = this.fizzBuzzService.getFizzBuzz().subscribe({
      next: (value) => {
        this.values.push(value);
      },
      complete: () => {
        console.log("Completed");
        this.ngOnDestroy();
      },
    });
    this.subscriptions.push(fizzBuzzSubscription);
  }

  ngOnDestroy() {}
}
