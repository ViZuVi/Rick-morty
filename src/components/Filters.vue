<template>
  <div class="filters">
    <div
      v-for="filter in filtersData"
      :key="filter.name"
      class="filters__wrapper"
    >
      <h3 class="filters__title">{{ filter.name }}</h3>
      <AppSelect
        :selectedValue="selectedFilters[filter.name] || 'all'"
        :filter="filter"
        @select-filter="$emit('select-filter', $event)"
      />
    </div>
  </div>
</template>

<script>
import AppSelect from "../ui/AppSelect.vue";

export default {
  name: "Filters",
  components: {
    AppSelect,
  },
  props: {
    filtersData: {
      type: Array,
      required: true,
      default: () => [],
    },
    selectedFilters: {
      type: Object,
      required: true,
      default: () => {},
    }
  },
};
</script>

<style>
.filters {
  display: flex;
  margin-bottom: 60px;
}
.filters__wrapper {
  margin-right: 20px;
}
.filters__title {
  text-transform: uppercase;
}
</style>