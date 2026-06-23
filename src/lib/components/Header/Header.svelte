<script lang="ts">
	export const ssr = false;

	import Nav from './Nav.svelte';
	import Sportline from '$lib/assets/Sportline.png';
	import Profile from '$lib/components/Header/profile.svelte';
	import { getUser } from '$lib/api/users';
	import { onMount } from 'svelte';
import type { User } from '$lib/api/users';

	let user: User | null = $state(null);

	onMount(() => {
		user = getUser();
	});
</script>

<div class="flex items-center justify-around gap-10 pt-[10px] pr-[10px] pb-[10px] pl-[10px]">
	<Nav />
	
	<img src={Sportline} alt="logo" class="text-[40px]"/>
	
	<div class="flex items-center gap-4">
		<Profile />
	</div>
</div>
