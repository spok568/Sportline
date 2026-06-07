<script lang="ts">
	import CardNewCollection from '$lib/components/CardNewCollection.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	type Product = {
		id: string;
		name: string;
		price: number;
		imageUrl: string;
		color: string;
	};
	let closes: Product[] = $state([]);
	let shoes: Product[] = $state([]);
	let sport: Product[] = $state([]);

	export async function sportLoad() {
		let response = await fetch(
			'http://localhost:3000/api/products?categorySlug=sport-tovary&limit=4',
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		);
		let data = await response.json();

		if (response.ok) {
			sport = data.items;
		}
	}

	export async function shoesLoad() {
		let response = await fetch('http://localhost:3000/api/products?categorySlug=obuv&limit=4', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		let data = await response.json();

		if (response.ok) {
			shoes = data.items;
		}
	}

	export async function closesLoad() {
		let response = await fetch('http://localhost:3000/api/products?categorySlug=odezhda&limit=2', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		let data = await response.json();
		if (response.ok) {
			closes = data.items;
		}
	}
	sportLoad();
	closesLoad();
	shoesLoad();
</script>

<div class="px-14 py-12">
	<div class="mb-12 flex gap-6">
		<CardNewCollection />
		{#each closes as clos}
			<ProductCard name={clos.name} price={clos.price} imageUrl={clos.imageUrl} />
		{/each}
	</div>

	<h2 class="mb-4 text-2xl">Обувь</h2>
	<div class="mb-12 flex gap-6">
		{#each shoes as shoe}
			<ProductCard name={shoe.name} price={shoe.price} imageUrl={shoe.imageUrl} />
		{/each}
	</div>

	<h2 class="mb-4 text-2xl">Спорт товары</h2>
	<div class="flex gap-6">
		{#each sport as item}
			<ProductCard name={item.name} price={item.price} imageUrl={item.imageUrl} />
		{/each}
	</div>
</div>
