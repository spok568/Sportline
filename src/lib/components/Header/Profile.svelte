<script lang="ts">
	import { Avatar } from 'bits-ui';
	import ProfileIcon from '$lib/assets/ProfileIcon.png';
</script>

<Avatar.Root>
	<div
		class="flex h-[50px] w-[50px] items-center justify-center gap-[20px] overflow-hidden rounded-full border-[1.5px] border-white bg-black p-[10px]"
	>
		<Avatar.Fallback>
			<img 
src={ProfileIcon} 
alt="иконка профиля" 
				class="w-[12px] h-[12.86px]"
/>
		</Avatar.Fallback>
	</div>
</Avatar.Root>