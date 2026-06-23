<script lang="ts">
	import { Tabs } from 'bits-ui';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';
	import { getToken, getUser } from '$lib/api/users';
	import type { RegisterFormData} from '$lib/api/schemaZod.js';
	import { CLIENT } from '$lib/api/CLIENT.js';
import { superForm } from 'sveltekit-superforms/client';
import type { SuperValidated } from 'sveltekit-superforms';

	type ApiResponse<T = unknown> = { error?: { message?: string }; data?: T } | null;

	let { data } = $props();
	
	
	const { form, errors } = superForm(data.form as SuperValidated<RegisterFormData>);

	async function handleLogin() {
		const result = await CLIENT.POST('/api/auth/login', {
			headers: { "Content-Type": "application/json" },
			body: {
				email: $form.email,
				password: $form.password
			}
		}) as ApiResponse<{ accessToken?: string; user?: unknown }>;

		if (!result || result.error || !result.data) {
			alert('Неверный email или пароль');
			return;
		}

		const loginData = result.data as { accessToken?: string; user?: unknown };
		localStorage.setItem('token', loginData.accessToken ?? '');
		localStorage.setItem('user', JSON.stringify(loginData.user ));
		await goto('/');
	}

	async function handlRegistr() {
		const result = await CLIENT.POST('/api/auth/register', {
			headers: { "Content-Type": "application/json" },
			body: {
				email: $form.email,
				password: $form.password,
				firstName: $form.firstName,
				lastName: $form.lastName,
				phone: $form.phone
			}
		}) as ApiResponse;

		if (result?.error) {
			
			alert(result.error.message || 'Ошибка регистрации');
			return;
		}

		getToken();
		getUser();
		await goto('/');
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50">
	<div class="w-[631px] bg-white p-6 shadow-md">
		<Tabs.Root value="login">
			<div class="flex w-full justify-between mb-6 border-b border-gray-200 pb-2">
				<Tabs.Trigger
					value="login"
					class="w-[260px] h-[34px] text-sm font-bold flex items-center justify-center data-[state=active]:bg-black data-[state=active]:text-white"
				>
					Вход
				</Tabs.Trigger>
				<Tabs.Trigger
					value="register"
					class="w-[260px] h-[34px] text-sm font-bold flex items-center justify-center data-[state=active]:bg-black data-[state=active]:text-white"
				>
					Регистрация
				</Tabs.Trigger>
			</div>

			<Tabs.Content value="login" class="grid grid-cols-1 gap-4">
				<form on:submit|preventDefault={handleLogin}>
					<p class="font-bold text-gray-800 text-[16px]">Укажите ваши данные</p>
					<Input inputType="text" bind:value={$form.email} className='w-full' placeholder="E-mail" label='Введите E-mail:' />
					<span class="text-red-500">{$errors.email}</span>
					<Input inputType="password" bind:value={$form.password} className='w-full' placeholder="Пароль" label='Введите Пароль:' />
					<span class="text-red-500">{$errors.password}</span>
					<Button variant='outline' class='w-full mt-4 bg-gray-200 text-black border-none h-[35px]' onClick={handleLogin}>Войти</Button>
				</form>
			</Tabs.Content>

			
			<Tabs.Content value="register">
				<form on:submit|preventDefault={handlRegistr} class="grid grid-cols-2 gap-4">
					<p class="col-span-2 font-bold text-gray-800 text-[16px]">Укажите ваши данные</p>
					
					<Input inputType="text" bind:value={$form.firstName} className='w-full' placeholder="Имя" />
					<Input inputType="text" bind:value={$form.lastName} placeholder="Фамилия" className='w-full' />
					
					<Input inputType="email" bind:value={$form.email} placeholder="email" className='w-full' />
					<Input inputType="text" bind:value={$form.phone} placeholder="Номер телефона" className='w-full' />
					
					<div class="col-span-2">
						<Input inputType="password" bind:value={$form.password} placeholder="Пароль" className='w-full' />
					</div>
					
					<Button variant='outline' class="col-span-2 w-full bg-gray-200 text-black border-none h-[35px]" onClick={handlRegistr}>Зарегистрироваться</Button>
				</form>
			</Tabs.Content>
		</Tabs.Root> 
	</div>
</div>