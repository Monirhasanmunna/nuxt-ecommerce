<script setup>
import {ref, onMounted } from 'vue';

const isActiveLoader = ref(true);

onMounted(() => {
  isActiveLoader.value = false
})

</script>

<template>
    <!-- Preloader -->
    <div v-if="isActiveLoader" class="preloader">
      <div class="preloader-inner">
        <div class="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- End Preloader -->
</template>