<script lang="ts">
	import type { PropsForInput } from "$lib/api/type";

	let {
		label = '',
		value = $bindable<string>(),
		checked = $bindable<boolean>(),
		placeholder = '',
		required = false,
		inputType  = 'text',
		text='',
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
			<input
				type="checkbox"
				id={id}
				bind:checked={checked}
				class="text-blue-600 focus:ring-blue-500 {className}"
			/>
			<span>{text}</span>
		</div>

	{:else}
		<div class="relative bg-white flex items-center  ">
			{#if iconFirst}
				<img 
					src={iconFirst} 
					alt="" 
					class="absolute left-3 "
				/>
			{/if}
			
			<input
				id={id}
				type={inputType}
				placeholder={placeholder}
				required={required}
				bind:value={value}
				class="{className} pl-10 "
		
			/>
			{#if iconLast}
				<img 
					src={iconLast} 
					alt="" 
					class="absolute right-3 "
				/>
			{/if}
		</div>
	{/if}
</label>