import { createReducer, createSelector, on } from '@ngrx/store';
import { reset, set } from '../actions/cart.action';
import { Cart } from '../models/cart';

export interface CartState {
    cart: Cart;
}

const initialCartState: CartState = {
    cart: new Cart({
    })
};


const _cartReducer = createReducer(
    initialCartState,
    on(set, (state, {payload}) => ({
        cart: new Cart(payload)
    })),
    on(reset, state => ({
        cart: new Cart({})
    }))
   
  );
   
  export function cartReducer(state: any, action: any) {
    return _cartReducer(state, action);
  }


export const selectCartState = (state: any) => state.cartState;
export const selectCart = createSelector(selectCartState, (state) => state.cart);
