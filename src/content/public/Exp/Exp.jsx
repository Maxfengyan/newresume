import { defineComponent, Fragment, onUpdated, reactive, ref } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import titleComponent from "@/components/Title/index.jsx";
import contentComponent from "@/components/Content/index.jsx";
import style from "@/style/public/exp.module.scss";
import getContent from "./handleRequest.js";
const Exp = defineComponent({
  name: "Exp",
  components: {
    headerTitle,
    tabTitle,
    titleComponent,
    contentComponent,
  },
  setup() {
    const state = reactive({
      componeyList: [],
      height: 0,
    });
    const height = ref(0);

    getContent().then((res) => {
      state.componeyList = res;
    });
    onUpdated(() => {
      state.height = height.value.offsetHeight / 100;
    });
    return () => {
      return (
        <div class={style.experience} ref={height}>
          <header-title
            icon="rocket"
            name="项目与工作经验"
            english-name="EXPERIENCE"
            line-height={state.height}
          />
          {state.componeyList.map((item) => {
            return (
              <Fragment>
                <tab-title
                  icon="package"
                  title={item.componey}
                  append={{ type: 1, content: item.time, url: "" }}
                />
                <title-component title-name={item.duty} componey={item.id} />
                {item.experience.map((sub, sequence) => {
                  return sub.content.map((com, index) => {
                    let title =
                      index === 0 ? sequence + 1 + ". " + com.title : com.title;
                    return (
                      <content-component
                        icon={com.icon}
                        title={title}
                        text={com.text}
                        type={com.type}
                      />
                    );
                  });
                })}
              </Fragment>
            );
          })}
        </div>
      );
    };
  },
});

export default Exp;
