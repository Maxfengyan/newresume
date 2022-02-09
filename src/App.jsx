import { defineComponent, ref, watch } from "vue";
import { useWindowSize } from "@vant/use";
import pcComponent from "./content/pc/index.jsx";
import mobileComponent from "./content/mobile/index.jsx";
const App = defineComponent({
  name: "App",
  components: {
    pcComponent,
    mobileComponent,
  },
  setup() {
    /* 自适应监听 */
    const { width } = useWindowSize();
    const pc = ref(true);

    // 监听尺寸变化
    watch(width, (value) => {
      activeWidth(value);
    });

    const activeWidth = (value) => {
      if (value < 1140) {
        pc.value = false;
      } else {
        pc.value = true;
      }
    };
    activeWidth(width.value);

    return () => {
      if (pc.value) {
        return <pc-component />;
      } else {
        return <mobile-component />;
      }
    };
  },
});

export default App;
