import { createSelector } from "@ngrx/store";
import { Observable } from "rxjs";

// export interface CounterState {
//     count: number
// }


// this.count$ = store.select(state => state.count);

  // store = inject(Store)
  count$: Observable<number>;