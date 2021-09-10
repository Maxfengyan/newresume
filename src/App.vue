<template>
  <pccomponent v-if="pc" />
  <mobilecomponent v-else />
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useWindowSize } from "@vant/use";
import Pccomponent from "./components/Pc/index.vue";
import Mobilecomponent from "./components/Mobile/index.vue";
export default {
  components: { Pccomponent, Mobilecomponent },
  setup() {
    /* 自适应架子啊 */
    const { width, height } = useWindowSize();
    const pc = ref(true);

    onMounted(() => {
      activeWidth(width.value);
    });

    watch([width, height], () => {
      activeWidth(width.value);
    });

    const activeWidth = (value) => {
      if (value < 1140) {
        pc.value = false;
      } else {
        pc.value = true;
      }
    };

    return { pc };
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
</style>