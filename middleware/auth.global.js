import {authStore} from '~/store/auth';

export default defineNuxtRouteMiddleware((to,from) => {
    const useAuth = authStore();
    
    if((useAuth.isLogedIn == true && useAuth.accessToken?.token != null && to.path == '/login') || (useAuth.isLogedIn == true && to.path == '/register')){
        return navigateTo('/dashboard')
    }

    if(useAuth.isLogedIn != true && useAuth.accessToken?.token == null && to.path == '/dashboard'){
        return navigateTo('/login')
    }
});