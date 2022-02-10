import { defineComponent, Fragment } from "vue";
import animateScrollTo from "animated-scroll-to";
import style from "@/style/pc/module/iconList.module.scss";
import Dark from "@/content/public/darkMixin.js";
const IconList = defineComponent({
  name: "IconList",
  setup() {
    const { darkData, handleToggleDark } = Dark();
    const returnTop = () => {
      animateScrollTo(0);
    };
    const download = () => {
      window.location.href = import.meta.env.VITE_SYSTEM_DOWNLOAD;
    };
    const toggleDark = () => {
      handleToggleDark();
    };

    return () => {
      return (
        <Fragment>
          <van-icon onClick={() => returnTop()} name="back-top" class={style.returnTop} title="回到顶部" />
          <span title={darkData.darkName} onClick={() => toggleDark()} class={style.darkModel}>
            <svg-icon name={darkData.darkIcon} />
          </span>
          <span title="下载简历" onClick={() => download()} class={style.download}>
            <svg-icon name="download2" />
          </span>
        </Fragment>
      );
    };
  },
});

export default IconList;
