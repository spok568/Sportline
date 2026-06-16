import { CLIENT } from '$lib/api/CLIENT'
import type { PageLoad } from './$types'

export const fetchBasket = async() => {
    return CLIENT.GET('/api/cart')
}

export const fetchAddToBasket = (params: { productId: string,  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL', quantity: number }) => {
    return CLIENT.POST('/api/cart/items', {
        body: {
            productId: params.productId,
            size: params.size,
            quantity: params.quantity
        }
    })
}
const  load:PageLoad = async () => {
    fetchBasket(),
}