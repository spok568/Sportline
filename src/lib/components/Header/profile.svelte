<script lang="ts">
	import { Avatar } from 'bits-ui';
	import { pictures } from '$lib/components/icon/icons';
</script>

<Avatar.Root>
	<div
		class="flex h-[50px] w-[50px] items-center justify-center gap-[20px] overflow-hidden rounded-full border-[1.5px] border-white bg-black p-[10px]"
	>
		<Avatar.Fallback>
			<pictures.ProfileIcon class="h-5 w-5 text-white" />
		</Avatar.Fallback>
	</div>
</Avatar.Root>
