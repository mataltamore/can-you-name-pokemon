import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationSelectComponent } from './generation-select.component';

describe('GenerationSelectComponent', () => {
  let component: GenerationSelectComponent;
  let fixture: ComponentFixture<GenerationSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
