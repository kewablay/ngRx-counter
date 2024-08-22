import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from '../state/counter/counter.reducer';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent, FormsModule],
      providers: [provideStore({ counter: counterReducer })],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the count', () => {
    component.increment();
    fixture.detectChanges();
    const countElement = fixture.debugElement.query(By.css('.count')).nativeElement;
    expect(countElement.textContent).toContain('1');
  });

  it('should decrement the count', () => {
    component.increment(); // Increase count first
    component.increment();
    component.decrement();
    fixture.detectChanges();
    const countElement = fixture.debugElement.query(By.css('.count')).nativeElement;
    expect(countElement.textContent).toContain('1');
  });

  it('should not decrement the count below 0', () => {
    component.decrement();
    fixture.detectChanges();
    const countElement = fixture.debugElement.query(By.css('.count')).nativeElement;
    expect(countElement.textContent).toContain('0');
  });

  it('should reset the count to 0', () => {
    component.increment();
    component.increment();
    component.reset();
    fixture.detectChanges();
    const countElement = fixture.debugElement.query(By.css('.count')).nativeElement;
    expect(countElement.textContent).toContain('0');
  });

  it('should update the interval when set', () => {
    component.interval = 5;
    component.setCountInterval();
    fixture.detectChanges();
    expect(component.interval).toBe(5);
  });

});
