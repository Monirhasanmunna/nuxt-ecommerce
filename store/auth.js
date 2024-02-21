import {defineStore} from 'pinia';

export const authStore = defineStore('auth', () => {
    const errors = ref(null);
    const registerBtn = ref(true);
    const loginBtn = ref(true);
    const accessToken = ref(null);

    // registration function
    const register = async (credencial) =>{
        // credencial submit by api
       const {data:response, pending, error} = await useFetch('http://localhost:8000/api/register', {
            method : 'POST',
            body: credencial
       });

        // toastr message
       if(response.value.status == 200){
        useNuxtApp().$toast.success(`${response.value.message}`);
        registerBtn.value = false;
        reset('registerForm')
       }

        //push error message
       if(response.value.status == 403){
        errors.value = response.value.message;
       }

    }

    // login function
    const login = async (credencial) => {
        loginBtn.value = false;
        //login credencial submit by api
        const {data:response, pending, error} = await useFetch('http://localhost:8000/api/login', {
            method: "POST",
            body: credencial
        });


        //set access token
       const saveAccessToken = (token, user) =>{
        accessToken.value = {
            'token' : token,
            'user'  : user
        };
       }

        // toastr message
       if(response.value.status == 200){
        //saveAccessToken function call here
        saveAccessToken(response.value.token, response.value.user)
        useNuxtApp().$toast.success(`${response.value.message}`);
        loginBtn.value = true;
        reset('loginForm')
       }

    }

    return {register, registerBtn, loginBtn, errors, login, accessToken}
},
    {
        persist: {
            storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
            }),
        },
    }
);