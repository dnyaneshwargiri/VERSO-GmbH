import { Component } from "@angular/core";
import { SharedService } from "../../../services/shared.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-input-box",
  templateUrl: "./inputBox.component.html",
  imports: [FormsModule],
  standalone: true,
})
export class InputBoxComponent {
  inputValue: string = "";

  constructor(private sharedService: SharedService) {}

  stop() {
    if (this.inputValue === "stop") {
      this.sharedService.triggerStop();
    }
  }
}
