import {defineStore} from 'pinia';
import {ref,computed} from 'vue';
import { authStore } from './auth';

export const permissionStore = defineStore('permission', ()=>{
    const useStore = authStore();
    const permissions = ref(null);
    const isPending = ref(true);
    const token = computed(() => useStore.accessToken.token);
    

    const getPermissions = async () =>{
        try {
            const allPermissions = await $fetch('http://localhost:8000/api/user/permission',{
                method : "GET",
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token.value}`
                }
            });

            if(permissions != null){
                permissions.value = allPermissions
                isPending.value= false  
            }

        } catch (error) {
            console.log(error)
        }
    }

    return {permissions, getPermissions, isPending}
});