import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer'; // Update with the actual path if different
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        CounterComponent,
        RouterOutlet,
        CommonModule
      ],
      providers: [
        provideStore({ counter: counterReducer }),
        provideRouter([]) // Provide an empty router config or actual routes if needed
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the CounterComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection to ensure the template is updated
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-counter')).not.toBeNull();
  });
});
