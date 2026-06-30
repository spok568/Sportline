import { CLIENT } from '$lib/api/CLIENT';
import { dataOrThrow } from '$lib/api/dataOrThrow';

const recommendProducts = async () => {
	const data = await dataOrThrow(CLIENT.GET('/api/products/featured'));

	return data;
};

const fetchCategori = async () => {
	const data = await dataOrThrow(CLIENT.GET('/api/categories'));
	return data;
};

const sportLoad = async () => {
	const data = await dataOrThrow(
		CLIENT.GET('/api/products', {
			params: {
				query: {
					categorySlug: 'sport-tovary'
				}
			}
		})
	);
	return data.items;
};

const shoesLoad = async () => {
	const data = await dataOrThrow(
		CLIENT.GET('/api/products', {
			params: {
				query: {
					categorySlug: 'obuv'
				}
			}
		})
	);
	return data.items;
};

const closesLoad = async () => {
	const data = await dataOrThrow(
		CLIENT.GET('/api/products', {
			params: {
				query: {
					categorySlug: 'odezhda'
				}
			}
		})
	);
	return data.items;
};

export const load = async () => {
	const [sport, shoes, closes, recommend, categories] = await Promise.all([
		sportLoad(),
		shoesLoad(),
		closesLoad(),
		recommendProducts(),
		fetchCategori()
	]);

	return {
		recommend,
		closes,
		shoes,
		sport,
		categories
	};
};
