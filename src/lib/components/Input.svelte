<script lang="ts">
    interface Props {
        label?:string;
        value?:string;
        placeholder?:string;
        required?:boolean;
        type?:'text' | 'password' | 'email' | 'number';
        className ?:string
    }
    let {
        label = '',
        value =$bindable(),
        placeholder='',
        required=false,
        type='text',
        className = '',
    }:Props = $props()
</script> 



<label >
    {label}
    <input {type} {placeholder} {required} bind:value class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none {className }"   />
</label>