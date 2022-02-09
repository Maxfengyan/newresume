import { defineComponent } from "vue";
import style from "@/style/public/right.module.scss";
import skillComponent from "./Skill.jsx";
import aboutComponent from "./About.jsx";
const Right = defineComponent({
  name: "Right",
  components: {
    skillComponent,
    aboutComponent,
  },
  props: {
    widthValue: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={style.right} style={{ width: props.widthValue }}>
          <skill-component />
          <about-component />
        </div>
      );
    };
  },
});

export default Right;
