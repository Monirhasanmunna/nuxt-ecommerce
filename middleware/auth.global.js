import {authStore} from '~/store/auth';

export default defineNuxtRouteMiddleware((to,from) => {
    const useAuth = authStore();
    
    if((useAuth.isLogedIn && to.path == '/login') || (useAuth.isLogedIn && to.path == '/register')){
        return navigateTo('/dashboard')
    }

    if(!useAuth.isLogedIn && to.path == '/dashboard'){
        return navigateTo('/login')
    }
});