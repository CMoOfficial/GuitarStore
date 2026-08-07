export interface CartItemDTO {
    guitarId: number;
    quantity: number;
}

export interface CartDTO {
    items: CartItemDTO[];
}
