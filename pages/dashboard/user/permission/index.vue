<script setup>
definePageMeta({ layout: "backend-default" });
useHead({title : 'Permission'})

import { storeToRefs } from 'pinia';
import { permissionStore } from '~/store/permission';
import { onMounted } from 'vue';
const usePermission = permissionStore();

onMounted(() => usePermission.getPermissions())


</script>

<template>
  <div class="d-flex flex-column gap-4">
    <BackendUserSubManu/>
    
    <div class="border p-3 shadow d-flex flex-column gap-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="left-content text-secondary">
          <h5>Permission List</h5>
        </div>
        <div class="right-content">
          <!-- <NuxtLink class="btn btn-primary">Add Permission</NuxtLink> -->
        </div>
      </div>

      <div class="border p-3">
        <BackendTablePlaceholder v-if="usePermission.isPending" />

        <div v-else class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th width="10%">#</th>
                <th>Name</th>
                <th width="30%">Group Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(permission, index) in usePermission.permissions" :key="index">
                <th>{{ index+1 }}</th>
                <td class="text-capitalize">{{ permission.name }}</td>
                <td>{{ permission.group_name }}</td>
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
