<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";

import { APP_DESCRIPTION } from "~/lib/consts";
import shortcuts from "~/data/shortcuts.json";

const { toast } = useToast();

const onGetStartedClick = () => {
  toast({
    title: "🎉 Welcome aboard!",
    description:
      "You're already in! Enjoy all the awesome shortcuts waiting for you!",
  });
};
</script>

<template>
  <main class="flex flex-1 flex-col items-center justify-around lg:flex-row">
    <div class="text-center lg:block lg:text-left">
      <h1 class="text-5xl font-bold lg:text-7xl">
        <span class="underline">Flashy</span> the way you code
      </h1>
      <p class="my-8 hidden lg:block">{{ APP_DESCRIPTION }}</p>
      <div class="flex justify-center lg:justify-start">
        <Button @click="onGetStartedClick" class="my-4 text-right">
          <Icon name="lucide:rocket" class="mr-4 h-4 w-4" />
          Get started
        </Button>
        <Button class="my-4 ml-2 text-right" variant="outline" as-child>
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
        v-if="shortcuts && shortcuts.length > 0"
        :shortcuts="shortcuts"
      />
    </div>
  </main>
</template>
