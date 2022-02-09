import { defineComponent } from "vue";
import style from "@/style/public/left.module.scss";
import eduComponent from "./Edu.jsx";
import expComponent from "./Exp/Exp.jsx";
import projectComponent from "./Project.jsx";
const Left = defineComponent({
  name: "Left",
  components: {
    eduComponent,
    expComponent,
    projectComponent,
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
        <div class={style.left} style={{ width: props.widthValue }}>
          <edu-component />
          <exp-component />
          <project-component />
        </div>
      );
    };
  },
});

export default Left;
