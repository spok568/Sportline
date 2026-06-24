<script lang="ts">
	import CardNewCollection from '$lib/components/CardNewCollection.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
import {pictures} from '$lib/components/allPictures'
	import type { Product,Categories } from '$lib/api/type';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	
	
function goToCatalog(){
	goto('/catalog')
}
	let { data }: {
		data: {
			recommend: Product[];
			closes: Product[];
			shoes: Product[];
			sport: Product[];
			categories: Categories[]; 
		}
	} = $props();
   function getProductsByCategory(categoryId:string) {
	const recomendProduct = [
			...data.recommend,
	]
        const allProducts = [

			...data.closes,
			...data.shoes,
            ...data.sport
		]
        return allProducts.filter(product => product.categoryId === categoryId)
	}
</script>

<div class="px-14 py-12">
	<div class="mb-12 grid grid-cols-4 gap-6 ">
		<CardNewCollection />
		{#each data.recommend as recommendes (recommendes.id)}
			<ProductCard imageUrl={recommendes.imageUrl} onClick={goToCatalog} />
		{/each}
	</div>
	{#each data.categories as categori (categori.id) }
	<div class="flex justify-between w-[1,180px] h-[68px] p-[10px] gap-[10px]">
	<div class="w-[892px] h-[48px]">
	<span class="w-[301px] h-[48px] font-bold leading-[40px] uppercase text-[40px] font-family-poppins italic">	{categori.name}</span>
		</div>
		<Button 
		label='Просмотреть все'
		variant='noBorder'
		class='cursor-pointer font-family-poppins text-[#5D5D5D] text-[14px]'
		onClick={goto('/catalog')}
		
		/>
		</div>
		
			{const categoryProduct = getProductsByCategory(categori.id)}
		{#each categoryProduct as product, index(index)}
		<div class="flex ">
				<ProductCard  class='font-family-poppins text-[#2C2C2C] leading-2 uppercase tracking-[2px]' name={product.name} price={product.price} imageUrl={product.imageUrl} onClick={goToCatalog} label='перейти в каталог' cost='₽' iconLast={pictures.shoppingCart} />
				</div>
		{/each}
	{/each}
	
</div>