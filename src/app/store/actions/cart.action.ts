
import { createAction, props } from '@ngrx/store';
import { Cart } from '../models/cart';

export const set = createAction('[Cart] Set',props<{payload: Cart}>())
export const reset = createAction('[Cart] Reset');

