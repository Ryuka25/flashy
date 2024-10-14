<script setup lang="ts">
defineProps<{
    keyboardKey: string;
}>()
</script>

<template>
    <kbd :class="keyboardKey.length == 1 ? 'aspect-square' : ''"
        class="dark:border-white uppercase border-2 border-b-4 hover:cursor-pointer hover:border-b-2 rounded-lg px-4 h-14 flex justify-center items-center text-lg">
        {{ keyboardKey }}
    </kbd>
</template>
