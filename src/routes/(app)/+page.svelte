<script lang="ts">
	import CardNewCollection from '$lib/components/cardNewCollection.svelte';
	import ProductCard from '$lib/components/card/productCard.svelte';
	import { pictures } from '$lib/components/icon/icons';
	import type { Product, Categories } from '$lib/api/type';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';

	function goToCatalog() {
		goto('/catalog');
	}
	let {
		data
	}: {
		data: {
			recommend: Product[];
			closes: Product[];
			shoes: Product[];
			sport: Product[];
			categories: Categories[];
		};
	} = $props();
	function getProductsByCategory(categoryId: string) {
		const recomendProduct = [...data.recommend];
		const allProducts = [...data.closes, ...data.shoes, ...data.sport];
		return allProducts.filter((product) => product.categoryId === categoryId);
	}
</script>

<div class="px-14 py-12">
	<div class="mb-12 grid grid-cols-4 gap-6">
		<CardNewCollection />
		{#each data.recommend as recommendes (recommendes.id)}
			<ProductCard imageUrl={recommendes.imageUrl} onClick={goToCatalog} />
		{/each}
	</div>
	{#each data.categories as categori (categori.id)}
		<div class="flex h-[68px] w-[1,180px] justify-between gap-[10px] p-[10px] py-7.5">
			<div class="h-[48px] w-[892px]">
				<span
					class="h-[48px] w-[301px] font-family-poppins text-[40px] leading-[40px] font-bold uppercase italic"
				>
					{categori.name}</span
				>
			</div>
			<Button
				label="Просмотреть все"
				variant="noBorder"
				class="cursor-pointer font-family-poppins text-[14px] text-[#5D5D5D]"
				onClick={goto('/catalog')}
			/>
		</div>

		{#each getProductsByCategory(categori.id) as product, index (index)}
			<div class="flex">
				<ProductCard
					class="w-[312px] font-family-poppins leading-2 tracking-[2px] text-[#2C2C2C] uppercase"
					name={product.name}
					price={product.price}
					imageUrl={product.imageUrl}
					onClick={goToCatalog}
					label="перейти в каталог"
					cost="₽"
					iconLast={pictures.ShoppingCart}
				/>
			</div>
		{/each}
	{/each}
</div>
