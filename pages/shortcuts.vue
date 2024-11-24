<script lang="ts" setup>
import shortcuts from "~/data/shortcuts.json";

const itemPerPage = 6;
const currentPage = ref(1);

const firstPage = 1;
const lastPage = Math.ceil(shortcuts.length / itemPerPage);
const siblingCount = 1;

const updatePage = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0 });
};

const shortcutsPage = computed(() => {
  return shortcuts.slice(
    (currentPage.value - 1) * itemPerPage,
    currentPage.value * itemPerPage,
  );
});
</script>

<template>
  <div class="mt-2 flex-1">
    <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
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
        :total="shortcuts.length"
        x
        :items-per-page="itemPerPage"
        :default-page="currentPage"
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
        :total="shortcuts.length"
        x
        :items-per-page="itemPerPage"
        :default-page="currentPage"
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
  </div>
</template>
