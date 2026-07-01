import { CLIENT } from '$lib/api/CLIENT';
import { dataOrThrow } from '$lib/api/dataOrThrow';
import type { PageLoad } from '../$types';
const token = localStorage.getItem('token');

const getCategoryProduct = async () => {
	const data = await dataOrThrow(CLIENT.GET('/api/categories'));
	return data;
};

const getOrders = async () => {
	const data = await dataOrThrow(
		CLIENT.GET('/api/orders/my', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	);
	return data;
};

const getProductsAdmin = async () => {
	const data = await dataOrThrow(
		CLIENT.GET('/api/products/admin', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	);
	return data;
};

export const load: PageLoad = async () => {
	const [categorys, products, orders] = await Promise.all([
		getCategoryProduct(),
		getProductsAdmin(),
		getOrders()
	]);
	return {
		categorys,
		products,
		orders
	};
};
