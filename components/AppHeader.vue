<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import {
  Menu,
  Keyboard,
  Home,
  ContactRound,
  ArrowLeft,
  ListFilter,
} from "lucide-vue-next";

// directive to auto-focus input
const vFocus = {
  mounted: (el: { focus: () => any }) => el.focus(),
};

const searchInputPlaceholder = "Search shortcut...";

const navigation = [
  {
    label: "Home",
    icon: Home,
    to: "/",
  },
  {
    label: "Shortcuts",
    icon: Keyboard,
    to: "/shortcuts",
  },

  {
    label: "Contact us",
    icon: ContactRound,
    to: "/contact",
  },
];

const colorMode = useColorMode();
const { toast } = useToast();
const router = useRouter();

const menuIsOpen = useState(() => false);
const searchingMode = useState(() => false);
const searchText = useState("searchText", () => "");

const toogleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};

const closeMenu = () => {
  menuIsOpen.value = false;
};

const onSearchClick = () => {
  searchingMode.value = true;
};

const onFilterClick = () => {
  toast({
    title: "⌛ Comming soon!",
    description:
      "Be patient, we are already on our way to implement this feature!",
  });
};

watch(searchText, (value) => {
  if (router.currentRoute.value.path !== "/shortcuts") {
    router.push(`/shortcuts`);
  }
});
</script>

<template>
  <header class="sticky top-0 z-50 -mb-px bg-background/75 backdrop-blur">
    <!-- Mobile Search -->
    <div v-if="searchingMode" class="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        @click="searchingMode = false"
        class="shrink-0"
      >
        <ArrowLeft class="h-4 w-4" />
      </Button>
      <Input
        :placeholder="searchInputPlaceholder"
        v-model="searchText"
        v-focus
        class="bg-transparent"
      />
      <Button variant="ghost" @click="onFilterClick">
        <ListFilter class="h-4 w-4" />
        <span class="ml-2">Filters</span>
      </Button>
    </div>
    <!-- Mobile Search -->
    <div v-else class="flex items-center justify-between">
      <NuxtLink to="/" class="flex-1">
        <AppName />
      </NuxtLink>
      <!-- Desktop Search -->
      <div class="hidden w-1/2 gap-2 md:flex">
        <Input
          :placeholder="searchInputPlaceholder"
          v-model="searchText"
          class="bg-transparent"
        />
        <Button variant="ghost" @click="onFilterClick">
          <ListFilter class="h-4 w-4" />
          <span class="ml-2">Filters</span>
        </Button>
      </div>
      <!-- /Desktop Search -->
      <div class="flex flex-1 items-center justify-end gap-1">
        <Button
          variant="outline"
          class="text-xs md:hidden"
          @click="onSearchClick"
        >
          <span>{{ searchInputPlaceholder }}</span>
          <ListFilter class="ml-4 size-3" />
        </Button>
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
        <Sheet
          :open="menuIsOpen"
          @update:open="(value) => (menuIsOpen = value)"
        >
          <SheetTrigger as-child>
            <Button variant="outline" size="icon">
              <Menu :class="['size-4 transition-all']" />
              <span class="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <NuxtLink to="/" class="flex-1" @click="closeMenu">
              <AppName />
            </NuxtLink>
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
