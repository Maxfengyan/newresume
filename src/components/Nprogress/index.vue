
<template></template>
<script>
import { watch, onMounted, ref } from "vue";
import { useWindowSize } from "@vant/use";
import NProgress from "nprogress"; // Progress 进度条
export default {
  components: {
    drawerValue: {
      type: Boolean,
    },
  },
  setup() {
    const { width, height } = useWindowSize();
    const offsetHeight = ref();
    NProgress.configure({ showSpinner: false, trickle: false });
    NProgress.start();
    watch([width, height], () => {});
    onMounted(() => {
      listenScroll();
      offsetHeight.value = document.documentElement.offsetHeight;
    });
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
    const listenScroll = () => {
      document.addEventListener("scroll", debounce(100, getprecent), true);
    };
    const getprecent = (value) => {
      const scrollDistance =
        document.documentElement.scrollTop /
        (offsetHeight.value - height.value);
      if (scrollDistance == 1) {
        NProgress.set(0.99999999);
      } else {
        NProgress.set(scrollDistance);
      }
    };
    // NProgress.start();
  },
};
</script>
