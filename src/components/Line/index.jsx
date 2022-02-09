import { defineComponent } from "vue";
import style from "./index.module.scss";

const Line = defineComponent({
  name: "Line",
  setup() {
    return () => {
      return (
        <div class={style.block}>
          <div class={style.line}></div>
          <div class={style.round} style={{ left: "-0.06rem" }}></div>
        </div>
      );
    };
  },
});
export default Line;
