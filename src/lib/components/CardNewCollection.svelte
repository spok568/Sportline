<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';
</script>

<div class="flex w-72 flex-col items-center justify-center rounded-2xl border">
	<div class="py-16">
		<p class="text-3xl">Новая коллекция</p>
		<p class="text-2xl">Осень 2025</p>
	</div>
	<div class="flex items-center gap-4 px-2 py-4">
		<Button
			variant="outline"
			label="Перейти в каталог"
			size="md"
			onClick={goto('/catalog')}
			class="bg-gray-300 h-15 text-center align-middle hover:bg-gray-100 hover:cursor-pointer"
		></Button>
	
		<Button
			iconFirst="src/lib/assets/Vector (1).png"
			class="h-12  rotate-180 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
			size="sm"
			variant="outline"
		/>
		<Button
			iconFirst="src/lib/assets/Vector (1).png"
			size="sm"
			class=" h-12 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
			variant="outline"
		/>
	
	</div>
</div>
