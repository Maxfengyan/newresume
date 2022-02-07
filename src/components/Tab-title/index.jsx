import { defineComponent } from "vue";
import style from "./index.module.scss";
const TabTitle = defineComponent({
  name: "TabTitle",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    append: {
      type: Object,
      default: {
        type: 1, // 1:纯文本 2:链接文字
        content: "",
        url: "",
      },
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={style["tab-title"]}>
          <div class={style["tab-title-icon"]}>
            <svg-icon name={props.icon} />
          </div>
          <div class={style["tab-title-content"]}>
            <span>{props.title}</span>
            {props.append.type === 1 ? <div>{props.append.content}</div> : <a href={props.append.url}>{props.append.content}</a>}
          </div>
        </div>
      );
    };
  },
});

export default TabTitle;
