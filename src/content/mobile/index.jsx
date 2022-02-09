import { defineComponent, Fragment, reactive, watch, ref } from "vue";
import animateScrollTo from "animated-scroll-to";
import headerComponent from "./components/Header.jsx";
import leftComponent from "@/content/public/Left.jsx";
import rightComponent from "@/content/public/Right.jsx";
import style from "@/style/mobile/index.module.scss";
const Mobile = defineComponent({
  name: "Mobile",
  components: {
    headerComponent,
    leftComponent,
    rightComponent,
  },
  setup() {
    const popup = ref(0);
    const state = reactive({
      drawer: true,
      sortStyle: {
        background: "#fff",
        color: "#000",
        transform: "rotate(90deg)",
      },
    });
    const toggle = () => {
      state.drawer = !state.drawer;
    };
    const returnTop = () => {
      if (state.drawer) {
        animateScrollTo(0, {
          elementToScroll: popup.value.popupRef.value,
        });
      } else {
        animateScrollTo(0);
      }
    };
    watch(
      () => state.drawer,
      (value) => {
        if (value) {
          state.sortStyle = {
            background: "#fff",
            color: "#000",
            transform: "rotate(90deg)",
          };
        } else {
          state.sortStyle = {
            background: "#000",
            color: "#fff",
            transform: "rotate(270deg)",
          };
        }
      }
    );
    return () => {
      return (
        <Fragment>
          <van-icon name="sort" class={style.sort} onClick={() => toggle()} style={state.sortStyle} />
          <van-icon name="back-top" class={style.returnTop} onClick={() => returnTop()} />
          <van-popup show={state.drawer} position="left" duration="0.5" ref={popup} style={{ height: "100%", width: "100%" }}>
            <header-component />
            <left-component width-value="100%" />
          </van-popup>
          <right-component width-value="100%" />
        </Fragment>
      );
    };
  },
});

export default Mobile;
