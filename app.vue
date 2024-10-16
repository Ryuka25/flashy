<script lang="ts" setup>
import Toaster from "./components/ui/toast/Toaster.vue";
import { APP_DESCRIPTION } from "./lib/consts";

useSeoMeta({
  title: "Flashy",
  ogTitle: "Flashy",
  description: APP_DESCRIPTION,
  ogDescription: APP_DESCRIPTION,
  ogImage: "https://flashy-dev.vercel.app/images/flashy-preview.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
