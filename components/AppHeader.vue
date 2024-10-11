<script setup lang="ts">
import { Moon, Sun, Zap } from 'lucide-vue-next';

const colorMode = useColorMode();
</script>

<template>
    <nav class="flex justify-between items-center p-2">
        <AppName class="ml-4" />
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline">
                    <Moon
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Sun
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="colorMode.preference = 'light'">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem @click="colorMode.preference = 'dark'">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem @click="colorMode.preference = 'system'">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </nav>
</template>
