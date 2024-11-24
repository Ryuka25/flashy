<script lang="ts" setup>
import shortcuts from "~/data/shortcuts.json";
import { Plus } from "lucide-vue-next";

const itemPerPage = 6;
const currentPage = ref(1);
const siblingCount = 1;

const searchText = useState("searchText", () => "");

const updatePage = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0 });
};

const shortcutsPage = computed(() => {
  return filteredShortcuts.value.slice(
    (currentPage.value - 1) * itemPerPage,
    currentPage.value * itemPerPage,
  );
});

const filteredShortcuts = computed(() => {
  return shortcuts.filter((shortcut) => {
    return shortcut.name.toLowerCase().includes(searchText.value.toLowerCase());
  });
});

const firstPage = 1;
const lastPage = computed(() =>
  Math.ceil(filteredShortcuts.value.length / itemPerPage),
);

watch(filteredShortcuts, () => {
  updatePage(1);
});
</script>

<template>
  <div class="mt-2 flex-1">
    <Card v-if="!filteredShortcuts.length">
      <CardContent class="flex flex-col items-center text-center">
        <img src="~/assets/images/404.svg" class="w-1/2" />
        <div class="font-bold">No shortcuts found</div>
        <p class="mt-4 max-w-80">
          Your search "{{ searchText }}" did not match any shortcuts. Please try
          again.
        </p>
        <div class="mt-8 flex gap-2">
          <Button variant="outline" @click="searchText = ''">
            Clear search
          </Button>
          <Button as-child class="flex items-center gap-1">
            <NuxtLink
              to="https://github.com/Ryuka25/flashy/issues/new/choose"
              target="_blank"
            >
              <Plus class="size-4" />
              Open issue on Github
            </NuxtLink>
          </Button>
        </div>
      </CardContent>
    </Card>

    <template v-else>
      <div class="grid gap-2 md:grid-cols-2">
        <div
          v-for="shortcut in shortcutsPage"
          :key="shortcut.name"
          class="min-h-[350px] min-w-0 md:min-h-[40vh]"
        >
          <ShortcutCard :shortcut="shortcut" />
        </div>
      </div>
      <div class="mt-2 flex justify-center">
        <!-- Mobile pagination -->
        <Pagination
          class="md:hidden"
          v-slot="{ page }"
          :total="filteredShortcuts.length"
          x
          :items-per-page="itemPerPage"
          :page="currentPage"
          @update:page="updatePage"
          :sibling-count="siblingCount"
        >
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst
              v-if="page > firstPage && page > firstPage + siblingCount"
            />
            <PaginationPrev v-if="page > firstPage" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="h-10 w-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext v-if="page < lastPage" />
            <PaginationLast
              v-if="page < lastPage && page < lastPage - siblingCount"
            />
          </PaginationList>
        </Pagination>
        <!-- /Mobile pagination -->
        <!-- Desktop pagination -->
        <Pagination
          class="hidden md:block"
          v-slot="{ page }"
          :total="filteredShortcuts.length"
          x
          :items-per-page="itemPerPage"
          :page="currentPage"
          @update:page="updatePage"
          :sibling-count="siblingCount"
          show-edges
        >
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationPrev v-if="page > firstPage" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="h-10 w-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext v-if="page < lastPage" />
          </PaginationList>
        </Pagination>
        <!-- /Desktop pagination -->
      </div>
    </template>
  </div>
</template>
