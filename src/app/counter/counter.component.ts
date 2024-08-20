import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass',
})
export class CounterComponent {
  // store = inject(Store)
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select((state) => state.count);
    this.store
      .select((state) => state.count)
      .subscribe((count) => {
        // get item from local storage if it does not exist save to local storage
        localStorage.setItem('count', count.toString());
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
