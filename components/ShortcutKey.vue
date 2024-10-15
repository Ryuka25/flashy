<script setup lang="ts">
defineProps<{
    keyboardKey: string;
}>()

/**
 * Returns the class name for a given keyboard key based on its length.
 * 
 * @param {string} key - The keyboard key to get the class name for.
 * @returns {string} The class name for the given keyboard key.
 */
const getKeyClass = (key: string): string => {
    const length = key.length;
    if (length === 1) {
        return 'aspect-square';
    }
    if (length > 5) {
        // e.g: '← backspace'
        return 'text-xs';
    }
    return '';
};

</script>

<template>
    <kbd :class="getKeyClass(keyboardKey)"
        class="dark:border-white uppercase border-2 border-b-4 hover:cursor-pointer hover:border-b-2 rounded-lg px-4 h-14 flex justify-center items-center text-lg">
        {{ keyboardKey }}
    </kbd>
</template>
