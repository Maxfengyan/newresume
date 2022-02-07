import { defineComponent, onMounted, ref } from "vue";
import { useWindowSize } from "@vant/use";
import NProgress from "nprogress"; // Progress 进度条

const Nprogress = defineComponent({
  name: "Nprogress",
  setup() {
    const { height } = useWindowSize();
    const offsetHeight = ref(0);
    NProgress.configure({ showSpinner: false, trickle: false });
    NProgress.start();

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
    onMounted(() => {
      listenScroll();
      offsetHeight.value = document.documentElement.offsetHeight;
    });

    const getprecent = (value) => {
      const scrollDistance = document.documentElement.scrollTop / (offsetHeight.value - height.value);
      if (scrollDistance == 1) {
        NProgress.set(0.99999999);
      } else {
        NProgress.set(scrollDistance);
      }
    };
    return () => {};
  },
});

export default Nprogress;
