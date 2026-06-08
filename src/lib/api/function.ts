 import { goto } from "$app/navigation";
 
 export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    goto('/login');
  }


