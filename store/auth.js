import {defineStore} from 'pinia';

export const authStore = defineStore('auth', () => {
    const errors = ref(null);
    const isButtonActive = ref(true);

    const register = async (credencial) =>{
        isButtonActive.value = false;
       const {data:response, pending, error} = await useFetch('http://localhost:8000/api/register', {
            method : 'POST',
            body: credencial
       });

       

       if(response.value.status == 200){
        useNuxtApp().$toast.success(`${response.value.message}`);
        isButtonActive.value = true;
        reset('registerForm')
       }

       if(response.value.status == 403){
        errors.value = response.value.message;
       }

    }

    return {register, isButtonActive, errors}
});