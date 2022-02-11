import { defineComponent, Fragment } from "vue";
import nprogressComponent from "./components/Nprogress.jsx";
import headerComponent from "./components/Header.jsx";
import iconList from "./components/IconList.jsx";
import leftComponent from "@/content/public/Left.jsx";
import rightComponent from "@/content/public/Right.jsx";
import style from "@/style/pc/pc.module.scss";
const Pc = defineComponent({
  name: "Pc",
  components: {
    iconList,
    headerComponent,
    leftComponent,
    rightComponent,
    nprogressComponent,
  },
  setup() {
    return () => {
      return (
        <Fragment>
          <nprogress-component />
          <div class={style.page}>
            <header-component class="animated fadeInDown" />
            <left-component width-value="50%" class="animated fadeInLeft delay-1s" />
            <right-component width-value="50%" class="animated fadeInRight delay-1s" />
            <div class="EasterEgg">Any application that can be written in JavaScript, will eventually be written in JavaScript.</div>
            <icon-list />
          </div>
        </Fragment>
      );
    };
  },
});

export default Pc;
