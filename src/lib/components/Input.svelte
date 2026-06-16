<script lang="ts">
	import type { PropsForInput } from '$lib/api/type';

	let {
		label = '',
		value = $bindable(),
		placeholder = '',
		required = false,
		type = "text" ,
		className = ''
	}: PropsForInput = $props();

	let id = crypto.randomUUID();
</script>

<label for={id} class="flex w-full flex-col gap-1">
	<span class="text-sm font-medium">{label}</span>

	{#if type === 'checkbox'}
		<div class="flex items-center gap-2">
			<input
				type="checkbox"
				bind:checked={value}
				{id}
				class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 {className}"
			/>
			<span>{label}</span>
		</div>
	{:else}
		<input
			{type}
			{placeholder}
			{required}
			bind:value
			{id}
			class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none {className}"
		/>
	{/if}
</label>
