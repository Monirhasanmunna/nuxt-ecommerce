import {defineStore} from 'pinia';

export const authStore = defineStore('auth', () => {
    const registerErrors = ref(null);
    const loginErrors = ref(null);
    const registerBtn = ref(true);
    const loginBtn = ref(true);
    const accessToken = ref(null);
    const isLogedIn = ref(false);

    // registration function
    const register = async (credencial) =>{
        registerBtn.value = false;

        // credencial submit by api
       const {data:response, pending, error} = await useFetch('http://localhost:8000/api/register', {
            method : 'POST',
            body: credencial
       });

        // toastr message
       if(response.value.status == 200){
        useNuxtApp().$toast.success(`${response.value.message}`);
        registerBtn.value = true;
        reset('registerForm')
       }

        //push error message
       if(response.value.status == 403){
        registerErrors.value = response.value.message;
        registerBtn.value = true;
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

        isLogedIn.value = true;
        navigateTo('/dashboard');
       }

        // toastr message
       if(response.value.status == 200){
        //saveAccessToken function call here
        saveAccessToken(response.value.token, response.value.user)
        useNuxtApp().$toast.success(`${response.value.message}`);
        loginBtn.value = true;
        reset('loginForm')
       }



       if(response.value.status == 403){
        loginBtn.value = true;
        loginErrors.value = response.value.message;
       }


    }

    const logout = () => {
        accessToken.value = '';
        isLogedIn.value = false;
        navigateTo('/login')
    }

    return {register, registerBtn, loginBtn, registerErrors, loginErrors, login, accessToken, isLogedIn, logout}
},
    // {
    //     persist: {
    //         storage: persistedState.cookiesWithOptions({
    //         sameSite: 'strict',
    //         }),
    //     },
    // }
);