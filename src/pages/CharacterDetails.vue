<template>
  <div class="character">
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else-if="$apollo.error">An error occured</div>
    <div v-else>
      <img class="character__img" :src="characterInfo.image" :alt="characterInfo.name" />
      <div class="character__wrapper">
        <h3>{{ characterInfo.name }}</h3>
        <p>{{ characterInfo.species }}</p>
        <p>{{ characterInfo.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CharacterDetails",
  apollo: {
    // #1

    // characterInfo: gql`
    //   query {
    //     characterInfo: character(id: 1) {
    //       id
    //       name
    //       image
    //       status
    //       species
    //     }
    //   }
    // `,

    // #2
    characterInfo() {
      return {
        query: gql`
          query getCharacter($id: ID!) {
            characterInfo: character(id: $id) {
              id
              name
              image
              status
              species
            }
          }
        `,
        variables: {
          id: this.id,
        },
      };
    },
  },
  data() {
    return {
      id: this.$route.params.id,
      characterInfo: {},
    };
  },
};
</script>

<style>
.character {
  padding: 20px;
}
.character__img {
  display: inline-block;
  min-width: 300px;
  min-height: 300px;
  background-color: rgb(94, 105, 64);
}
</style>