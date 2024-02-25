import {defineStore} from 'pinia';
import {ref,computed} from 'vue';
import { authStore } from './auth';

export const roleStore = defineStore('role', ()=>{
    const useStore = authStore();
    const token = computed(() => useStore.accessToken.token);

    const roles = ref(null);
    const isPending = ref(true);
    const isDataSubmited = ref(false);

    const getRole = async () =>{
        const allRole = await $fetch('http://localhost:8000/api/user/role', {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token.value}`
            }
        });

        if(allRole != null){
            roles.value = allRole;
            isPending.value = false
        }
    }

    const createRole = async (data) =>{
        const response = await $fetch('http://localhost:8000/api/user/role', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.value}`
            }
        });

   
        if(response.status === 200){
            isDataSubmited.value = true
        }
    }

    return {
        getRole,
        isPending, 
        roles, 
        createRole, 
        isDataSubmited
    }
});