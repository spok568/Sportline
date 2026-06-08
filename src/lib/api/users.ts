

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

type LoginResponse = {
   accessToken:string;
tokenType:string;
user:User

}


type loginBody = {
    email:string;
    password:string;
}

let loggedInUser:User | null = null

export async function login (body:loginBody){

     const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if(!response.ok){
    return null
  }
 const data:LoginResponse = await response.json()
  localStorage.setItem('token', data.accessToken)
localStorage.setItem('user', JSON.stringify(data.user)) 
  loggedInUser = data.user
  return data
}
export function logout():void{
  localStorage.removeItem('user')
    localStorage.removeItem('token')
    loggedInUser  = null
}
export function getToken():string | null {
    return localStorage.getItem('token')
}  

export function getUser():User|null {
    if (loggedInUser) return loggedInUser;
  
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      loggedInUser = JSON.parse(userStr);
      return loggedInUser;
    }
  }
    return null
}