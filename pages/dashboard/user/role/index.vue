<script setup>
definePageMeta({ layout: "backend-default" });
useHead({title : 'Role'})

import { roleStore } from '~/store/role';
import { onMounted } from 'vue';
const useRoleStore = roleStore();

onMounted(() => useRoleStore.getRole())



</script>

<template>
  <div class="d-flex flex-column gap-4">
    <BackendUserSubManu/>
    
    <div class="border p-3 shadow d-flex flex-column gap-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="left-content text-secondary">
          <h5>Role List</h5>
        </div>
        <div class="right-content">
          <NuxtLink class="btn btn-primary">Add Role</NuxtLink>
        </div>
      </div>

      <div class="border p-3">
        <BackendTablePlaceholder v-if="useRoleStore.isPending" />

        <div v-else class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th width="10%">#</th>
                <th>Name</th>
                <th width="30%">Total Permissions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(role, index) in useRoleStore.roles" :key="index">
                <th>{{ index+1 }}</th>
                <td>{{ role.name }}</td>
                <td>
                  <span class="badge badge-primary px-2" style="font-size: 15px;">{{ role.permissions.length }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
