import { defineComponent, Fragment } from "vue";
import nprogressComponent from "@/components/Nprogress/index.jsx";
import headerComponent from "./components/Header.jsx";
import leftComponent from "./components/Left.jsx";
import rightComponent from "./components/right.jsx";
import animateScrollTo from "animated-scroll-to";
import style from "@/style/pc/pc.module.scss";

const Pc = defineComponent({
  name: "Pc",
  components: {
    headerComponent,
    leftComponent,
    rightComponent,
    nprogressComponent,
  },
  props: {
    pcValue: {
      type: Boolean,
    },
  },
  setup() {
    const returnTop = () => {
      animateScrollTo(0);
    };
    const download = () => {
      window.location.href = import.meta.env.VITE_SYSTEM_DOWNLOAD;
    };
    return () => {
      return (
        <Fragment>
          <nprogress-component />
          <div class={style.page}>
            <header-component class="animated fadeInDown" />
            <left-component class="animated fadeInLeft" />
            <right-component class="animated fadeInRight" />
            <div class="EasterEgg">
              Any application that can be written in JavaScript, will eventually
              be written in JavaScript.
            </div>
            <van-icon
              onClick={() => returnTop()}
              name="back-top"
              class={style.returnTop}
              title="回到顶部"
            />
            <div
              onClick={() => download()}
              class={style.download}
              title="下载简历"
            >
              <svg-icon name="download" />
            </div>
          </div>
        </Fragment>
      );
    };
  },
});

export default Pc;
