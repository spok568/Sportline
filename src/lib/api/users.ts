import { CLIENT } from '$lib/api/CLIENT';
import { dataOrThrow } from '$lib/api/dataOrThrow';

import type { User, LoginResponse, loginBody } from '$lib/api/type';

let loggedInUser: User | null = null;

export async function login(body: loginBody): Promise<LoginResponse> {
	const data = await dataOrThrow<LoginResponse>(
		CLIENT.POST('/api/auth/login', {
			body
		})
	);

	localStorage.setItem('token', data.accessToken);
	localStorage.setItem('user', JSON.stringify(data.user));
	localStorage.setItem('role', data.user.role);

	loggedInUser = data.user;

	return data;
}

export function logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('user');
	localStorage.removeItem('role');

	loggedInUser = null;
}

export function getToken() {
	return localStorage.getItem('token');
}

export function getRole() {
	return localStorage.getItem('role');
}

export function getUser(): User | null {
	if (loggedInUser) return loggedInUser;

	const user = localStorage.getItem('user');

	if (!user) return null;

	loggedInUser = JSON.parse(user);

	return loggedInUser;
}
