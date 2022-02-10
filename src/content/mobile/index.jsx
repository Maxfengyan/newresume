import { defineComponent, Fragment, reactive, watch, ref, watchEffect } from "vue";
import animateScrollTo from "animated-scroll-to";
import headerComponent from "./components/Header.jsx";
import leftComponent from "@/content/public/Left.jsx";
import rightComponent from "@/content/public/Right.jsx";
import Dark from "@/content/public/darkMixin.js";
import style from "@/style/mobile/index.module.scss";

const Mobile = defineComponent({
  name: "Mobile",
  components: {
    headerComponent,
    leftComponent,
    rightComponent,
  },
  setup() {
    const { darkData, handleToggleDark } = Dark();
    const popup = ref(0);
    const state = reactive({
      drawer: true,
      sortStyle: "sortOne",
      fadeStyle: "fadeInRight",
      goTransform: {
        transform: "rotate(0deg)",
      },

      showStatus: true,
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
    const handleCloseIcon = (value) => {
      state.showStatus = value;
    };
    const handleDarkModle = () => {
      handleToggleDark();
    };
    const download = () => {
      window.location.href = import.meta.env.VITE_SYSTEM_DOWNLOAD;
    };
    const hideIcon = () => {
      if (state.showStatus) {
        state.fadeStyle = "fadeOutRight";
        state.goTransform.transform = "rotate(180deg)";
        setTimeout(() => {
          state.showStatus = !state.showStatus;
        }, 1000);
      } else {
        state.fadeStyle = "fadeInRight";
        state.goTransform.transform = "rotate(0deg)";
        state.showStatus = !state.showStatus;
      }
    };
    watch(
      () => state.drawer,
      (value) => {
        if (value) {
          state.sortStyle = "sortOne";
        } else {
          state.sortStyle = "sortSecond";
        }
      }
    );
    return () => {
      let iconComponents = (
        <Fragment>
          <van-icon name="sort" class={style.sort + " " + style[state.sortStyle]} onClick={() => toggle()} />
          <van-icon name="back-top" class={style.returnTop + " animated" + " " + state.fadeStyle} onClick={() => returnTop()} />
          <div class={style.darkModel + " animated" + " " + state.fadeStyle} onClick={() => handleDarkModle()}>
            <svg-icon name={darkData.darkIcon} />
          </div>
          <div class={style.download + " animated" + " " + state.fadeStyle} onClick={() => download()}>
            <svg-icon name="download2" />
          </div>
        </Fragment>
      );
      return (
        <Fragment>
          {state.showStatus ? iconComponents : null}
          <div class={style.gogogo} onClick={() => hideIcon()} style={state.goTransform}>
            <svg-icon name="go" />
          </div>
          <van-popup show={state.drawer} position="left" duration="0.5" ref={popup} style={{ height: "100%", width: "100%" }}>
            <header-component onCloseIcon={(value) => handleCloseIcon(value)} />
            <left-component width-value="100%" />
          </van-popup>
          <right-component width-value="100%" />
        </Fragment>
      );
    };
  },
});

export default Mobile;
