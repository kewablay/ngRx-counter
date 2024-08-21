import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable } from 'rxjs';
import { decrement, increment, reset } from '../state/counter/counter.actions';
import { CommonModule } from '@angular/common';
import { selectCounterState } from '../state/counter/counter.selectors';
import { AppState } from '../app.state';
import { CounterState } from '../state/counter/counter.reducer';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass',
})
export class CounterComponent {
  // store = inject(Store)
  counter$: Observable<CounterState>;

  constructor(private store: Store<AppState>) {
    // this.counter$ = store.select(selectCounterState);
    this.counter$ = store.select(selectCounterState);
    console.log(this.counter$);
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
  }
}
