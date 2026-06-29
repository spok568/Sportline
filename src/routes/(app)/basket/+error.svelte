<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import AuthModal from '$lib/components/authModal/authModal.svelte';
	import Button from '$lib/components/button.svelte';
	import { pictures } from '$lib/components/icon/icons';

	let isOpenModalAuth: boolean = $state(false);
</script>

<div class="relative flex min-h-screen flex-col items-center justify-center">
	{#if page.status === 401}
		<div
			class=" flex h-110 w-100 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white"
		>
			<div class="relative top-0 flex flex-col items-center justify-center">
				<pictures.Key class="h-20" />
				<span class=" text-6xl">{page.status}</span>
			</div>
			<div class="mt-2 flex justify-start py-6"><span class="text-2xl">Доступ запрещен</span></div>
			<div class="flex flex-col items-center justify-center gap-2 px-6 text-gray-500">
				<p>Извините, у вас нет прав для просмотра этой страницы.</p>
				<p>Пожалуйста, авторизуйтесь или обратитесь к администратору.</p>
			</div>
			<div class="relative top-3 flex justify-center gap-2">
				<Button
					variant="outline"
					label="На главную"
					class=" h-9 w-35  rounded-lg bg-gray-500 text-white hover:cursor-pointer hover:bg-gray-600"
					onClick={() => goto(resolve('/'))}
				/>
				<Button
					variant="outline"
					label="Войти"
					class=" h-9 w-35 rounded-lg hover:cursor-pointer hover:bg-gray-300"
					onClick={() => (isOpenModalAuth = true)}
				/>
			</div>
		</div>
	{:else}
		<div>{page.error?.message ?? 'неизвестная ошибка'}</div>
	{/if}
</div>
<AuthModal bind:isOpenModalAuth />
