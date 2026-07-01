<script lang="ts">
	import AdminCard from '$lib/components/admin/adminCard.svelte';
	import Button from '$lib/components/button.svelte';
	import { pictures } from '$lib/components/icon/icons.js';
	import AddProduct from '$lib/components/admin/addProduct.svelte';
	let isOpenModalAddProduct = $state(false);
	let { data } = $props();

	function getCategoryId(categoryId: string) {
		const allProduct = data.products.items;

		return allProduct.filter((product) => product.categoryId === categoryId);
	}
	let currentCategory = $state(0);
</script>

<div>
	<div class="w-11/12 border-b border-[#D9D9D9] px-90 py-2.5">
		<span class="text-3xl leading-10 font-black tracking-[2px] uppercase italic"
			>Панель администратора</span
		>
	</div>
	<div class="flex flex-col">
		{#each data.categorys as category, index (index + 1)}
			{#if currentCategory >= index}
				{#if currentCategory >= 1}
					<Button
						variant="noBorder"
						label="Скрыть"
						iconLast={pictures.ArrowDown}
						class="flex items-center justify-center gap-2 text-[#5D5D5D]"
						onClick={() => currentCategory--}
					/>
				{/if}
				<div class="mt-4 flex flex-col items-center justify-center">
					<div class="flex h-14.25 w-295 items-center justify-between py-2.5">
						<span class="text-[20px] leading-10 font-black tracking-[2px] uppercase"
							>{category.name}</span
						>
						<Button
							variant="noBorder"
							class="flex  h-9.25 w-42.5 items-center justify-center gap-1.75 rounded-3xl bg-black px-2.5 py-3.75 font-family-inter text-white "
							label="Добавить товар"
							onClick={() => (isOpenModalAddProduct = true)}
							iconLast={pictures.AdminArrow}
						/>
					</div>
					<div class="flex flex-col">
						{#each getCategoryId(category.id) as product (product.id)}
							<div class="flex flex-col py-2">
								<AdminCard
									name={product.name}
									size={product.sizes}
									category={category.name}
									price={product.price}
									imageUrl={product.imageUrl}
								/>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/each}
		<div class="flex justify-center gap-2.5 p-2">
			<Button
				variant="noBorder"
				label="еще"
				iconLast={pictures.ArrowDown}
				class="flex items-center justify-center gap-2 text-[#5D5D5D]"
				onClick={() => currentCategory++}
			/>
			<Button
				variant="noBorder"
				label="Скрыть все"
				iconLast={pictures.ArrowDown}
				class="flex items-center justify-center gap-2 text-[#5D5D5D]"
				onClick={() => (currentCategory = 0)}
			/>
		</div>
	</div>
</div>
<AddProduct bind:isOpenModalAddProduct />
