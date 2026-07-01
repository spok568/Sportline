<script lang="ts">
	import type { PropsForAdminCard } from '$lib/api/type';
	import { pictures } from '../icon/icons';
	import Button from '../button.svelte';
	let {
		name = '',
		size = 'M',
		imageUrl = '',
		category = '',
		className = '',
		price = '',
		span = '',
		text = ''
	}: PropsForAdminCard = $props();
</script>

<div class="flex h-43.5 w-295 justify-center border border-[#D9D9D9]">
	<div class="flex {className} w- w-196.75 items-center">
		<img src={imageUrl} alt="" class="{className}  flex h-33.5 w-33.75" />
		<div class="flex flex-col {className}">
			<div class=" h-33.5 w-156.75 gap-2.5 pl-7.5">
				<div class="flex justify-between">
					<p class="leading-10 font-extrabold tracking-[2px]">{name}</p>
					<p class="text-xl leading-10 font-semibold tracking-[2px]">{price}р.</p>
				</div>
				<div>
					<p class="leading-10 tracking-[2px]">Размеры: {size}</p>
				</div>
				<div>
					<p class="leading-10 tracking-[2px]">Категория: {category}</p>
				</div>
			</div>
		</div>
	</div>
	<div class=" flex items-center justify-center">
		<hr class="h-1 w-31.5 rotate-90 border-[#CBD5E1]" />
	</div>
	{#if text && span}{:else}
		<div class="flex flex-col items-start justify-center gap-2.5">
			<p class="leading-10 font-extrabold tracking-[2px] text-[#2C2C2C]">Действия</p>
			<Button
				variant="noBorder"
				label="Удалить товар"
				iconLast={pictures.Trashan}
				class="flex h-9.25  w-42 items-center justify-center gap-1.75 rounded-3xl bg-black px-3.75 py-2.5 text-white"
			/>

			<Button
				variant="noBorder"
				label="Редактировать  товар"
				iconLast={pictures.Pencil}
				class="flex h-9.25 items-center justify-center gap-1.75 rounded-3xl bg-black px-3.75 py-2.5 text-white"
			/>
		</div>
	{/if}
</div>
