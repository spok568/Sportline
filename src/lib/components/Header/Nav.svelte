<script>
import { goto } from "$app/navigation";

function gotoMain(){
goto('/')
}
function gotoCatalog(){
goto('/catalog')
}
function gotoBasket(){
	goto('/basket')
}
</script>

<div class="flex gap-20 p-10 h-[43px] w-[466px]">
	<span onclick={gotoMain} class="text-[16px] text w-[84px] h-[23px] hover:cursor-pointer">Главная</span>
	<span onclick={gotoCatalog} class="text-[16px] w-[84px] h-[23px] hover:cursor-pointer">Каталог</span>
	<span onclick={gotoBasket} class="text-[16px] w-[84px] h-[23px] hover:cursor-pointer">Корзина</span>
</div>
