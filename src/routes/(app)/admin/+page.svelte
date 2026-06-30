<script lang="ts">
	let { data } = $props();
	import ProductCard from '$lib/components/card/productCard.svelte';
	console.log(data.items);
	function getCategoryId(categoryId: string) {
		const allProduct = [...data.items];
		return allProduct.filter((product) => product.categoryId === categoryId);
	}
</script>

<div>
	<div class="w-11/12 border-b border-[#D9D9D9] px-12.5 py-2.5">
		<span class="text-3xl leading-10 font-black tracking-[2px] uppercase italic"
			>Панель администраора</span
		>
	</div>
	<div>
		{#each data?.items as categorys}
			<div class="flex items-center justify-center gap-10">
				{categorys.category.id}
			</div>
		{/each}
	</div>
</div>
