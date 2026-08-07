import type { CartDTO } from '@/dtos/cart.dto';
import type { CartModel } from '@/types/cart';

// Maps our frontend Domain Model into a DTO suitable for a checkout API
export const mapCartModelToDto = (cart: CartModel): CartDTO => {
    return {
        items: cart.items.map(item => ({
            guitarId: item.guitar.id,
            quantity: item.quantity
        }))
    };
};
