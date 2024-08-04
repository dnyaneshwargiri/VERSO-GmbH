import { Routes } from "@angular/router";
import { FizzBuzzComponent } from "./components/fizzBuzz/fizzBuzz.component";

export const routes: Routes = [
  { path: "", component: FizzBuzzComponent },
  { path: "**", redirectTo: "" },
];
