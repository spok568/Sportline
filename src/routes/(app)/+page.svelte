<script lang="ts">
	import CardNewCollection from '$lib/components/CardNewCollection.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import type { Product } from '$lib/api/type';

	let { data }: {
		data: {
			recommend: Product[];
			closes: Product[];
			shoes: Product[];
			sport: Product[];
		}
	} = $props();
</script>

<div class="px-14 py-12">
	<div class="mb-12 grid grid-cols-4 gap-6">
		<CardNewCollection />
		{#each data.recommend as recommendes (recommendes.id)}
			<ProductCard name={recommendes.name} price={recommendes.price} imageUrl={recommendes.imageUrl} />
		{/each}
	</div>

	<h2 class="mb-4 text-2xl">Одежда</h2>
	<div class="mb-12 grid grid-cols-4 gap-6">
		{#each data.closes as clos (clos.id)}
			<ProductCard name={clos.name} price={clos.price} imageUrl={clos.imageUrl} />
		{/each}
	</div>

	<h2 class="mb-4 text-2xl">Обувь</h2>
	<div class="mb-12 grid grid-cols-4 gap-6">
		{#each data.shoes as shoeses (shoeses.id)}
			<ProductCard name={shoeses.name} price={shoeses.price} imageUrl={shoeses.imageUrl} />
		{/each}
	</div>

	<h2 class="mb-4 text-2xl">Спорт товары</h2>
	<div class="grid grid-cols-4 gap-6">
		{#each data.sport as sports (sports.id)}
			<ProductCard name={sports.name} price={sports.price} imageUrl={sports.imageUrl} />
		{/each}
	</div>
</div>