<template>
    <div class="min-h-screen container mx-auto flex flex-col">
        <!-- Header -->
        <AppHeader class="py-2" />
        <!-- Body (Content area) -->
        <slot />
        <!-- Footer -->
        <AppFooter class="py-2" />
    </div>
</template>