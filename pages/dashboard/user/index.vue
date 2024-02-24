<script setup>
definePageMeta({
    layout: "backend-default"
});

useHead({title : 'User'})
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <BackendUserSubManu/>
    
    <div class="border p-3 shadow d-flex flex-column gap-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="left-content text-secondary">
          <h5>User List</h5>
        </div>
        <div class="right-content">
          <NuxtLink class="btn btn-primary">Add User</NuxtLink>
        </div>
      </div>

      <div class="border p-3">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
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
