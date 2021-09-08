<template>
  <div class="right" ref="right">
    <skillcomponent />
    <languagecompinent />
  </div>
</template>
<script>
import Skillcomponent from "./Skill.vue";
import Languagecompinent from "./Aboutus.vue";
import { onMounted, ref } from "vue";
export default {
  components: {
    Skillcomponent,
    Languagecompinent,
  },
  setup() {
    const right = ref();
    onMounted(() => {
      if (document.documentElement.clientWidth < 1280) {
        right.value.style.width = "100%";
      }
    });
    return {
      right,
    };
  },
};
</script>

<style scoped>
.right {
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