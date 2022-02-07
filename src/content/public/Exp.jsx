import { defineComponent, reactive } from "vue";
import headerTitle from "@/components/Header-title/index.jsx";
import tabTitle from "@/components/Tab-title/index.jsx";
import titleComponent from "@/components/Title/index.vue";
import contentComponent from "@/components/Content/index.vue";
import { boss, epgms, epg, ma, cams, ugms, AAA, EPGmanage, uploadfile, superplayer, waibaoPc, waibaoMobile } from "@/components/data/Exp.js";
import { getBaituExp } from "@/api/Exp.js";
import style from "@/style/public/exp.module.scss";
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
      baitu: {
        experience: [],
      },
    });
    getBaituExp().then((data) => {
      state.baitu = data;
      console.log(data);
    });
    return () => {
      return (
        <div class={style.experience}>
          <header-title icon="rocket" name="项目与工作经验" englishName="EXPERIENCE" />
          {state.baitu.componey ? <tab-title icon="package" title={state.baitu.componey} append={{ type: 1, content: state.baitu.time, url: "" }} /> : null}
          {state.baitu.experience.map((item) => {
            return item.content.map((com) => {
              return <content-component icon={com.icon} title={com.title} text={com.text} type={com.type} />;
            });
          })}
        </div>
      );
    };
  },
});

export default Exp;
