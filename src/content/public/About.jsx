import { defineComponent, Fragment, reactive, ref } from "vue";
import style from "@/style/public/about.module.scss";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import contentComponent from "@/components/Content/index.jsx";
import titleComponent from "@/components/Title/index.jsx";
import lineComponent from "@/components/Line/index.jsx";
import { getMe } from "@/api/me.js";
const About = defineComponent({
  name: "About",
  components: {
    headerTitle,
    contentComponent,
    titleComponent,
    lineComponent,
    tabTitle,
  },
  setup() {
    const state = reactive({
      myList: [],
    });
    getMe().then((data) => {
      state.myList = data;
    });
    return () => {
      return (
        <div class={style.aboutus}>
          <header-title icon="aboutus" name="关于自己" englishName="ABOUTUS" />
          <line-component />
          {state.myList.map((item) => {
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

export default About;
