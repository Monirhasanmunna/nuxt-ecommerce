<script setup>
import {authStore} from '~/store/auth';
definePageMeta({layout : 'frontend-layout-two'})
useHead({title : 'Register'})

const useAuth = authStore();

const submitForm = (credentials)=>{
	useAuth.register(credentials)
}

</script>
<template>

    <FrontendBreadcrumbs page="Register" link="/register"/>

    <!-- Shop Login -->
		<section class="shop login section">
			<div class="container">
				<div class="row"> 
					<div class="col-lg-6 offset-lg-3 col-12">
						<div class="login-form">
							<h2>Register</h2>
							<p>Please register in order to checkout more quickly</p>
							<!-- Form -->
							<FormKit type="form" @submit="submitForm"  submit-lable="Register" :actions="false" >
								<div class="row">
									<div class="col-12">
										<FormKit type="text" name="name" label="Your Name" placeholder="Enter Name" validation="required" />
									</div>
									<div class="col-12">
										<FormKit type="email" name="email" label="Email" placeholder="Enter Email" validation="required|email" />
									</div>
									<div class="col-12">
										<FormKit type="password" name="password"  label="Password" placeholder="Enter Password" validation="required|length:8|number" />
									</div>
									<div class="col-12">
										<FormKit type="password" name="password_confirm" label="Confirm Password" placeholder="Enter Password" validation="required|confirm|number" />
									</div>

									<FormKit type="password" name="user_type" value="customer" hidden  />
									<div class="col-12">
										<div class="form-group login-btn">
											<button type="submit" class="btn">Register</button>
											<NuxtLink to="/login" class="btn">Login</NuxtLink>
										</div>
									</div>
								</div>
							</FormKit>
							<!--/ End Form -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--/ End Login -->
		
</template>