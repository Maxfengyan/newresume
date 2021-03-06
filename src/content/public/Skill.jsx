import { defineComponent, Fragment, reactive, ref, onUpdated } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import titleComponent from "@/components/Title/index.jsx";
import contentComponent from "@/components/Content/index.jsx";
import lineComponent from "@/components/Line/index.jsx";
import { getSkill } from "@/api/skill.js";
import style from "@/style/public/skill.module.scss";
const Skill = defineComponent({
  name: "Skill",
  components: {
    headerTitle,
    lineComponent,
    titleComponent,
    contentComponent,
    tabTitle,
  },
  setup() {
    const state = reactive({
      skillList: [],
    });
    getSkill().then((data) => {
      state.skillList = data;
    });
    return () => {
      return (
        <div class={style.skills}>
          <header-title icon="hand" name="掌握技能" englishName="SKILLS" />
          <line-component />
          {state.skillList.map((item) => {
            return (
              <Fragment>
                <tab-title icon={item.icon} title={item.name} append={{ type: 1, content: "", url: "" }} />
                {item.content.map((com) => {
                  return (
                    <Fragment>
                      <title-component title-name={com.title} />
                      {com.content.map((text) => {
                        return <content-component icon="star" title="" text={text} type={0} />;
                      })}
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      );
    };
  },
});

export default Skill;
