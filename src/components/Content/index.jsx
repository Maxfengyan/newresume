import { defineComponent } from "vue";
import style from "./index.module.scss";

const Text = defineComponent({
  name: "Text",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: Number, // 0:文本 1：url跳转
      required: true,
    },
  },
  setup(props) {
    let className;
    let styleMargin;
    if (!!parseInt(props.title)) {
      className = "paragraph-title";
      styleMargin = "margin-top: 0.25rem";
    } else {
      className = "content-title";
      styleMargin = "margin-top: 0";
    }
    return () => {
      let textBlock;
      if (props.type === 0) {
        textBlock = <span class={style["content-text"]}>{props.text}</span>;
      } else {
        textBlock = <a href={props.text}>点击查看</a>;
      }
      return (
        <div class={style.content} style={styleMargin}>
          <svg-icon name={props.icon} />
          <div class={style[className]}>
            <b>{props.title}</b>
            {textBlock}
          </div>
        </div>
      );
    };
  },
});
export default Text;
