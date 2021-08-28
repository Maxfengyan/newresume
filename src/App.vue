<template>
  <pccomponent />
</template>

<script>
import { ref } from "vue";
import Pccomponent from "./components/Pc/index.vue";
export default {
  components: { Pccomponent },
  setup() {
    const dpi = window.screen.width;
    const pc = ref(true);
    // 判断设备分辨率
    if (dpi <= 1280) {
      pc.value = false;
    }
    return { pc };
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  /* font-family: PingFangSC-Regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  width: 100%;
}
a {
  color: #dedede;
}
a:hover {
  color: #409eff;
}
</style>