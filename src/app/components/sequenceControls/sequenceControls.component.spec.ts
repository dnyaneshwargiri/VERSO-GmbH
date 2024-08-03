import { render, screen, fireEvent, waitFor } from "@testing-library/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { SequenceControlComponent } from "./sequenceControls.component";
import { SharedService } from "../../shared/services/shared.service";

describe("SequenceControlComponent", () => {
  let sharedService: SharedService;

  beforeEach(async () => {
    sharedService = {
      triggerStop: jest.fn(),
    } as unknown as SharedService;

    await render(SequenceControlComponent, {
      imports: [ReactiveFormsModule],
      providers: [{ provide: SharedService, useValue: sharedService }],
    });
  });

  it("should render the Stop button", () => {
    expect(screen.getByText("Stop")).toBeInTheDocument();
  });

  it('should enable the Stop button when input is "stop"', async () => {
    const input = screen.getByPlaceholderText(
      "Enter 'stop' to stop"
    ) as HTMLInputElement;
    fireEvent.input(input, { target: { value: "stop" } });
    await waitFor(() => {
      expect(screen.getByText("Stop")).not.toBeDisabled();
    });
  });

  it('should disable the Stop button when input is not "stop"', async () => {
    const input = screen.getByPlaceholderText(
      "Enter 'stop' to stop"
    ) as HTMLInputElement;
    fireEvent.input(input, { target: { value: "notstop" } });
    await waitFor(() => {
      expect(screen.getByText("Stop")).toBeDisabled();
    });
  });

  it("should call sharedService.triggerStop() on Stop button click", async () => {
    const input = screen.getByPlaceholderText(
      "Enter 'stop' to stop"
    ) as HTMLInputElement;
    fireEvent.input(input, { target: { value: "stop" } });
    fireEvent.click(screen.getByText("Stop"));
    expect(sharedService.triggerStop).toHaveBeenCalled();
  });
});
