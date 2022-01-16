<template>
<!-- TODO: skeleton (use plugin) -->
  <div class="card">
    <router-link :to="`/character/${card.id}`">
      <h4>{{ card.name }}</h4>
      <div class="card__img-wrapper">
        <img class="card__img" :src="card.image" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        praesentium magni suscipit tempore inventore omnis dolore explicabo
        veritatis voluptatibus quasi ducimus dolor numquam, vel dolorem animi
        quia ipsum quidem ipsa.
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style>
.card {
  width: 350px;
  min-height: 370px;
  box-shadow: 0px 1px 4px 0px #707070;
  margin-right: 36px;
  margin-bottom: 24px;
  background-color: #ffffff;
  padding: 20px;
  cursor: pointer;
}
.card__img-wrapper {
  width: 100px;
  height: 100px;
  margin-right: 8px;
  margin-bottom: 8px;
  float: left;
  background-color: #e6ebd0;
}
.card__img {
  min-width: 100px;
}
.card__sceleton-text {
  display: inline-block;
  height: 16px;
  background-color: #e6ebd0;
  border-radius: 2px;
  width: 100%;
}
</style>