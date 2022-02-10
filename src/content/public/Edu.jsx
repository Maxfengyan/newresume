import { defineComponent } from "vue";
import style from "@/style/public/edu.module.scss";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import lineComponent from "@/components/Line/index.jsx";
import unImg from "@/assets/logo2.png";
const Edu = defineComponent({
  name: "Edu",
  components: {
    tabTitle,
    headerTitle,
    lineComponent,
  },
  setup() {
    return () => {
      return (
        <div class={style.edu}>
          <header-title icon="book" name="教育经历" english-name="EDUCATION" />
          <line-component />
          <tab-title icon="bookmark" title="本科" append={{ type: 1, content: "2013 ~ 2017", url: "" }} />
          <div class={style.university}>
            <img src={unImg} />
            <span class={style["university-name"]}>沈阳师范大学</span>
            <div class={style.specialty}>
              <svg-icon name="cap" />
              <span>软件工程</span>
            </div>
          </div>
        </div>
      );
    };
  },
});

export default Edu;
