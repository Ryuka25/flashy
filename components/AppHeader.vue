<script setup lang="ts">
const colorMode = useColorMode();

const toogleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <header class="flex items-center justify-between">
    <NuxtLink to="/">
      <AppName />
    </NuxtLink>
    <div class="flex gap-2">
      <Button variant="ghost" size="icon" @click="toogleColorMode">
        <Icon
          name="lucide:moon"
          class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          name="lucide:sun"
          class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
      <Button variant="ghost" size="icon" as-child>
        <NuxtLink to="https://github.com/Ryuka25/flashy" target="_blank">
          <Icon name="simple-icons:github" class="h-4 w-4" />
          <span class="sr-only">Show on GitHub</span>
        </NuxtLink>
      </Button>
    </div>
  </header>
</template>
