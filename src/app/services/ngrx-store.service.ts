import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset, set } from '../store/actions/cart.action';
import { CartState } from '../store/reducers/cart.reducer';

@Injectable({
  providedIn: 'root'
})
export class NgrxStoreService {

constructor(private store: Store<CartState>) { }

set(data: any) {
  this.store.dispatch(set({ payload: data }));
}

reset() {
  this.store.dispatch(reset());
}

}