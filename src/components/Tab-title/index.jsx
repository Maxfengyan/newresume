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
      let textBlock;
      if (props.append.type === 1) {
        textBlock = <div>{props.append.content}</div>;
      } else {
        textBlock = <a href={props.append.url}>{props.append.content}</a>;
      }
      return (
        <div class={style["tab-title"]}>
          <div class={style["tab-title-icon"]}>
            <svg-icon name={props.icon} />
          </div>
          <div class={style["tab-title-content"]}>
            <span>{props.title}</span>
            {textBlock}
          </div>
        </div>
      );
    };
  },
});

export default TabTitle;
