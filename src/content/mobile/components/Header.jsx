import { defineComponent, reactive } from "vue";
import HeaderInfo from "@/content/public/headerInfo.js";
import style from "@/style/mobile/module/header.module.scss";
import avatar from "@/assets/ava.jpg";
import erweima from "@/assets/avatar1.jpg";
import { ImagePreview } from "vant";
const Header = defineComponent({
  name: "Header",
  emits: ["closeIcon"],
  setup(props, { emit }) {
    const { state } = HeaderInfo();
    const enter = (num) => {
      if (num == 0) {
        window.location.href = state.gitee;
      } else if (num == 1) {
        window.location.href = state.github;
      } else if (num == 2) {
        window.location.href = state.csdn;
      } else {
        emit("closeIcon", false);
        ImagePreview({
          images: [erweima],
          closeable: true,
          showIndex: false,
          onClose() {
            emit("closeIcon", true);
          },
        });
      }
    };
    return () => {
      return (
        <div class={style.header}>
          <img src={avatar} class={style["header-avatar"]} />
          <div class={style["header-name"]}>
            <span>马丰彦</span>
            <svg-icon name="man" />
            <div>前端开发/NodeJs后端开发</div>
          </div>
          <div class={style["header-link"]}>
            <svg-icon name="GitHub" onClick={() => enter(1)} />
            <svg-icon name="gitee2" onClick={() => enter(0)} />
            <svg-icon name="doodle" onClick={() => enter(2)} />
            <svg-icon name="wechat" onClick={() => enter(3)} />
          </div>
        </div>
      );
    };
  },
});

export default Header;
