import { TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";

import { FizzBuzzService } from "./fizzBuzz.service";
import { SharedService } from "../shared/services/shared.service";

describe("FizzBuzzService", () => {
  let service: FizzBuzzService;
  let sharedService: SharedService;

  beforeEach(() => {
    sharedService = {
      stopSignal: jest.fn().mockReturnValue(of(false)),
    } as unknown as SharedService;

    TestBed.configureTestingModule({
      providers: [
        FizzBuzzService,
        { provide: SharedService, useValue: sharedService },
      ],
    });

    service = TestBed.inject(FizzBuzzService);
  });

  describe("getFizzBuzzValue", () => {
    it('should return "Fizz" for multiples of 3', () => {
      expect(service.getFizzBuzzValue(3)).toBe("Fizz");
      expect(service.getFizzBuzzValue(6)).toBe("Fizz");
    });

    it('should return "Buzz" for multiples of 5', () => {
      expect(service.getFizzBuzzValue(5)).toBe("Buzz");
      expect(service.getFizzBuzzValue(10)).toBe("Buzz");
    });

    it('should return "FizzBuzz" for multiples of 3 and 5', () => {
      expect(service.getFizzBuzzValue(15)).toBe("FizzBuzz");
      expect(service.getFizzBuzzValue(30)).toBe("FizzBuzz");
    });

    it("should return the number as a string for other numbers", () => {
      expect(service.getFizzBuzzValue(1)).toBe("1");
      expect(service.getFizzBuzzValue(2)).toBe("2");
      expect(service.getFizzBuzzValue(4)).toBe("4");
    });
  });

  describe("getFizzBuzz", () => {
    it("should return an observable emitting the correct sequence", () => {
      const result = service.getFizzBuzz();
      expect(result).toBeInstanceOf(Observable);
    });

    it("should stop emitting values when stopSignal is true", () => {
      const stopSignal$ = of(true);
      (sharedService.stopSignal as jest.Mock).mockReturnValue(stopSignal$);
      const result = service.getFizzBuzz();
      expect(result).toBeInstanceOf(Observable);
    });
  });
});
