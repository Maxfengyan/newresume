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
    return () => {
      return (
        <div class="content">
          <svg-icon name={props.icon} />
          <span
            class="content-title"
            /* :style="{
          'font-size': !!parseInt(title) ? '17px' : '15px',
          color: !!parseInt(title) ? '#0a7df4' : '#409eff',
        }" */
          >
            {title}
          </span>
          {props.type === 0 ? <span class="content-text">{text}</span> : <a href={props.text}>点击查看</a>}
        </div>
      );
    };
  },
});
export default Text;
