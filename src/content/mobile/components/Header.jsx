import { defineComponent, ref, reactive } from "vue";
import style from "@/style/mobile/module/header.module.scss";
import avatar from "@/assets/ava.jpg";
import erweima from "@/assets/avatar.png";
import { ImagePreview, Dialog } from "vant";
const Header = defineComponent({
  name: "Header",
  setup() {
    const state = reactive({
      github: "https://github.com/Maxfengyan",
      mail: "18624443327@163.com",
      wechat: "18624443327",
    });
    const enter = (num) => {
      if (num == 0) {
        window.location.href = window.location.href =
          import.meta.env.VITE_SYSTEM_DOWNLOAD;
      } else if (num == 1) {
        window.location.href = state.github;
      } else if (num == 2) {
        Dialog({ message: state.mail });
      } else {
        ImagePreview([erweima]);
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
            <svg-icon name="download2" onClick={() => enter(0)} />
            <svg-icon name="mail" onClick={() => enter(2)} />
            <svg-icon name="wechat" onClick={() => enter(3)} />
          </div>
        </div>
      );
    };
  },
});

export default Header;
