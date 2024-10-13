<script lang="ts" setup>

const props = defineProps<{
    keyboardGroup: string
}>();

/**
 * Given a string representing a keyboard shortcut (e.g. "Ctrl + Shift + A"),
 * returns an array of strings representing the individual keys in the
 * shortcut (e.g. ["Ctrl", "Shift", "A"]).
 *
 * @param {string} groupString - The string representing the keyboard shortcut.
 * @returns {string[]} - An array of strings representing the individual keys in the shortcut.
 */
let splitKeyboardGroupString = function (groupString: string): string[] {
    // Replace escaped '+' with a temporary placeholder
    const ESCAPED_PLUS_PLACEHOLDER = "ESCAPED_PLUS";

    // Replace all escaped '+' characters
    groupString = groupString.replace(/\\\+/g, ESCAPED_PLUS_PLACEHOLDER);

    // Split by '+' and trim each part
    const parts = groupString.split("+").map((key) => key.trim());

    // Replace placeholder back to original character
    return parts.map((key) => key.replace(ESCAPED_PLUS_PLACEHOLDER, "+"));
};
</script>

<template>
    <div class="flex justify-center gap-2 border-2 rounded-xl p-2 border-b-4 dark:border-white"
        v-if="keyboardGroup.length > 1">
        <ShortcutKey v-for="keyboardKey in splitKeyboardGroupString(keyboardGroup)" :keyboardKey="keyboardKey" />
    </div>
    <div v-else class="flex justify-center p-2">
        <ShortcutKey :keyboardKey="keyboardGroup[0]" />
    </div>
</template>
