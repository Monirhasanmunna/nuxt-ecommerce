<template>
    <div>
        <!-- wrapper -->
        <div class="d-flex justify-content-start">
            <BackendSidebar />

            <!-- body -->
            <div class="body-wrapper">
                <BackendHeader />

                <div class="body">
                    <div class="body-card">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>