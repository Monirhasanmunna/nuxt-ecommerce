<script setup>
import { authStore } from '~/store/auth';
const useAuth = authStore();

const logoutfun = ()=>{
  useAuth.logout();
}

</script>


<template>
    <!-- Topbar -->
    <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <!-- Top Left -->
              <div class="top-left">
                <ul class="list-main">
                  <li> <i class="fa-solid fa-phone"></i>+060 (800) 801-582</li>
                  <li><i class="fa-solid fa-envelope"></i> support@shophub.com</li>
                </ul>
              </div>
              <!--/ End Top Left -->
            </div>
            <div class="col-lg-8 col-md-12 col-12">
              <!-- Top Right -->
              <div class="right-content">
                <ul class="list-main">
                  <li><i class="fa-solid fa-location-dot"></i> Store location</li>
                  <li><i class="fa-regular fa-clock"></i> <a href="#">Daily deal</a></li>
                  <li v-if="useAuth.isLogedIn"><i class="fa-regular fa-user"></i><NuxtLink to="/dashboard">My account</NuxtLink></li>
                  <li><i class="fa-solid fa-power-off"></i>
                    <button v-if="useAuth.isLogedIn" type="button" @click="logoutfun">Logout</button>
                    <NuxtLink v-if="!useAuth.isLogedIn" to="/login">Login</NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- End Top Right -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Topbar -->
</template>

<style scoped>
.router-link-active{
  background-color: transparent !important;
}
</style>