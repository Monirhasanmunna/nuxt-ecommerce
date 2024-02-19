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
                    <li><a href="#">Shop<i class="fa-solid fa-angle-down"></i><span class="new">New</span></a>
                        <ul class="dropdown">
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="shop-list.html">Shop List</a></li>
                            <li><a href="shop-single.html">shop Single</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages<i class="fa-solid fa-angle-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="mail-success.html">Mail Success</a></li>
                            <li><a href="404.html">404</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Blog<i class="fa-solid fa-angle-down"></i></a>
                        <ul class="dropdown">
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                            <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>