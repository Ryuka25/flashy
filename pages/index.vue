<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
</script>

<template>
    <div class="flex flex-col justify-center h-full items-center">
        <div class="text-center">
            <h1 class="text-7xl font-bold">FLASHY</h1>
            <p class="text-2xl">
                Work well, work
                <span
                    class="font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full px-2">fastly</span>
            </p>
        </div>
        <div class="mt-6">
            <Button>
                Get started
                <ArrowUpRight class="h-4 w-4 ml-4" />
            </Button>
        </div>
    </div>
</template>
