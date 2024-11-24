<script setup lang="ts">
import { APP_DESCRIPTION } from "~/lib/consts";
import shortcuts from "~/data/shortcuts.json";

const topShortcuts = shortcuts.slice(0, 11);
</script>

<template>
  <main class="flex flex-1 flex-col items-center justify-around lg:flex-row">
    <div class="text-center lg:block lg:text-left">
      <h1 class="text-5xl font-bold lg:text-7xl">
        <span class="underline">Flashy</span> the way you code
      </h1>
      <p class="my-8 hidden lg:block">{{ APP_DESCRIPTION }}</p>
      <div class="flex justify-center lg:justify-start">
        <Button class="my-4 text-right" as-child>
          <NuxtLink to="/shortcuts">
            <Icon name="lucide:rocket" class="mr-4 h-4 w-4" />
            Explore shortcuts
          </NuxtLink>
        </Button>
        <Button
          class="my-4 ml-2 hidden text-right min-[420px]:flex"
          variant="outline"
          as-child
        >
          <NuxtLink to="https://github.com/Ryuka25/flashy" target="_blank">
            <Icon name="simple-icons:github" class="mr-4 h-4 w-4" />
            Star on github
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <ShortcutCarousel
        id="shortcuts"
        v-if="topShortcuts && topShortcuts.length > 0"
        :shortcuts="topShortcuts"
      />
    </div>
  </main>
</template>
