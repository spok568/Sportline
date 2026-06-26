<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<div class="font-popins flex w-116.5 gap-5 p-2.5 tracking-[2px]">
	<button onclick={() => goto(resolve('/'))} class="w-21 text-[16px] hover:cursor-pointer"
		>Главная</button
	>
	<button onclick={() => goto(resolve('/catalog'))} class="w-21 text-[16px] hover:cursor-pointer"
		>Каталог</button
	>
	<button onclick={() => goto(resolve('/basket'))} class="w-21 text-[16px] hover:cursor-pointer"
		>Корзина</button
	>
</div>
