<script lang="ts">
	export const ssr = false;

	import Nav from '$lib/components/Header/nav.svelte';
	import { pictures } from '$lib/components/icon/icons';
	import Profile from '$lib/components/Header/profile.svelte';
	import { getUser } from '$lib/api/users';
	import { onMount } from 'svelte';
	import type { User } from '$lib/api/users';

	let user: User | null = $state(null);

	onMount(() => {
		user = getUser();
	});
</script>

<div class="gap-10px flex h-27.75 items-center justify-between pt-2.5 pr-12.5 pb-2.5 pl-12.5">
	<Nav />
	<div class="flex w-156 justify-start">
		<pictures.Sportline
			class="tracking-2 font-family-poppins text-[40px] leading-10 font-black uppercase italic"
		/>
	</div>
	<div class="flex items-center gap-4">
		<Profile />
	</div>
</div>
