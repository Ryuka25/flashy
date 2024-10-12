<script lang="ts" setup>
import Toaster from './components/ui/toast/Toaster.vue';
import { APP_DESCRIPTION } from './lib/consts';

useHead({
  title: 'Flashy',
  meta: [
    { name: 'description', content: APP_DESCRIPTION }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
