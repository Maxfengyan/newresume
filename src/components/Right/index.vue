<template>
  <div class="right">
    <skillcomponent />
    <languagecompinent />
  </div>
</template>
<script>
import Skillcomponent from "./Skill.vue";
import Languagecompinent from "./Aboutus.vue";
export default {
  components: {
    Skillcomponent,
    Languagecompinent,
  },
};
</script>

<style scoped>
.right {
  padding-left: 15px;
  margin-top: 10px;
  box-sizing: border-box;
  width: 50%;
  overflow: hidden;
  float: left;
  padding-bottom: 20px;
}
</style>