import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
  setCountInterval,
} from '../state/counter/counter.actions';
import { CommonModule } from '@angular/common';
import { selectCounterState } from '../state/counter/counter.selectors';
import { AppState } from '../app.state';
import { CounterState } from '../state/counter/counter.reducer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass',
})
export class CounterComponent {
  // store = inject(Store)
  counter$: Observable<CounterState>;
  // @Input() interval: number = 1;
  interval: number = 1;

  presets = [5, 10, 15, 20];

  constructor(private store: Store<AppState>) {
    // this.counter$ = store.select(selectCounterState);
    this.counter$ = store.select(selectCounterState);
    // console.log(this.counter$);
    this.store.select(selectCounterState).subscribe((counter) => {
      // get item from local storage if it does not exist save to local storage
      localStorage.setItem('counter', JSON.stringify(counter));
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
    this.interval = 1;
  }

  setCountInterval() {
    this.store.dispatch(setCountInterval({ interval: this.interval }));
  }

  setPreset(preset: number) {
    this.interval = preset;
    this.setCountInterval();
  }
}
