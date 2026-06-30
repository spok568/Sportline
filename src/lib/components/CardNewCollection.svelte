<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './button.svelte';
	import { pictures } from '$lib/components/icon/icons';
	import { resolve } from '$app/paths';
	let { next, prev } = $props();
</script>

<div class="flex h-96.5 w-94.5 flex-col gap-2.5 pt-3.75 pb-3.75">
	<div class="flex h-79 w-94.5 flex-col gap-2.5 tracking-[2px]">
		<div class="h-20.5 w-75.25">
			<span class=" font-popins text-[40px] leading-10 font-black uppercase italic">
				Новая коллекция
			</span>
		</div>
		<div class="h-11.25 w-75.25">
			<span class="  font-popins text-[20px] leading-10 font-normal uppercase"> Оcень 2025 </span>
		</div>
	</div>

	<div class="flex h-10 w-94.5 items-center gap-4">
		<Button
			variant="outline"
			label="Перейти в каталог"
			iconLast={pictures.ArrowRight}
			onClick={() => goto(resolve('/catalog'))}
			class="flex h-10 w-69.5 items-center justify-center gap-2 bg-[#D9D9D9] font-family-inter hover:cursor-pointer hover:bg-gray-300"
		/>
		<Button
			iconFirst={pictures.Arrow}
			class="h-10 w-10 rotate-180  hover:cursor-pointer hover:bg-gray-100"
			variant="outline"
			onClick={prev}
		/>
		<Button
			iconFirst={pictures.Arrow}
			class="h-10 w-10  hover:cursor-pointer hover:bg-gray-100"
			variant="outline"
			onClick={next}
		/>
	</div>
</div>
