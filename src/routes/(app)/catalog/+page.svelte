<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import type { Product } from '$lib/api/type';
	import ButtonSelected from '$lib/components/catalog/buttonSelected.svelte';
	let isOpenModalWindow: boolean = $state(false);
	let selectedProduct: string = $state('');
	let selectedProductImage: string = $state('');
	let selectedProductPrice: string | number = $state('');
	let selectedProductId: string = $state('');
	let selectedSize = $state('');
	function closeModal() {
		isOpenModalWindow = false;
	}

async function getToBasket() {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:3000/api/cart/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            productId: selectedProductId, 
            size: selectedSize,
            quantity: 1
        })
    });
    closeModal();
    goto('/basket');
}

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
	<Button size="sm" variant="outline" onClick={() => selectedSize = 'XS'}>XS</Button>
	<Button size="sm" variant="outline" onClick={() => selectedSize = 'S'}>S</Button>
	<Button size="sm" variant="outline" onClick={() => selectedSize = 'M'}>M</Button>
	<Button size="sm" variant="outline" onClick={() => selectedSize = 'L'}>L</Button>
	<Button size="sm" variant="outline" onClick={() => selectedSize = 'XL'}>XL</Button>
	<Button size="sm" variant="outline" onClick={() => selectedSize = 'XXL'}>XXL</Button>
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
		<h2 class="mb-4 text-center text-2xl font-bold">Одежда</h2>
		<div class="mb-12 flex flex-wrap gap-6">
			{#each closes as clos (clos.id)}
				<ProductCard
					name={clos.name}
					price={clos.price}
					imageUrl={clos.imageUrl}
					label="Добавить в корзину"
					onClick={() => {
						 selectedProductId = clos.id;
						selectedProduct = clos.name;
						selectedProductImage = clos.imageUrl;
						selectedProductPrice = clos.price;
						isOpenModalWindow = true;
					}}
				/>
			{/each}
		</div>

		<div>
			<p class="mb-4 text-center text-2xl font-bold">Ботинки</p>
			<div class="flex flex-wrap gap-6">
				{#each shoes as shoe (shoe.id)}
					<ProductCard
						name={shoe.name}
						price={shoe.price}
						imageUrl={shoe.imageUrl}
						label="Добавить в корзину"
						onClick={() => {
							 selectedProductId = shoe.id;
							selectedProduct = shoe.name;
							selectedProductImage = shoe.imageUrl;
							selectedProductPrice = shoe.price;
							isOpenModalWindow = true;
						}}
					/>
				{/each}
			</div>
		</div>

		<div>
			<p class="mb-4 text-center text-2xl font-bold">Спорт товары</p>
			<div class="flex flex-wrap gap-6">
				{#each sport as sports (sports.id)}
					<ProductCard
						name={sports.name}
						price={sports.price}
						imageUrl={sports.imageUrl}
						label="Добавить в корзину"
						onClick={() => {
							 selectedProductId = sports.id;
							selectedProduct = sports.name;
							selectedProductImage = sports.imageUrl;
							selectedProductPrice = sports.price;
							isOpenModalWindow = true;
						}}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
{#if isOpenModalWindow}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="flex w-225 gap-10 rounded-2xl bg-white p-10">
			<img
				src={selectedProductImage}
				alt={selectedProduct}
				class="h-106 w-md rounded-xl object-cover"
			/>
			<div class="flex flex-1 flex-col gap-6 rounded-2xl border px-4 py-2">
				<h2 class="text-4xl font-bold">{selectedProduct}</h2>
				<p class="text-3xl">{selectedProductPrice} ₽</p>

			<div>
    <p class="mb-3 text-lg text-gray-500">Размеры</p>
    <div class="flex flex-wrap gap-3">
       <ButtonSelected  bind:selectedSize={selectedSize}/>
    </div>
	  {#if selectedSize}
        <p class="mt-2 text-sm text-green-600">Выбран размер: {selectedSize}</p>
    {/if}
</div>

			<Button
    iconLast="src/lib/assets/shopping-cart.png"
    label="Добавить в корзину"
    variant="outline"
    onClick={() => {
        if (selectedSize) {
            getToBasket();
        } else {
            alert('Выберите размер');
        }
    }}
    class="mt-4 flex gap-2 py-4 text-xl"
/>
			</div>
		</div>
	</div>
{/if}