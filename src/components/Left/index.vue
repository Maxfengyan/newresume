<template>
  <div class="left">
    <educomponent />
    <expcomponent />
    <personcomponent />
  </div>
</template>
<script>
import Educomponent from "./Edu.vue";
import Expcomponent from "./Exp.vue";
import Personcomponent from "./Person.vue";
export default {
  components: {
    Educomponent,
    Expcomponent,
    Personcomponent,
  },
};
</script>

<style scoped>
.left {
  padding-left: 15px;
  padding-top: 10px;
  box-sizing: border-box;
  width: 50%;
  overflow: hidden;
  float: left;
  padding-bottom: 20px;
  background: #fff;
}
</style>