<script setup>
import {authStore} from '~/store/auth';
definePageMeta({layout : 'frontend-layout-two'})
useHead({title : 'Login'})
const useAuth = authStore();

const submitLogin = (credentials) =>{
	useAuth.login(credentials)
}

</script>

<template>

<FrontendBreadcrumbs page="Login" link="/login"/>
    <section class="shop login section">
			<div class="container">
				<div class="row"> 
					<div class="col-lg-6 offset-lg-3 col-12">
						<div class="login-form">
							<h2>Login</h2>
							{{ useAuth.accessToken }}
							<p>Please register in order to checkout more quickly</p>
							<!-- Form -->
							<FormKit type="form" @submit="submitLogin" id="loginForm" submit-lable="Login" :actions="false">
								<div class="row">
									<div class="col-12">
										<FormKit type="email" name="email" label="Email" placeholder="Enter Email" validation="required|email" />
										<span v-if="useAuth.errors" class="formkit-message">{{ useAuth.errors.email[0] }}</span>
									</div>
									<div class="col-12">
										<FormKit type="password" name="password"  label="Password" placeholder="Enter Password" validation="required|length:8|number" />
									</div>
									<div class="col-12">
										<div class="form-group login-btn">
											<button v-if="useAuth.loginBtn != true" type="button" class="btn d-inline-flex justify-content-center align-items-center">
												<div class="spinner-border text-success" role="status">
													<span class="visually-hidden">Loading...</span>
												</div>
											</button>

											<button v-else class="btn" type="submit">Login</button>
											<NuxtLink to="/register" class="btn">Register</NuxtLink>
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
</template>

<style scoped>

</style>