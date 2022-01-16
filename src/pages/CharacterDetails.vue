<template>
  <div class="character">
    <img :src="characterInfo.image" alt="" />
    <div class="character__wrapper">
      <h3>{{ characterInfo.name }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CharacterDetails",
  data() {
    return {
      characterInfo: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data}) => {
        this.characterInfo = data;
      });
  },
};
</script>

<style>
.character {
  padding: 20px;
}
</style>