<template>
  <div class="cards-list">
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
  props: {
    cards: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style>
.cards-list {
  display: flex;
  flex-wrap: wrap;
}
</style>