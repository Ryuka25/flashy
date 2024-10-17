<script setup lang="ts">
defineProps<{
  keyboardKey: string;
}>();

/**
 * Returns the class name for a given keyboard key based on its length.
 *
 * @param {string} key - The keyboard key to get the class name for.
 * @returns {string} The class name for the given keyboard key.
 */
const getKeyClass = (key: string): string => {
  const length = key.length;
  if (length === 1) {
    return "aspect-square";
  }
  if (length > 5) {
    // e.g: '← backspace'
    return "text-xs";
  }
  return "";
};
</script>

<template>
  <kbd
    :class="getKeyClass(keyboardKey)"
    class="flex h-14 items-center justify-center rounded-lg border-2 border-b-4 px-4 text-lg uppercase hover:cursor-pointer hover:border-b-2 dark:border-white"
  >
    {{ keyboardKey }}
  </kbd>
</template>
