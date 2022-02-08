import { defineComponent } from "vue";
import style from "@/style/pc/module/right.module.scss";
import skillComponent from "@/content/public/Skill.jsx";
const Right = defineComponent({
  name: "Right",
  components: {
    skillComponent,
  },
  setup() {
    return () => {
      return (
        <div class={style.right}>
          <skill-component />
        </div>
      );
    };
  },
});

export default Right;
