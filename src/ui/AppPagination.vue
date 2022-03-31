<template>
  <!-- TODO: hide pagination in the middle -->
  <div class="pagination">
    <button
      class="pagination__btn"
      :disabled="!prev"
      @click="$emit('paginate-to-page', prev)"
    >
      &#10096;
    </button>
    <button
      class="pagination__btn"
      v-for="page in pages"
      :key="page"
      :disabled="currentPage === page"
      @click="$emit('paginate-to-page', page)"
    >
      {{ page }}
    </button>
    <button
      class="pagination__btn"
      :disabled="!next"
      @click="$emit('paginate-to-page', next)"
    >
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    pages: {
      type: Number,
      required: false,
    },
    next: {
      type: Number,
      required: false,
    },
    prev: {
      type: Number,
      required: false,
    },
    currentPage: {
      type: Number,
      required: false,
    },
  },
  computed: {
    pagesList() {
      return [...Array(this.pages).keys()].map((item) => item + 1);
    },
  },
  methods: {
    getPage(url) {
      return new URLSearchParams(new URL(url).search).get("page");
    },
  },
};
</script>

<style>
.pagination__btn {
  background-color: transparent;
  padding: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  border: 0;
  cursor: pointer;
}
.pagination__btn:disabled {
  cursor: default;
  opacity: 1;
}
</style>