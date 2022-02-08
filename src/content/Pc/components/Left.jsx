import { defineComponent } from "vue";
import style from "@/style/pc/module/left.module.scss";
import eduComponent from "@/content/public/Edu.jsx";
import expComponent from "@/content/public/Exp/Exp.jsx";
import projectComponent from "@/content/public/Project.jsx";
const Left = defineComponent({
  name: "Left",
  components: {
    eduComponent,
    expComponent,
    projectComponent,
  },
  setup() {
    return () => {
      return (
        <div class={style.left}>
          <edu-component />
          <exp-component />
          <project-component />
        </div>
      );
    };
  },
});

export default Left;
