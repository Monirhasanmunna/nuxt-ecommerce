<script setup>
definePageMeta({ layout: "backend-default" });
useHead({title : 'Role'})

import { roleStore } from '~/store/role';
const useRoleStore = roleStore();
const formModal = ref(false);

const {refresh} = await useLazyAsyncData('roles', () => useRoleStore.getRole())
onMounted(() => refresh())

const submitForm = (data)=>{
  useRoleStore.createRole(data)
  refresh();
}

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
          <NuxtLink class="btn btn-primary" @click="formModal = true">Add Role</NuxtLink>{{ formModal }}
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
                <th width="15%" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(role, index) in useRoleStore.roles" :key="index">
                <th>{{ index+1 }}</th>
                <td class="text-capitalize">{{ role.name }}</td>
                <td>
                  <span class="badge badge-primary px-2" style="font-size: 15px;">{{ role.permissions.length }}</span>
                </td>
                <td class="text-center">
                  <NuxtLink style="font-size: 20px;padding: 6px 7px;background-color: rgb(33, 207, 210);border-radius: 4px; color: white;margin-right: 5px"><IconsGearIcon style="font-size: 19px;" /></NuxtLink>
                  <NuxtLink style="font-size: 20px;padding: 6px 7px;background-color: rgb(33, 89, 210);border-radius: 4px; color: white;margin-right: 5px"><IconsEditButton style="font-size: 19px;" /></NuxtLink>
                  <NuxtLink style="font-size: 20px;padding: 6px 7px;background-color: rgb(214, 56, 56);border-radius: 4px; color: white;"><IconsDeleteIcon style="font-size: 19px;"/></NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal -->
  <div class="modal fade" :class="{'show': formModal == true}" :style="{display: formModal == true ? 'block' : ''}" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="formModalLabel">Add New Role</h1>
              <button type="button" class="btn-close" @click="formModal = false" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <FormKit type="form" @submit="submitForm" id="roleModal" :actions="false">
                <div class="form-group">
                  <label for="name">Role Name</label>
                  <FormKit type="text" class="form-control" name="name" id="name" placeholder="Enter Role Name" validation="required" />
                </div>

                <div class="form-group pull-right">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </FormKit>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
.hideModal{
  display: none !important;
}
</style>
