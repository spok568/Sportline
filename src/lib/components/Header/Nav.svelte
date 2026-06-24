<script>
	import { goto } from '$app/navigation';
</script>

<div class="font-popins flex w-116.5 gap-5 p-2.5 tracking-[2px]">
	<button onclick={() => goto('/')} class="w-[84px] text-[16px] hover:cursor-pointer"
		>Главная</button
	>
	<button onclick={() => goto('/catalog')} class="w-[84px] text-[16px] hover:cursor-pointer"
		>Каталог</button
	>
	<button onclick={() => goto('/basket')} class="w-[84px] text-[16px] hover:cursor-pointer"
		>Корзина</button
	>
</div>
