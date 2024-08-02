import { TestBed, async, inject } from "@angular/core/testing";
import { FizzBuzzService } from "./fizzBuzz.service";

describe("Service: FizzBuzz", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzBuzzService],
    });
  });

  it("should ...", inject([FizzBuzzService], (service: FizzBuzzService) => {
    expect(service).toBeTruthy();
  }));
});
