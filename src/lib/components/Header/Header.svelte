<script lang="ts">
	export const ssr = false;

	import Nav from './Nav.svelte';
	import Sportline from '$lib/assets/Sportline.svg';
	import Profile from '$lib/components/Header/profile.svelte';
	import { getUser } from '$lib/api/users';
	import { onMount } from 'svelte';
	import type { User } from '$lib/api/users';

	let user: User | null = $state(null);

	onMount(() => {
		user = getUser();
	});
</script>

<div class="flex items-center justify-between gap-10 pt-2.5 pr-12.5 pb-2.5 pl-12.5">
	<Nav />
	<div class="flex w-156 justify-start">
		<img src={Sportline} alt="logo" class="text-[40px]" />
	</div>
	<div class="flex items-center gap-4">
		<Profile />
	</div>
</div>
