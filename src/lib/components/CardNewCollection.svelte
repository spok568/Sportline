<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './button.svelte';
	import { pictures } from '$lib/components/icon/icons';
</script>

<div class="flex h-[386px] w-[378px] flex-col gap-[10px] pt-[15px] pb-[15px]">
	<div class="flex h-[316px] w-[378px] flex-col gap-[10px] tracking-[2px]">
		<div class="h-[82px] w-[301px]">
			<span class=" font-popins text-[40px] leading-[40px] font-black uppercase italic">
				Новая коллекция
			</span>
		</div>
		<div class="h-[45px] w-[301px]">
			<span class="  font-popins text-[20px] leading-[40px] font-normal uppercase">
				Оcень 2025
			</span>
		</div>
	</div>

	<div class="flex h-[40px] w-[378px] items-center gap-4">
		<Button
			variant="outline"
			label="Перейти в каталог"
			iconLast={pictures.ArrowRight}
			onClick={goto('/catalog')}
			class="flex h-[40px] w-[278px] items-center justify-center gap-2 bg-[#D9D9D9] font-family-inter hover:cursor-pointer hover:bg-gray-300"
		/>
		<Button
			iconFirst={pictures.Arrow}
			class="h-10 w-10 rotate-180  hover:cursor-pointer hover:bg-gray-100"
			variant="outline"
		/>
		<Button
			iconFirst={pictures.Arrow}
			class="h-10 w-10  hover:cursor-pointer hover:bg-gray-100"
			variant="outline"
		/>
	</div>
</div>
