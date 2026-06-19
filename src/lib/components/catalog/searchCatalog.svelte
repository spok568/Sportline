<script lang="ts">
import Input from "../Input.svelte";
import { pictures } from "../allPictures";
</script>

<div class="flex w-[1,224px] h-[70px] border-b border-[#D9D9D9] pt-[10px] pb-[10px] pl-[50px] gap-10 items-center justify-around">
    <div class="w-[797px] h-[40px]">
        <span class="text-[40px] leading-[40px] font-black">Каталог</span>
    </div>
    <div class="flex  ">
        <Input 
        iconFirst={pictures.search}
        placeholder='Search'
        className='w-[367px] h-[50px] bg-[#D9D9D9]'
        />
    </div>
</div>