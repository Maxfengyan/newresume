<template>
  <div class="left" ref="left">
    <educomponent />
    <expcomponent />
    <personcomponent />
  </div>
</template>
<script>
import Educomponent from "./Edu.vue";
import Expcomponent from "./Exp.vue";
import Personcomponent from "./Person.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    Educomponent,
    Expcomponent,
    Personcomponent,
  },
  setup() {
    const left = ref();
    onMounted(() => {
      if (document.documentElement.clientWidth < 1280) {
        left.value.style.width = "100%";
      }
    });
    return {
      left,
    };
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