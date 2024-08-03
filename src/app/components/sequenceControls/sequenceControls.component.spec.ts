/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SequenceControlComponent } from "./sequenceControls.component";

describe("SequenceControlComponent", () => {
  let component: SequenceControlComponent;
  let fixture: ComponentFixture<SequenceControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceControlComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
