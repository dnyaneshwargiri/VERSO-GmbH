import { Component, OnInit, OnDestroy } from "@angular/core";
import { FizzBuzzService } from "../../services/fizzBuzz.service";
import { SharedService } from "../../services/shared.service";
import { InputBoxComponent } from "../widgets/inputBox/inputBox.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-fizz-buzz",
  templateUrl: "./fizzBuzz.component.html",
  imports: [InputBoxComponent, CommonModule],
  standalone: true,
})
export class FizzBuzzComponent implements OnInit, OnDestroy {
  values: string[] = [];
  private stopSignal = this.sharedService.stopSignal;
  private intervalId?: any;

  constructor(
    private fizzBuzzService: FizzBuzzService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (this.stopSignal()) {
        this.ngOnDestroy();
        return;
      }

      this.fizzBuzzService.getFizzBuzz().subscribe((value) => {
        this.values.push(value);
      });
    }, 500);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
