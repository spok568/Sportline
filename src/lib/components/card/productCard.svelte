<script lang="ts">
	import type { PropsForCard } from '$lib/api/type';
	import Button from '../button.svelte';
	import { pictures } from '../icon/icons';

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

<div class=" relative mb-16 flex h-90.75 w-78 p-6">
	{#if onDelete}
		<Button
			onClick={onDelete}
			class="absolute top-7 right-1 flex  cursor-pointer"
			iconFirst={pictures.Cross}
			variant="noBorder"
		/>
	{/if}
	{#if quantity != null}
		<div class="absolute top-50 right-2 flex w-1.75 font-family-beatrice text-[14px] font-medium">
			{span}
		</div>
		<div class="absolute top-59.25 left-74 flex w-5.25 flex-col border border-gray-300">
			<Button
				iconFirst={pictures.Plus}
				{onClick}
				variant="noBorder"
				class="border-b border-gray-300 p-1.5 text-sm hover:cursor-pointer hover:bg-gray-100"
			/>
			<span class="py-1.5 text-center text-sm font-medium">{quantity}</span>
			<Button
				iconLast={pictures.Minus}
				{onClick}
				variant="noBorder"
				class="border-t border-gray-300 p-1.5 text-sm hover:cursor-pointer hover:bg-gray-100"
			/>
		</div>
	{/if}
	<div class="relative {className}">
		<img src={imageUrl} alt={name} class="h-78.25 w-full border border-[#D7D7D7] object-cover" />

		<div class="flex items-center justify-between space-x-2 py-2 text-center">
			<h3
				class="  font-family-poppins text-base leading-10 font-extrabold tracking-widest text-[#2C2C2C]"
			>
				{name}
			</h3>
			<p
				class="absolute right-0 text-center font-family-poppins text-[16px] font-normal tracking-[2px] uppercase"
			>
				{price}
				{cost}
			</p>
		</div>

		<div class="mt-auto pt-2">
			{#if label && onClick}
				<button
					onclick={onClick}
					class="h-9.75 w-76 cursor-pointer bg-gray-200 py-2 text-center hover:bg-gray-300"
				>
					<div class="flex items-center justify-center gap-2">
						{label}
						{#if iconLast}
							<div class="flex h-4 w-4 items-center justify-center">
								<svelte:component this={iconLast} class="h-4 w-4" />
							</div>
						{/if}
					</div>
				</button>
			{/if}
		</div>
	</div>
</div>
