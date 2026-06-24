<script lang="ts">
	import type { PropsForCard } from '$lib/api/type';

	let {
		name,
		price,
		imageUrl,
		cost,
		span,
		class: className,
		quantity,
		onClick,
		onDelete,
		label,
		iconLast
	}: PropsForCard = $props();
</script>

<div class="relative mb-16 h-[412px] w-[304px] rounded-lg p-6">
	<div class="relative h-[412px] w-[304px]">
		<img src={imageUrl} alt={name} class="h-[313px] w-[304px] border border-[#D7D7D7]" />

		{#if onDelete}
			<button
				onclick={onDelete}
				class="absolute top-2 right-2 flex h-6 w-7 cursor-pointer items-center justify-center"
			>
				×
			</button>
		{/if}

		<div class="flex h-[40px] w-[304px] items-center justify-between py-2 {className}">
			<h3 class="mt-2 text-center font-bold">{name}</h3>
			<p class="text-center text-lg">{price} {cost}</p>
		</div>

		{#if span}
			<div class="text left-1 flex h-4 gap-1 rounded bg-white px-2 text-sm">
				<p>размер:</p>
				{span}
			</div>
		{/if}

		<div class="mt-auto pt-2">
			{#if label && onClick}
				<button
					onclick={onClick}
					class="h-[39px] w-[304px] cursor-pointer bg-gray-200 py-2 text-center hover:bg-gray-300"
				>
					<div class="flex items-center justify-center gap-2">
						{label}
						<div class="flex h-4 w-4 items-center justify-center">
							<img src={iconLast} alt="" />
						</div>
					</div>
				</button>
			{:else if quantity != null}
				<div class="flex justify-end">
					<div class="flex w-8 flex-col border border-gray-300">
						<button
							onclick={onClick}
							class="border-b border-gray-300 py-1.5 text-sm hover:cursor-pointer hover:bg-gray-100"
							>+</button
						>
						<span class="py-1.5 text-center text-sm font-medium">{quantity}</span>
						<button
							onclick={onDelete}
							class="border-t border-gray-300 py-1.5 text-sm hover:cursor-pointer hover:bg-gray-100"
							>-</button
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
