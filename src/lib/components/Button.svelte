<script lang="ts">

type Variant = 'primary' | 'outline'
type Size = 'sm' | 'md' | 'lg'
interface Props {
    label: string;
    variant?:Variant;
    onClick?: (event: MouseEvent) => void;
    size?:Size,
    icon?:string
    class?: string;
}
let {
    label = '',
    variant = 'primary',
    size = 'lg',
    onClick,
    icon  = '',
     class: customClass = '', 
}:Props = $props()

const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: ' border border-gray-300 hover:bg-gray-100 ',
}

const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 ',
    lg: 'px-6 py-4 text-lg',
}
const buttonClass = [
    'rounded-lg' ,
    variantClasses[variant],
    sizeClasses[size],
     customClass,
]
</script>
 
<button
class ={buttonClass}
onclick={onClick}>
{label}
{#if icon}
    <img src={icon} alt="">
{/if}

</button>