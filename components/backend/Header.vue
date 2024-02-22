<script setup>
    import { authStore } from '~/store/auth';
    const useAuth = authStore();

</script>

<template>
    <!-- header -->
    <div class="header d-flex justify-content-between align-items-center">
        <div class="Icon " id="toggleButton">
            <IconsBars class="barsIcon" id="barsIcon" />
        </div>

        <div></div>

        <div class="side-dropdown">
            <div class="rounded-dropdown d-flex align-items-center gap-3">

                <h6 style="color: gray;">{{ useAuth.accessToken.user?.name }}</h6>

                <button type="button" class="avatarBtn" data-bs-toggle="dropdown" aria-expanded="false" >
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                        alt="">
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <button type="button" @click="useAuth.logout" class="dropdown-item py-2">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>