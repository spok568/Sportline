<script lang="ts">
	import CardNewCollection from '$lib/components/cardNewCollection.svelte';
	import ProductCard from '$lib/components/card/productCard.svelte';
	import { pictures } from '$lib/components/icon/icons';
	import type { Product, Categories } from '$lib/api/type';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';
	import { resolve } from '$app/paths';

	function goToCatalog() {
		goto(resolve('/catalog'));
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

	function getRecomendProducts() {
		return [...data.recommend];
	}

	function getProductsByCategory(categoryId: string) {
		const allProducts = [...data.closes, ...data.shoes, ...data.sport];
		return allProducts.filter((product) => product.categoryId === categoryId);
	}
	const slideWidth = 312;
	let currentIndex = $state(0);

	let transform = $derived(`translateX(-${currentIndex * slideWidth}px)`);

	function next() {
		if (currentIndex < data.recommend.length - 1) {
			currentIndex += 1;
		}
	}

	function prev() {
		if (currentIndex > 0) {
			currentIndex -= 1;
		}
	}
</script>

<div class="px-14 py-12">
	<div class="mb-12 grid grid-cols-4 gap-6">
		<CardNewCollection {next} {prev} />

		<div class="col-span-3 overflow-hidden">
			<div
				class="flex w-max"
				style="transform: {transform}; transition: transform 0.5s ease-in-out;"
			>
				{#each getRecomendProducts() as recomendImages (recomendImages.id)}
					<div class="w-{slideWidth} shrink-0">
						<ProductCard imageUrl={recomendImages.imageUrl} onClick={goToCatalog} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	{#each data.categories as categori (categori.id)}
		<div class="flex h-17 w-[1,180px] justify-between gap-2.5 p-2.5 py-7.5">
			<div class="h-12 w-223">
				<span class="font-family-poppins text-[40px] leading-10 font-bold uppercase italic">
					{categori.name}
				</span>
			</div>

			<Button
				label="Просмотреть все"
				variant="noBorder"
				class="cursor-pointer font-family-poppins text-[14px] text-[#5D5D5D]"
				onClick={goToCatalog}
			/>
		</div>

		<div class="flex gap-10">
			{#each getProductsByCategory(categori.id) as product (product.id)}
				<div class="flex">
					<ProductCard
						class="w-78 font-family-poppins leading-2 tracking-[2px] text-[#2C2C2C] uppercase"
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
		</div>
	{/each}
</div>
