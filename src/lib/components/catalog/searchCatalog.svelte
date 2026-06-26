<script lang="ts">
	import Input from '../input.svelte';
	import { pictures } from '$lib/components/icon/icons';
</script>

<div
	class="flex h-17.5 w-[1,224px] items-center justify-around gap-10 border-b border-[#D9D9D9] pt-2.5 pb-2.5 pl-12.5"
>
	<div class="h-10 w-199.25">
		<span class="text-[40px] leading-10 font-black">Каталог</span>
	</div>
	<div class="flex">
		<Input
			iconFirst={pictures.Search}
			placeholder="Search"
			className="w-91.75 h-12.5 bg-[#D9D9D9] border pl-10 foces:ring-white focus:outline-none"
		/>
	</div>
</div>
