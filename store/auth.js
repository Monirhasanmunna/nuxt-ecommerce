import {defineStore} from 'pinia';

export const authStore = defineStore('auth', () => {
    const register = async (credencial) =>{
       const {pending, data:response} = await useFetch('http://localhost:8000/api/register', {
            method : 'POST',
            body: credencial
       });

       console.log(response);
    }

    return {register}
});