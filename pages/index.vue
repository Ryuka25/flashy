<script setup lang="ts">
import shortcuts from '~/data/shortcuts.json';
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-around grow">
        <div class="text-center">
            <h1 class="text-7xl font-bold">FLASHY</h1>
            <p class="text-2xl">
                Work well, work
                <span
                    class="font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full px-2">fastly</span>
            </p>
        </div>

        <ShortcutCarousel v-if="shortcuts && shortcuts.length > 0" :shortcuts="shortcuts" />
    </div>
</template>
