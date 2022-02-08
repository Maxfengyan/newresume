import { defineComponent } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import style from "@/style/public/skill.module.scss";
const Skill = defineComponent({
  name: "Skill",
  components: {
    headerTitle,
  },
  setup() {
    return () => {
      return (
        <div class={style.skills}>
          <header-title
            icon="hand"
            name="掌握技能"
            englishName="SKILLS"
            // line-height={state.height}
          />
        </div>
      );
    };
  },
});

export default Skill;
