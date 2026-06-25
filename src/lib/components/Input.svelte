<script lang="ts">
	import type { Component } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';
	import type { PropsForInput } from '$lib/api/type';

	let {
		label = '',
		value = $bindable<string>(),
		checked = $bindable<boolean>(),
		placeholder = '',
		required = false,
		inputType = 'text',
		text = '',
		className = '',
		iconLast = '',
		iconFirst = ''
	}: PropsForInput = $props();

	let id = crypto.randomUUID();
</script>

<label for={id} class="flex flex-col gap-1">
	<span class="text-sm">{label}</span>

	{#if inputType === 'checkbox'}
		<div class="flex items-center gap-2">
			<input type="checkbox" {id} bind:checked class={className} />
			<span>{text}</span>
		</div>
	{:else}
		<div class="relative flex items-center bg-white">
			{#if iconFirst}
				<div class="absolute left-3 flex items-center">
					<svelte:component this={iconFirst} class="h-5 w-5" />
				</div>
			{/if}

			<input {id} type={inputType} {placeholder} {required} bind:value class="{className} " />

			{#if iconLast}
				<div class="absolute right-3 flex items-center">
					<svelte:component this={iconLast} class="h-5 w-5 " />
				</div>
			{/if}
		</div>
	{/if}
</label>
