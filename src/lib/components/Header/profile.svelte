<script lang="ts">
	import { Avatar } from 'bits-ui';
	import ProfileIcon from '$lib/assets/Profile-icon.png';
</script>

<Avatar.Root delayMs={200}>
	<div
		class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-transparent"
	>
		<Avatar.Fallback class=" border">
			<img src={ProfileIcon} alt="иконка профиля" />
		</Avatar.Fallback>
	</div>
</Avatar.Root>
