<script lang="ts">
	import Input from '../Input.svelte';
	import { pictures } from '../allPictures';
</script>

<div
	class="flex h-[70px] w-[1,224px] items-center justify-around gap-10 border-b border-[#D9D9D9] pt-[10px] pb-[10px] pl-[50px]"
>
	<div class="h-[40px] w-[797px]">
		<span class="text-[40px] leading-[40px] font-black">Каталог</span>
	</div>
	<div class="flex">
		<Input
			iconFirst={pictures.search}
			placeholder="Search"
			className="w-[367px] h-[50px] bg-[#D9D9D9] border-[1px]"
		/>
	</div>
</div>
