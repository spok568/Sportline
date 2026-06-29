<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import { pictures } from '$lib/components/icon/icons';
	import { fade, fly } from 'svelte/transition';
	import { logout } from '$lib/api/function';
	import { getToken } from '$lib/api/users';
	import AuthModal from '../authModal/authModal.svelte';
	let isOpenModalAuth: boolean = $state(false);
	let token = getToken();
	let isMenuOpen = $state(false);
</script>

{#if token}
	<div class="relative inline-block">
		<Button
			iconFirst={pictures.ProfileIcon}
			variant="noBorder"
			class="h-12.5 w-12.5 rounded-full bg-black text-white hover:bg-gray-900"
			onClick={() => (isMenuOpen = !isMenuOpen)}
		/>

		{#if isMenuOpen}
			<div
				class="absolute top-full right-0 z-50 mt-2 w-30 p-2"
				in:fly={{ y: -10, duration: 200 }}
				out:fade
			>
				<Button
					label="выйти"
					variant="outline"
					class="w-full justify-center  text-center text-sm  hover:cursor-pointer hover:bg-white/20"
					onClick={logout}
				/>
			</div>
		{/if}
	</div>
{:else}
	<Button
		label="Войти"
		variant="outline"
		onClick={() => (isOpenModalAuth = true)}
		class="rounded-lg hover:cursor-pointer hover:bg-gray-100"
	/>
{/if}
<div class="  inset-0 flex items-start justify-end">
	<AuthModal bind:isOpenModalAuth />
</div>
