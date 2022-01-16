<template>
  <div class="main">
    <Filters
      :filtersData="filtersData"
      :selectedFilters="selectedFilters"
      @select-filter="selectFilter"
    />
    <CardList :cards="cards" />
    <AppPagination
      :pagesInfo="pages"
      @paginate-to-page="selectFilter"
      v-if="pages.count > 1"
    />
  </div>
</template>

<script>
import axios from "axios";
import Filters from "../components/Filters.vue";
import CardList from "../components/CardList.vue";
import AppPagination from "../ui/AppPagination.vue";

export default {
  name: "Main",
  components: {
    Filters,
    CardList,
    AppPagination,
  },
  data() {
    return {
      cards: [],
      pages: {
        count: null,
        prevLink: "",
        nextLink: "",
      },
      filtersData: [
        { name: "species", queryParams: ["alien", "human"] },
        { name: "status", queryParams: ["alive", "dead", "unknown"] },
        {
          name: "gender",
          queryParams: ["female", "male", "genderless", "unknown"],
        },
      ],
      selectedFilters: {
        species: "all",
        status: "all",
        gender: "all",
        page: 1,
      },
    };
  },
  methods: {
    selectFilter({ name, param }) {
      if (name !== "page") {
        this.selectedFilters.page = 1;
      }
      this.selectedFilters[name] = param;
    },
    fetchCards(params = {}) {
      return axios
        .get(`https://rickandmortyapi.com/api/character`, { params })
        .then(({ data }) => {
          this.pages.count = data.info.pages;
          this.pages.prevLink = data.info.prev;
          this.pages.nextLink = data.info.next;
          this.cards = data.results;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  watch: {
    selectedFilters: {
      async handler(n) {
        const params = Object.fromEntries(
          Object.entries(n).filter((item) => item[1] !== "all")
        );
        await this.fetchCards(params);
      },
      deep: true,
    },
  },
  async created() {
    await this.fetchCards();
  },
  // mounted() {
  //   document.addEventListener("DOMContentLoaded", () => {
  //     console.log("loaded");
  //   });
  // },
};
</script>

<style>
.main {
  padding: 20px;
  max-width: 1600px;
}
</style>
