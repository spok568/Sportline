import { CLIENT } from '$lib/api/CLIENT';
import { dataOrThrow } from '$lib/api/dataOrThrow';
import type { CartItem } from '$lib/api/type';

export const load = async () => {
	const token = localStorage.getItem('token');
	const data = await dataOrThrow<{ items: CartItem[] }>(
		CLIENT.GET('/api/cart', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	);

	return {
		items: data.items || []
	};
};
