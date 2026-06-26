import { error as kitError } from '@sveltejs/kit';

export const dataOrThrow = async <T>(
	res: Promise<{ data?: T; error?: { message?: string }; response: Response }>
): Promise<T> => {
	const { data, error, response } = await res;
	if (error != undefined || data === undefined) {
		throw kitError(response.status, {
			message: error?.message ?? 'Неизвестная ошибка'
		});
	}
	return data;
};
