<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import type { Product } from '$lib/api/type';
	import ButtonSelected from '$lib/components/catalog/buttonSelected.svelte';
	import { CLIENT } from '$lib/api/CLIENT';
	let isOpenModalWindow: boolean = $state(false);
	let selectedProduct: Product | null = $state(null);
	let selectedProductImage: string = $state('');
	let selectedProductPrice: string | number = $state('');
	let quantity: number = $state(1)
	let selectedProductId: string = $state('');
import {pictures} from '$lib/components/allPictures'
	import  type {Sizes} from "$lib/api/type"
	let selectedSize:Sizes = $state('M');
	let {data}:{
		data:{

			closes: Product[];
			shoes: Product[];
			sport: Product[];
		}
	} = $props()
	function closeModal() {
		isOpenModalWindow = false;
	}

export async function getToBasket() {
	
    const token = localStorage.getItem('token');
	if(!selectedSize){
		alert('такого размера нету')
		return
	}
	if (!selectedProduct?.sizes?.includes(selectedSize)) {
		alert('Этот размер недоступен');
		return;
	}
	await CLIENT.POST('/api/cart/items',{
		headers:{
'Authorization': `Bearer ${token}`
		},
		body:{
			productId:selectedProductId,
			
			size:selectedSize,
			quantity:quantity
		}
	})

    
    closeModal();
    goto('/basket');
}

	import SearchCatalog from '$lib/components/catalog/searchCatalog.svelte';
</script>
<SearchCatalog/>
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
			{#each data.closes as clos (clos.id)}
				<ProductCard
					name={clos.name}
					price={clos.price}
					imageUrl={clos.imageUrl}
					iconLast={pictures.shoppingCart}
					label='добавить в корзину'
			cost='₽.'
					onClick={() => {
						 selectedProductId = clos.id;
						selectedProduct = clos;
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
				{#each data.shoes as shoe (shoe.id)}
					<ProductCard
						name={shoe.name}
						price={shoe.price}
						imageUrl={shoe.imageUrl}
						iconLast={pictures.shoppingCart}
						label='добавить в корзину'
						cost='₽.'
						onClick={() => {
							 selectedProductId = shoe.id;
							selectedProduct = shoe;
							
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
				{#each data.sport as sports (sports.id)}
					<ProductCard
						name={sports.name}
						cost='₽.'
						price={sports.price}
						iconLast={pictures.shoppingCart}
						imageUrl={sports.imageUrl}
						label='добавить в корзину'
						onClick={() => {
							 selectedProductId = sports.id;
							selectedProduct = sports;
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
	
		<div class="relative flex w-[880px] justify-center items-center h-[511px] gap-[10px] bg-white">
	
		
			<img
				src={selectedProductImage}
				alt='Выбранный продукт'
				class="h-[431px] w-[320px]"
			/>
			<div class="flex flex-col w-[350px] border border-[#D9D9D9] px-4 py-4">
				<div class="pb-[10px] pt-[20px] pr-[20px] pl-[20px]">
					<h2 class="text-[16px] font-bold">{selectedProduct?.name}</h2>
				<p class="text-3xl">{selectedProductPrice} ₽</p>
				</div>
				<div class="  pr-[5px] pl-[10px]">
    <p class="mb-3 text-lg text-gray-500">Размеры</p>
					<div class="flex flex-nowrap gap-0.5">
						<ButtonSelected bind:selectedSize={selectedSize}/>
    </div>
	  {#if selectedSize}
        <p class="mt-2 text-sm text-green-600">Выбран размер: {selectedSize}</p>
    {/if}
					<div class="pt-6">
			<Button
			iconLast={pictures.shoppingCart} 
    label="Добавить в корзину"
    variant="outline"
    onClick={() => {
        if (selectedSize) {
            getToBasket();
        } else {
            alert('Выберите размер');
        }
    }}
							class="flex gap-2 py-4 text-xl w-full justify-center"
/>
			</div>
				</div>
			</div>
			<Button 
		variant='outline'
		size='sm'
	label='Х'
				class="absolute top-[40px] right-[50px] flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl hover:bg-gray-100"
	onClick={closeModal}
		/>
		</div>
		
	</div>
{/if}