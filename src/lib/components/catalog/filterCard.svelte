<script lang="ts">
	import Button from '../Button.svelte';
	import Input from '../Input.svelte';
	import ProductCard from '../ProductCard.svelte';
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

<div class="flex gap-8 px-14 py-12">
	<div class="w-80">
		<p class="text-center text-2xl font-bold">Фильтр</p>

		<p class="mt-4 font-bold">Размеры</p>
		<div class="flex flex-wrap gap-1.5 border-b border-gray-400 py-2">
			<Button size="sm" variant="outline">XS</Button>
			<Button size="sm" variant="outline">S</Button>
			<Button size="sm" variant="outline">M</Button>
			<Button size="sm" variant="outline">L</Button>
			<Button size="sm" variant="outline">XL</Button>
			<Button size="sm" variant="outline">XXL</Button>
		</div>

		<div class="py-2">
			<p class="font-bold">Категория</p>
			<div class="p-2">
				<Input label="Одежда" type="checkbox" />
				<Input label="Обувь" type="checkbox" />
				<Input label="Спорт товары" type="checkbox" />
			</div>
		</div>
	</div>

	<div class="flex-1">
		<h2 class="mb-4 text-2xl font-bold text-center">Одежда</h2>
		<div class="mb-12 flex flex-wrap gap-6">
			{#each closes as clos (clos.id)}
				<ProductCard name={clos.name} price={clos.price} imageUrl={clos.imageUrl} />
			{/each}
		</div>
		<div>
			<p class="mb-4 text-2xl font-bold text-center">Ботинки</p>
			{#each shoes as shoe (shoe.id)}
				<ProductCard name={shoe.name} price={shoe.price} imageUrl={shoe.imageUrl} />
			{/each}
		</div>

        	<div>
			<p class="mb-4 text-2xl font-bold text-center">Спорт товары</p>
			{#each sport as sports (sports.id)}
				<ProductCard name={sports.name} price={sports.price} imageUrl={sports.imageUrl} />
			{/each}
		</div>
	</div>
</div>
