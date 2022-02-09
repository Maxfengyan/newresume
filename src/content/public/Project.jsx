import { defineComponent, Fragment, reactive, ref, onUpdated } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import contentComponent from "@/components/Content/index.jsx";
import titleComponent from "@/components/Title/index.jsx";
import lineComponent from "@/components/Line/index.jsx";
import style from "@/style/public/project.module.scss";
import { getProject } from "@/api/Project.js";
const Project = defineComponent({
  name: "Project",
  components: {
    headerTitle,
    tabTitle,
    lineComponent,
    contentComponent,
    titleComponent,
  },
  setup() {
    const state = reactive({
      projectList: [],
    });
    getProject().then((data) => {
      state.projectList = data;
    });
    return () => {
      return (
        <div class={style.project}>
          <header-title icon="person2" name="个人项目" englishName="Person" />
          <line-component />
          {state.projectList.map((item) => {
            return (
              <Fragment>
                <tab-title icon="project" title={item.name} append={{ type: 0, content: "源代码", url: item.url }} style={{ "margin-bottom": "-0.1rem" }} />
                {item.content.map((com) => {
                  return <content-component feature="project" icon={com.icon} title={com.title} text={com.text} type={com.type} />;
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
          <title-component title-name="" />
          <content-component feature="project" icon="more" title="gitee地址:" text="点击查看" type={1} url="https://gitee.com/Maxfengyan" />
          <content-component feature="project" icon="more" title="github地址:" text="点击查看" type={1} url="https://github.com/Maxfengyan" />
        </div>
      );
    };
  },
});

export default Project;
