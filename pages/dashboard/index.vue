<script setup>

</script>

<template>
    <!-- wrapper -->
    <div class="d-flex justify-content-start">
        <!-- sidebar -->
        <div class="p-3 sidebar">
            <div class="sidebar-header">

            </div>
        </div>

        <!-- body -->
        <div class="body-wrapper">
            <!-- header -->
            <div class="header d-flex justify-content-between align-items-center">
                <div class="Icon">
                    <IconsBars class="barsIcon" />
                </div>

                <div></div>

                <div class="side-dropdown">
                    <div class="rounded-dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="">
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="body">
                <!-- Example single danger button -->
                <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>