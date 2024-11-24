<script setup lang="ts">
const colorMode = useColorMode();

const toogleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};

import { Menu, Zap, Home, ContactRound } from "lucide-vue-next";

const isOpen = useState(() => false);

const closeMenu = () => {
  isOpen.value = false;
};

const navigation = [
  {
    label: "Home",
    icon: Home,
    to: "/",
  },
  {
    label: "Shortcuts",
    icon: Zap,
    to: "/shortcuts",
  },

  {
    label: "Contact us",
    icon: ContactRound,
    to: "/contact",
  },
];
</script>

<template>
  <header class="sticky top-0 z-50 -mb-px bg-background/75 backdrop-blur">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="flex-1">
        <AppName />
      </NuxtLink>
      <!-- Desktop navigation -->
      <nav class="hidden md:block">
        <ul class="flex gap-4">
          <li v-for="link in navigation">
            <NuxtLink
              :to="link.to"
              class="text-foreground/80 hover:text-foreground"
              active-class="!text-foreground"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- /Desktop navigation -->
      <div class="flex flex-1 items-center justify-end gap-1">
        <Button variant="ghost" size="icon" @click="toogleColorMode">
          <Icon
            name="lucide:moon"
            class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            name="lucide:sun"
            class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon" as-child>
          <NuxtLink to="https://github.com/Ryuka25/flashy" target="_blank">
            <Icon name="simple-icons:github" class="h-4 w-4" />
            <span class="sr-only">Show on GitHub</span>
          </NuxtLink>
        </Button>
        <Sheet :open="isOpen" @update:open="(value) => (isOpen = value)">
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="md:hidden">
              <Menu :class="['size-4 transition-all']" />
              <span class="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <NuxtLink to="/" class="flex-1" @click="closeMenu">
              <AppName />
            </NuxtLink>
            <!-- Mobile Navigation -->
            <nav class="w-full bg-background">
              <ul class="flex flex-col justify-center gap-4 p-4">
                <li v-for="link in navigation">
                  <NuxtLink
                    :to="link.to"
                    class="flex items-center gap-2 text-foreground/80 hover:text-foreground"
                    active-class="!text-foreground"
                    @click="closeMenu"
                  >
                    <component :is="link.icon" class="size-5" />
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
            <!--/Mobile Navigation -->
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
