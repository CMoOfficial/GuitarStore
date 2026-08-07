import type { GuitarModel } from './guitar';

export interface CartItemModel {
    guitar: GuitarModel;
    quantity: number;
}

export interface CartModel {
    items: CartItemModel[];
    totalItems: number;
    totalPrice: number;
}
