<script setup>
defineProps(['page','link'])
</script>

<template>
	<!-- Breadcrumbs -->
	<div class="breadcrumbs">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="bread-inner">
						<ul class="bread-list">
							<li><NuxtLink to="/">Home<i class="fa-solid fa-chevron-right"></i></NuxtLink></li>
							<li class="active"><NuxtLink :to="link">{{ page }}</NuxtLink></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End Breadcrumbs -->
</template>

<style scoped>
.router-link-active{
  background-color: transparent !important;
}
</style>