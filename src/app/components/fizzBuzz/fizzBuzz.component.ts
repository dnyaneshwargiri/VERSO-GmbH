import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { FizzBuzzService } from "../../services/fizzBuzz.service";
import { SequenceControlComponent } from "../sequenceControls/sequenceControls.component";
import { CommonModule } from "@angular/common";
import { AutoUnsubscribe } from "../../shared/decorators/autoUnsubscribe.decorator";
import { Subscription } from "rxjs";
import { Sequence } from "../../shared/types/fizzBuzz";

@AutoUnsubscribe()
@Component({
  selector: "app-fizz-buzz",
  templateUrl: "./fizzBuzz.component.html",
  imports: [SequenceControlComponent, CommonModule],
  standalone: true,
})
export class FizzBuzzComponent implements OnInit, OnDestroy {
  values: Sequence = [];
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
