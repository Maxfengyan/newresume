import { defineComponent } from "vue";
import style from "@/style/public/edu.module.scss";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import unImg from "@/assets/un.jpg";
const Edu = defineComponent({
  name: "Edu",
  components: {
    tabTitle,
    headerTitle,
  },
  setup() {
    return () => {
      return (
        <div class={style.edu}>
          <header-title icon="book" name="教育经历" englishName="EDUCATION" />
          <tab-title icon="bookmark" title="本科" append={{ type: 1, content: "2013 ~ 2017", url: "" }} />
          <div class={style.university}>
            <img src={unImg} />
            <span class={style["university-name"]}>沈阳师范大学</span>
            <div class={style.specialty}>
              <svg-icon name="edu" />
              <span>软件工程</span>
            </div>
          </div>
          <div class={style.line}></div>
          <div class={style.round}></div>
        </div>
      );
    };
  },
});

export default Edu;
