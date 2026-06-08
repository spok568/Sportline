<script lang="ts">
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
			class="bg-gray-300 hover:bg-gray-400"
		></Button>
		<Button
			icon="src/lib/assets/Vector (1).png"
			class="h-10 rotate-180 bg-gray-100 hover:bg-gray-200"
			size="sm"
			variant="outline"
		/>
		<Button
			icon="src/lib/assets/Vector (1).png"
			size="sm"
			class=" h-10 bg-gray-100 hover:bg-gray-200"
			variant="outline"
		/>
	</div>
</div>
