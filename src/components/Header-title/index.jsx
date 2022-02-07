import { defineComponent } from "vue";
import style from "./index.module.scss";
const ContentTitle = defineComponent({
  name: "ContentTitle",
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    englishName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={style["header-title"]}>
          <div class={style["header-title-icon"]}>
            <svg-icon name={props.icon} />
          </div>
          <div class={style["header-title-name"]}>
            <span>{props.name}</span>
            <span>{props.englishName}</span>
          </div>
        </div>
      );
    };
  },
});
export default ContentTitle;
