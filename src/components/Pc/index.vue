<template>
  <div class="page">
    <headercomponent />
    <leftcomponent />
  </div>
</template>

<script>
import Headercomponent from "../Header/index.vue";
import Leftcomponent from "../Left/index.vue";
export default {
  components: {
    Headercomponent,
    Leftcomponent,
  },
};
</script>

<style lang="scss">
.page {
  width: 1100px;
  margin: 16px auto;
  box-shadow: 0 2px 12px 0 #636161;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>