<template>
  <!-- <headercomponent /> -->
  <rightcomponent />
</template>

<script>
import { reactive } from "vue";
import Headercomponent from "../Header/mobile.vue";
import Rightcomponent from "../Right/index.vue";
export default {
  components: {
    Headercomponent,
    Rightcomponent,
  },
  setup() {
    const state = reactive({
      drawer: true,
    });
    return { state };
  },
};
</script>

<style>
</style>