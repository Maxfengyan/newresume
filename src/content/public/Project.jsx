import { defineComponent, Fragment, reactive } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import contentComponent from "@/components/Content/index.jsx";
import titleComponent from "@/components/Title/index.jsx";
import lineComponent from "@/components/Line/index.jsx";
import HeaderInfo from "./headerInfo";
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
    const { state } = HeaderInfo();
    const data = reactive({
      projectList: [],
    });
    getProject().then((res) => {
      data.projectList = res;
    });
    return () => {
      return (
        <div class={style.project}>
          <header-title icon="person2" name="个人项目" englishName="Person" />
          <line-component />
          {data.projectList.map((item) => {
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
            title="更多项目详见"
            append={{
              type: 0,
              content: "</>查看更多",
              url: state.gitee,
            }}
          />
          <title-component title-name="" />
          <content-component feature="project" icon="gitee2" title="gitee地址: " type={1} text={state.gitee} />
          <content-component feature="project" icon="1github" title="github地址: " type={1} text={state.github} />
        </div>
      );
    };
  },
});

export default Project;
