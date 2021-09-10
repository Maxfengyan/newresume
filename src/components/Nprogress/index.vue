<template></template>
<script>
import { watch, onMounted, reactive } from "vue";
import NProgress from "nprogress"; // Progress 进度条
import { useWindowSize } from "@vant/use";
export default {
  setup() {
    const { width, height } = useWindowSize();
    const state = reactive({
      height: 950,
    });
    watch([width, height], () => {
      state.height = height;
    });
    var bodyWidth = document.body;

    onMounted(() => {
      scrollListen();
    });
    const scrollListen = () => {
      document.addEventListener("scroll", debounce(100, countDistance));
    };
    const countDistance = () => {
      console.log(document.documentElement.scrollTop / state.height);
    };

    const throttle = (delay, action) => {
      var last = 0;
      return function () {
        var curr = +new Date();
        if (curr - last > delay) {
          action.apply(this, arguments);
          last = curr;
        }
      };
    };

    const debounce = (delay, callback) => {
      var timeout = 0;
      return function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          callback(e);
        }, delay);
      };
    };
    NProgress.configure({ showSpinner: false });

    // NProgress.start();
    // NProgress.done();
  },
};
</script>
