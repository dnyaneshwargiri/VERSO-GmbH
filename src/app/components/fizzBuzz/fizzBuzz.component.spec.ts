import { render, screen, waitFor } from "@testing-library/angular";
import { FizzBuzzComponent } from "./fizzBuzz.component";
import { FizzBuzzService } from "../../services/fizzBuzz.service";
import { SharedService } from "../../shared/services/shared.service";
import { of } from "rxjs";
import { SequenceControlComponent } from "../sequenceControls/sequenceControls.component";
import { CommonModule } from "@angular/common";

describe("FizzBuzzComponent", () => {
  let fizzBuzzService: FizzBuzzService;
  let sharedService: SharedService;

  beforeEach(async () => {
    fizzBuzzService = {
      getFizzBuzz: jest.fn().mockReturnValue(of("1", "2", "Fizz", "4", "Buzz")),
    } as unknown as FizzBuzzService;

    sharedService = {
      stopSignal: jest.fn().mockReturnValue(of(false)),
      triggerStop: jest.fn(),
    } as unknown as SharedService;

    await render(FizzBuzzComponent, {
      imports: [CommonModule, SequenceControlComponent],
      providers: [
        { provide: FizzBuzzService, useValue: fizzBuzzService },
        { provide: SharedService, useValue: sharedService },
      ],
    });
  });

  it("should render the sequence of values", async () => {
    await waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
      expect(screen.getByText("Fizz")).toBeInTheDocument();
      expect(screen.getByText("4")).toBeInTheDocument();
      expect(screen.getByText("Buzz")).toBeInTheDocument();
    });
  });

  it("should call fizzBuzzService.getFizzBuzz() on startFizzBuzz", async () => {
    expect(fizzBuzzService.getFizzBuzz).toHaveBeenCalled();
  });
});
