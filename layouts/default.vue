<template>
  <div class="container mx-auto flex min-h-screen flex-col">
    <!-- Header -->
    <AppHeader class="py-2" />
    <!-- Body (Content area) -->
    <slot />
    <!-- Footer -->
    <AppFooter class="py-2" />
  </div>
</template>
