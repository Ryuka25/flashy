<script lang="ts" setup>
import Toaster from './components/ui/toast/Toaster.vue';
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
