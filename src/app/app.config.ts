import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { FizzBuzzService } from "./services/fizzBuzz.service";
import { SharedService } from "./services/shared.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), FizzBuzzService, SharedService],
};
