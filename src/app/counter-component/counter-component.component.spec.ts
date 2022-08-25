import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentComponent } from './counter-component.component';

describe('CounterComponentComponent', () => {
  let component: CounterComponentComponent;
  let fixture: ComponentFixture<CounterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
