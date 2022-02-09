import { defineComponent, Fragment, reactive, ref, watch } from "vue";
import style from "@/style/pc/module/iconList.module.scss";
import animateScrollTo from "animated-scroll-to";

const IconList = defineComponent({
  name: "IconList",
  setup() {
    const state = reactive({
      darkStatus: false,
      darkIcon: "moon",
      darkName: "夜间模式",
    });
    const returnTop = () => {
      animateScrollTo(0);
    };
    const download = () => {
      window.location.href = import.meta.env.VITE_SYSTEM_DOWNLOAD;
    };
    const toggleDark = () => {
      state.darkStatus = !state.darkStatus;
    };

    watch(
      () => state.darkStatus,
      (value) => {
        if (value) {
          state.darkIcon = "sun";
          state.darkName = "日照模式";
        } else {
          state.darkIcon = "moon";
          state.darkName = "夜间模式";
        }
      }
    );
    return () => {
      return (
        <Fragment>
          <van-icon onClick={() => returnTop()} name="back-top" class={style.returnTop} title="回到顶部" />
          <span title={state.darkName}>
            <svg-icon name={state.darkIcon} class={style.darkModel} onClick={() => toggleDark()} />
          </span>
          <span title="下载简历" onClick={() => download()}>
            <svg-icon name="download" class={style.download} />
          </span>
        </Fragment>
      );
    };
  },
});

export default IconList;
