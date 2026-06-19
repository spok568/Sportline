<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';
	import { pictures } from '$lib/components/allPictures';
</script>

<div class="flex w-[378px] h-[386px] flex-col gap-[10px] pt-[15px] pb-[15px]">
	<div class="flex flex-col gap-[10px] w-[378px] h-[316px]">
		<div class="w-[301px] h-[82px]">
			<span class=" font-bold italic text-[40px] leading-[40px] ">
				Новая коллекция 
			</span>
		</div>
		<div class="w-[301px] h-[45px]">
			<span class="  text-[20px] leading-[40px] ">
				Очень 2025
			</span>
		</div>
	</div>
	
	<div class="flex items-center w-[378px] h-[40px] gap-4">
		<Button
			variant="outline"
			label="Перейти в каталог"
			iconLast={pictures.arrowRight}
			onClick={goto('/catalog')}
			class="bg-[#D9D9D9] w-[278px] h-[40px] flex justify-center gap-2 items-center hover:bg-gray-300 hover:cursor-pointer"
		/>
		<Button
			iconFirst={pictures.arrow}
			class="w-10 h-10 rotate-180  hover:bg-gray-100 hover:cursor-pointer"
			variant="outline"
		/>
		<Button
			iconFirst={pictures.arrow}
			class="w-10 h-10  hover:bg-gray-100 hover:cursor-pointer"
			variant="outline"
		/>
	</div>
</div>