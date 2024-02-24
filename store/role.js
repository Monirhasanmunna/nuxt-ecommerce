import {defineStore} from 'pinia';
import {ref,computed} from 'vue';
import { authStore } from './auth';

export const roleStore = defineStore('role', ()=>{
    const useStore = authStore();
    const token = computed(() => useStore.accessToken.token);

    const roles = ref(null);
    const isPending = ref(true);

    const getRole = async () =>{
        const allRole = await $fetch('http://localhost:8000/api/user/role', {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token.value}`
            }
        });

        console.log(allRole)

        if(allRole != null){
            roles.value = allRole;
            isPending.value = false
        }
    }

    return {getRole,isPending, roles}
});