import { redirect, fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { registerZod } from '$lib/api/schemaZod';
import type { PageServerLoad, Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ cookies }) => {
	const token = cookies.get('token');
	if (token) {
		throw redirect(303, '/');
	}

	const form = await superValidate(zod(registerZod as any));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(registerZod as any));

		if (!form.valid) {
			return fail(400, { form });
		}

		return {
			form,
			success: true
		};
	}
};
