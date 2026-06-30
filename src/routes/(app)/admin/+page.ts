import { CLIENT } from '$lib/api/CLIENT';
import { dataOrThrow } from '$lib/api/dataOrThrow';
import type { PageLoad } from '../$types';
const token = localStorage.getItem('token');

export const load: PageLoad = async () => {
	const data = await dataOrThrow(
		CLIENT.GET('/api/products/admin', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	);
	return data;
};
