import { CLIENT } from '$lib/api/CLIENT';
import { dataOrThrow } from '$lib/api/dataOrThrow';
import type { Product } from '$lib/api/type';

const sportLoad = async () => {
	const data = await dataOrThrow<{ items: Product[] }>(
		CLIENT.GET('/api/products', {
			params: {
				query: {
					categorySlug: 'sport-tovary'
				}
			}
		})
	);
	return data?.items;
};

const shoesLoad = async () => {
	const data = await dataOrThrow<{ items: Product[] }>(
		CLIENT.GET('/api/products', {
			params: {
				query: {
					categorySlug: 'obuv'
				}
			}
		})
	);
	return data?.items;
};

const closesLoad = async () => {
	const data = await dataOrThrow<{ items: Product[] }>(
		CLIENT.GET('/api/products', {
			params: {
				query: {
					categorySlug: 'odezhda'
				}
			}
		})
	);
	return data?.items;
};

export const load = async () => {
	const [sport, shoes, closes] = await Promise.all([sportLoad(), shoesLoad(), closesLoad()]);

	return {
		closes,
		shoes,
		sport
	};
};
