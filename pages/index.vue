<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast'

import shortcuts from '~/data/shortcuts.json';

const { toast } = useToast();

const onGetStartedClick = () => {
    toast({
        title: "🎉 Welcome aboard!",
        description: "You're already in! Enjoy all the awesome shortcuts waiting for you!",
    });
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-center justify-around grow max-w-7xl mx-auto">
        <div class="lg:block lg:text-left text-center">
            <h2 class="text-5xl lg:text-7xl font-bold"><span class="underline">Flashy</span> the
                way you code</h2>
            <p class="hidden lg:block my-8">
                Unlock your full coding potential and master essential keyboard shortcuts for
                your favorite IDE — boost productivity and supercharge your workflow 🚀
            </p>
            <div class="flex justify-center lg:justify-start">
                <Button @click="onGetStartedClick" class="my-4 text-right">
                    <Icon name="lucide:rocket" class="h-4 w-4 mr-4" />
                    Get started
                </Button>
                <Button class="my-4 text-right ml-2" variant="outline" as-child>
                    <NuxtLink to="https://github.com/Ryuka25/flashy" target="_blank">
                        <Icon name="simple-icons:github" class="h-4 w-4 mr-4" />
                        Star on github
                    </NuxtLink>
                </Button>
            </div>
        </div>
        <div class="flex flex-col items-center w-full">
            <ShortcutCarousel id="shortcuts" v-if="shortcuts && shortcuts.length > 0" :shortcuts="shortcuts" />
        </div>
    </div>
</template>
