<template>
  <div
    class="mx-auto flex min-h-screen max-w-screen-xl flex-col px-4 sm:px-6 lg:px-8"
  >
    <!-- Header -->
    <AppHeader class="py-2" />
    <!-- Body (Content area) -->
    <slot />
    <!-- Footer -->
    <AppFooter class="py-2" />
  </div>
</template>
