import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedService } from "../../shared/services/shared.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sequence-controls",
  templateUrl: "./sequenceControls.component.html",
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class SequenceControlComponent {
  stopFizBuzzForm: FormGroup;
  private sharedService = inject(SharedService);

  constructor(private fb: FormBuilder) {
    this.stopFizBuzzForm = this.fb.group({
      inputValue: ["", [Validators.required, this.stopValidator]],
    });
  }

  stopValidator(control: FormControl) {
    const value = control.value.trim();
    return value.toLowerCase() === "stop" ? null : { invalidStop: true };
  }

  onSubmit() {
    if (this.stopFizBuzzForm.valid) {
      this.sharedService.triggerStop();
    }
  }

  get inputValue() {
    return this.stopFizBuzzForm.get("inputValue");
  }
}
