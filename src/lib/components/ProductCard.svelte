<script lang="ts">
	import type { PropsForButton } from "$lib/api/type";

	let { 
		name, 
		price, 
		imageUrl,
		cost,
		span,
		quantity,
		onClick,
		onDelete,
		label,
		iconLast
	}: PropsForButton = $props();
</script>
<div class="relative w-[304px] rounded-lg p-6 h-[412px] mb-16">
	<div class="h-[412px] w-[304px] relative">
		
		<img src={imageUrl} alt={name} class="w-[304px] h-[313px] border border-[#D7D7D7]" />

		{#if onDelete}
			<button 
				onclick={onDelete}
				class="absolute top-2 right-2 w-7 h-6 cursor-pointer flex items-center justify-center "
			>
				×
			</button>
		{/if}
		
  <div class="flex items-center justify-between py-2 w-[304px] h-[40px]">
			<h3 class="mt-2 font-bold text-center">{name}</h3>
			<p class="text-lg text-center">{price} {cost}</p>
		</div>

		{#if span}
			<div class="flex gap-1 h-4 text left-1 bg-white px-2 text-sm rounded">
				<p>размер:</p>{span}
			</div>
		{/if}

		<div class="mt-auto pt-2 ">
			{#if label && onClick}
				<button 
					onclick={onClick} 
					class="w-[304px] h-[39px] bg-gray-200 text-center hover:bg-gray-300 cursor-pointer py-2"
				>
					<div class="flex justify-center items-center gap-2">
						{label}
						<div class="h-4 w-4 flex justify-center items-center">
							<img src={iconLast} alt="" />
						</div>
					</div>
				</button>
			{:else if quantity != null}
				<div class="flex justify-end ">
	<div class="flex flex-col border border-gray-300 w-8">
		<button onclick={onClick} class="py-1.5 border-b border-gray-300 text-sm hover:cursor-pointer hover:bg-gray-100">+</button>
		<span class="py-1.5 text-center text-sm font-medium">{quantity}</span>
		<button onclick={onClick} class="py-1.5 border-t border-gray-300 text-sm hover:cursor-pointer hover:bg-gray-100">-</button>
	</div>
</div>
			{/if}
		</div>

	</div>
</div>