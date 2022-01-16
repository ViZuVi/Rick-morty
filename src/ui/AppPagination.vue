<template>
<!-- TODO: hide pagination in the middle -->
  <div class="pagination">
    <button
      class="pagination__btn"
      :disabled="!pagesInfo.prevLink"
      @click="
        $emit('paginate-to-page', {
          name: 'page',
          param: +getPage(pagesInfo.prevLink),
        })
      "
    >
      &#10096;
    </button>
    <button
      class="pagination__btn"
      v-for="page in pages"
      :key="page"
      :disabled="+$route.query.page === page"
      @click="$emit('paginate-to-page', { name: 'page', param: page })"
    >
      {{ page }}
    </button>
    <button
      class="pagination__btn"
      :disabled="!pagesInfo.nextLink"
      @click="
        $emit('paginate-to-page', {
          name: 'page',
          param: +getPage(pagesInfo.nextLink),
        })
      "
    >
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    pagesInfo: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    pages() {
      return [...Array(this.pagesInfo.count).keys()].map((item) => item + 1);
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