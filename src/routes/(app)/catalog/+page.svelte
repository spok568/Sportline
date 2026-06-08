<script lang="ts">
	import { goto } from '$app/navigation';
import Button from '$lib/components/Button.svelte';
import Input from '$lib/components/Input.svelte';
import ProductCard from '$lib/components/ProductCard.svelte';
import type { Product } from '$lib/api/type';
	let isOpenModalWindow:boolean = $state(false);
	let selectedProduct:string = $state('');
    let selectedProductImage:string = $state('')
    let selectedProductPrice:string | number = $state('')
        function closeModal() {
		isOpenModalWindow = false;
	}

     
	export function getToBasket(){
		 closeModal();
        
		const basketItems = JSON.parse(localStorage.getItem('basket') ||'[]') 
	 basketItems.push({
        name: selectedProduct,
        imageUrl: selectedProductImage,
        price: selectedProductPrice
    });
    localStorage.setItem('basket', JSON.stringify(basketItems));
    goto('/basket')
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
				<ProductCard 
					name={clos.name} 
					price={clos.price} 
					imageUrl={clos.imageUrl}
					label="Добавить в корзину"
					onClick={() => {
						selectedProduct = clos.name;
                        selectedProductImage = clos.imageUrl
                        selectedProductPrice = clos.price
						isOpenModalWindow = true;
					}}
				/>
			{/each}
		</div>
		
		<div>
			<p class="mb-4 text-2xl font-bold text-center">Ботинки</p>
			<div class="flex flex-wrap gap-6">
				{#each shoes as shoe (shoe.id)}
					<ProductCard 
						name={shoe.name} 
						price={shoe.price} 
						imageUrl={shoe.imageUrl}
						label="Добавить в корзину"
						onClick={() => {
							selectedProduct = shoe.name;
                            selectedProductImage = shoe.imageUrl
                            selectedProductPrice = shoe.price
							isOpenModalWindow = true;
						}}
					/>
				{/each}
			</div>
		</div>

		<div>
			<p class="mb-4 text-2xl font-bold text-center">Спорт товары</p>
			<div class="flex flex-wrap gap-6">
				{#each sport as sports (sports.id)}
					<ProductCard 
						name={sports.name} 
						price={sports.price} 
						imageUrl={sports.imageUrl}
						label="Добавить в корзину"
						onClick={() => {
							selectedProduct = sports.name;
                            selectedProductImage = sports.imageUrl
                             selectedProductPrice = sports.price
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
		<div class="flex w-[900px] gap-10 rounded-2xl bg-white p-10 ">
			<img 
				src={selectedProductImage} 
				alt={selectedProduct}
				class="h-[425px] w-[450px] rounded-xl object-cover"
			/>
			<div class="flex flex-1 flex-col gap-6 border rounded-2xl py-2 px-4">
				<h2 class="text-4xl font-bold">{selectedProduct}</h2>
				<p class="text-3xl ">{selectedProductPrice} ₽</p>
				
				<div>
					<p class="mb-3 text-lg text-gray-500">Размеры</p>
					<div class="flex flex-wrap gap-3">
						<Button size="md" variant="outline">XS</Button>
						<Button size="md" variant="outline">S</Button>
						<Button size="md" variant="outline">M</Button>
						<Button size="md" variant="outline">L</Button>
						<Button size="md" variant="outline">XL</Button>
						<Button size="md" variant="outline">XXL</Button>
					</div>
				</div>
			
				<Button iconLast='src/lib/assets/shopping-cart.png' label="Добавить в корзину" variant='outline'  onClick={getToBasket} class="flex mt-4 py-4 text-xl gap-2 " />
			
			</div>
		</div>
	</div>
{/if}