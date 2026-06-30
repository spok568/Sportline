<script lang="ts">
	import type { PropsForAdminCard } from '$lib/api/type';
	let {
		name = '',
		size = '',
		imageUrl = '',
		category = '',
		price = '',
		span = '',
		text = '',
		icon
	}: PropsForAdminCard = $props();
</script>
