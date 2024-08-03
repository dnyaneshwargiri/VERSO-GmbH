import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor() {}
  title = "FizzBuzz App";
  ngOnInit() {}
}
