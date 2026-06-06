<script>
  export const ssr = false;
  
  import Nav from "./Nav.svelte";
  import Sportline from "$lib/assets/Sportline.png";
  import Profile from '$lib/components/Header/Profile.svelte';
  import Button from "../Button.svelte";
  import { goto } from "$app/navigation";
  import { getUser } from "$lib/api/users";  
  import { onMount } from "svelte";
  let user = $state(null);
   onMount(() => {
  });
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    goto('/login');
  }
</script>

<div class="flex items-center justify-between px-6 py-4">
  <Nav />
  <img src={Sportline} alt="logo" />
  <div class="flex items-center gap-4">
    <Profile />
    
     {#if user}
  <p>{user.firstName}</p>
{/if}
    <Button
      label='Выйти'
      variant='outline'
      size='sm'
      onClick={logout}
      class=''
     />
     <div>
        
     </div>
  </div>
</div>