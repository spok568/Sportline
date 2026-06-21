<script lang="ts">
	import { Avatar } from 'bits-ui';
	import ProfileIcon from '$lib/assets/ProfileIcon.png';
</script>

<Avatar.Root>
	<div
		class="flex items-center justify-center w-[50px] h-[50px] p-[10px] gap-[20px] rounded-full border-[1.5px] border-white bg-black overflow-hidden"
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