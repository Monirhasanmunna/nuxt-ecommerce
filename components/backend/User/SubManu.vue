<template>
<div>
    <nav class="nav gap-2 sub-manu-row">
      <NuxtLink to="/dashboard/user" class="nav-link bg-sub-manu rounded">User</NuxtLink>
      <NuxtLink to="/dashboard/user/role" class="nav-link bg-sub-manu rounded">Role</NuxtLink>
      <NuxtLink to="/dashboard/user/permission" class="nav-link bg-sub-manu rounded">Permission</NuxtLink>
    </nav>
</div>
</template>

<style scoped>
 .bg-sub-manu{
  background-color: #1B3755;
  color: white !important;
  cursor: pointer;
 }

 .bg-sub-manu:hover{
  background-color: #104884;
 }

 .sub-manu-row{
  background-color: rgb(224, 224, 224);
  padding: 10px 15px;
  border-radius: 5px;
 }

 .router-link-exact-active{
    background-color: #104884;
    border-radius: 4px;
 }
</style>