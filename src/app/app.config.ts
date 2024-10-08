import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
// import { reducers, metaReducers } from './reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    // provideStore(reducers, { metaReducers }),
    provideState({
      name: 'counter',
      reducer: counterReducer,
    }),
  ],
};
