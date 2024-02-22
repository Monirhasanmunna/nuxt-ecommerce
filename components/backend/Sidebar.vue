<template>
    <!-- sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="sidebar-header d-flex justify-content-center align-items-center">
            <h4>Ecommerce</h4>
        </div>

        <div class="side-manu">
            <ul class="nav">
                <li class="navItem">
                    <NuxtLink to="/dashboard" class="d-flex justify-content-between align-items-center px-2">
                        <div class="d-flex gap-2 align-items-center">
                            <IconsDashboard style="font-size: 18px;" />
                            <span>Dashboard</span>
                        </div>
                        <IconsArrowRight />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>