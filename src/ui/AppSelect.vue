<template>
  <div class="app-select">
    <span
      ref="selectedValueRef"
      class="app-select__selected-value"
      @click="isOpened = !isOpened"
      @focus="isOpened = true"
      @blur="onDocumentClick"
      @focusout="onDocumentClick"
      >{{ selectedValue }}</span
    >
    <div class="app-select__dropdown" v-if="isOpened" :ref="filter.name">
      <span class="app-select__dropdown-item" @click.stop="selectValue"
        >all</span
      >
      <span
        v-for="param in filter.queryParams"
        :key="param"
        class="app-select__dropdown-item"
        @click="selectValue"
        >{{ param }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    filter: {
      type: Object,
      required: true,
      default: () => {},
    },
    selectedValue: {
      type: String,
      required: true,
      default: () => "all",
    }
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    selectValue(e) {
      this.$emit("select-filter", {
        name: this.filter.name,
        param: e.target.textContent,
      });
      this.isOpened = false;
    },
    onDocumentClick(e) {
      if (this.$refs[this.filter.name] && e.target !== this.$refs.selectedValueRef) {
        this.isOpened = false;
      }
    },
  },
  created() {
    document.addEventListener("click", this.onDocumentClick);
  },
  beforeDestroyed() {
    document.removeEventListener("click", this.onDocumentClick);
  },
};
</script>

<style>
.app-select {
  width: 220px;
  border: 1px solid #000000;
  position: relative;
}

.app-select__selected-value {
  background-color: #ffffff;
  width: 100%;
  cursor: pointer;
  padding: 4px 8px;
  height: 30px;
  display: block;
  line-height: 1.3;
}

.app-select__dropdown {
  position: absolute;
  top: 31px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px 0px #707070;
  display: flex;
  flex-direction: column;
}

.app-select__dropdown-item {
  padding: 4px 8px;
  cursor: pointer;
}

.app-select__dropdown-item:hover {
  background-color: #707070;
  color: #ffffff;
}
</style>