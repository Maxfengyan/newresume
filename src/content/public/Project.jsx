import { defineComponent, Fragment, reactive, ref, onUpdated } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import contentComponent from "@/components/Content/index.jsx";
import style from "@/style/public/project.module.scss";
import { getProject } from "@/api/Project.js";
const Project = defineComponent({
  name: "Project",
  components: {
    headerTitle,
    tabTitle,
    contentComponent,
  },
  setup() {
    const height = ref(0);
    const state = reactive({
      height: 0,
      projectList: [],
    });
    getProject().then((data) => {
      state.projectList = data;
    });
    onUpdated(() => {
      state.height = height.value.offsetHeight / 100;
    });
    return () => {
      return (
        <div class={style.project} ref={height}>
          <header-title
            icon="person2"
            name="个人项目"
            englishName="Person"
            line-height={state.height}
          />
          {state.projectList.map((item) => {
            return (
              <Fragment>
                <tab-title
                  icon="project"
                  title={item.name}
                  append={{ type: 0, content: "源代码", url: item.url }}
                  style={{ "margin-bottom": "-0.1rem" }}
                />
                {item.content.map((com) => {
                  return (
                    <content-component
                      feature="project"
                      icon={com.icon}
                      title={com.title}
                      text={com.text}
                      type={com.type}
                    />
                  );
                })}
              </Fragment>
            );
          })}
          <tab-title
            icon="more"
            title="更多项目参见gitee"
            append={{
              type: 0,
              content: "</>查看更多",
              url: "https://gitee.com/Maxfengyan",
            }}
          />
        </div>
      );
    };
  },
});

export default Project;
