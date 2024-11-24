<script setup lang="ts">
import type { Shortcut } from "~/types/shortcut";
import type { CarouselApi } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const props = defineProps<{ shortcuts: Shortcut[] }>();
const emblaApi = useShortcutCarouselEmblaApi();
const shortcutAutoplay = useShortcutAutoplay();

const setApi = (val: CarouselApi) => {
  emblaApi.value = val;
};

const toogleAutoplay = () => {
  const autoplay = emblaApi.value?.plugins()?.autoplay;
  if (!autoplay) return;

  const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
  playOrStop();
};

watch(emblaApi, () => {
  const autoplay = emblaApi.value?.plugins()?.autoplay;
  if (!autoplay) return;

  shortcutAutoplay.value = autoplay.isPlaying();
  emblaApi.value
    ?.on("autoplay:play", () => (shortcutAutoplay.value = true))
    .on("autoplay:stop", () => (shortcutAutoplay.value = false))
    .on("reInit", () => (shortcutAutoplay.value = autoplay.isPlaying()));
});

const stopAutoplay = () => {
  const autoplay = emblaApi.value?.plugins()?.autoplay;
  if (!autoplay) return;
  autoplay.stop();
};

const resumeAutoplay = () => {
  const autoplay = emblaApi.value?.plugins()?.autoplay;
  if (!autoplay) return;
  autoplay.play();
};
</script>

<template>
  <div class="flex flex-col items-end gap-2">
    <div class="flex items-center space-x-2">
      <Switch
        id="shortcut-autoplay"
        :checked="shortcutAutoplay"
        @update:checked="toogleAutoplay"
      />
      <Label for="shortcut-autoplay">Autoplay top rated shortcuts</Label>
    </div>
    <Carousel
      v-slot="{ canScrollNext, canScrollPrev }"
      class="relative w-full max-w-[17rem] min-[400px]:max-w-xs lg:max-w-lg"
      :opts="{ loop: true }"
      :plugins="[Autoplay({ delay: 2000 })]"
      @init-api="setApi"
    >
      <CarouselContent>
        <CarouselItem v-for="shortcut in shortcuts" :key="shortcut.name">
          <ShortcutCard :shortcut="shortcut" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        v-if="canScrollPrev"
        class="ml-2"
        @click="stopAutoplay"
      />
      <CarouselNext v-if="canScrollNext" class="mr-2" @click="resumeAutoplay" />
    </Carousel>
  </div>
</template>
