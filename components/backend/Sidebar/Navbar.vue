<script setup>
const route = useRoute();

</script>

<template>
    <div class="side-manu">
        <ul class="nav row-gap-2">
            <li class="navItem">
                <NuxtLink to="/dashboard" class="navLink d-flex justify-content-between align-items-center px-2">
                    <div class="d-flex gap-2 align-items-center">
                        <IconsDashboard style="font-size: 18px;" />
                        <span>Dashboard</span>
                    </div>
                    <IconsArrowRight />
                </NuxtLink>
            </li>

            <li class="navItem">
                <NuxtLink to="/dashboard/user" :class="{'router-link-exact-active': $route.path.startsWith('/dashboard/user')}" class="navLink d-flex justify-content-between align-items-center px-2">
                    <div class="d-flex gap-2 align-items-center">
                        <IconsUsers style="font-size: 18px;" />
                        <span>Users</span>
                    </div>
                    <IconsArrowRight />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.router-link-exact-active{
    background-color: #104884;
    border-radius: 4px;
 }
</style>
