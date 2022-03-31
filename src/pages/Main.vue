<template>
  <div class="main">
    <Filters
      :filtersData="filtersData"
      :selectedFilters="selectedFilters"
      @select-filter="selectFilter"
    />

    <ApolloQuery
      :query="
        (gql) => gql`
          query getCharacters($page: Int!, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
              info {
                count
                pages
                next
                prev
              }
              results {
                id
                name
                status
                species
                gender
                image
                location {
                  name
                }
              }
            }
          }
        `
      "
      :variables="{
        page: currentPage,
        filter: selectedFilters,
      }"
    >
      <template slot-scope="{ result: { data, loading, error } }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">An error occurred</div>
        <div v-else-if="data">
          <CardList :cards="data.characters.results" />
          <AppPagination
            :currentPage="currentPage"
            :pages="data.characters.info.pages"
            :next="data.characters.info.next"
            :prev="data.characters.info.prev"
            v-if="data.characters.info.pages > 1"
            @paginate-to-page="currentPage = $event"
          />
        </div>
        <div v-else>No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
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
      currentPage: 1,
      filtersData: [
        { name: "species", queryParams: ["alien", "human"] },
        { name: "status", queryParams: ["alive", "dead", "unknown"] },
        {
          name: "gender",
          queryParams: ["female", "male", "genderless", "unknown"],
        },
      ],
      selectedFilters: {
        species: "",
        status: "",
        gender: "",
      },
    };
  },
  methods: {
    selectFilter({ name, param }) {
      if (name !== "page") {
        this.currentPage = 1;
      }
      this.selectedFilters = {
        ...this.selectedFilters,
        [name]: param === "all" ? "" : param,
      };
    },
  },
};
</script>

<style>
.main {
  padding: 20px;
  max-width: 1600px;
}
</style>
