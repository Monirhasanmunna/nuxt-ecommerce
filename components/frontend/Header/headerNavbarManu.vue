<template>
    <nav class="navbar navbar-expand-lg">
        <div class="navbar-collapse">
            <div class="nav-inner">
                <ul class="nav main-menu menu navbar-nav">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/product">Product</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/service">Service</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">Shop</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-active{
    color: #fff;
    background: #F7941D;
}
</style>
