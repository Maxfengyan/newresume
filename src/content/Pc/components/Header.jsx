import { defineComponent, ref } from "vue";
import style from "@/style/pc/module/header.module.scss";
import avatar from "@/assets/avatar.png";
import resume from "@/assets/resume.png";
const Header = defineComponent({
  name: "Header",
  setup() {
    const num = ref(0);
    const showEgg = () => {
      num.value = num.value + 1;
      if (num.value === 5) {
        document.querySelector(".EasterEgg").style.opacity = "1";
        num.value = 0;
      }
    };
    return () => {
      return (
        <div class={style.header}>
          <img src={avatar} class={style["header-avatar"]} onClick={() => showEgg()} />
          <img src={resume} class={style["header-resume"]} />
          <div class={style["header-link"]}>
            <span class={style.webResume}>
              <van-icon name="down" />
              建议扫描右侧二维码查看完整web端简历(PC/移动均可)
            </span>
            <span>
              <svg-icon name="GitHub" />
              <a href="https://github.com/Maxfengyan">https://github.com/Maxfengyan</a>
            </span>
            <span class={style.gitee}>
              <svg-icon name="gitee" />
              <a href="https://gitee.com/Maxfengyan">https://gitee.com/Maxfengyan</a>
            </span>
            <span>
              <svg-icon name="mail" />
              18624443327@163.com
            </span>
            <span>
              <svg-icon name="wechat" />
              mafengyanxx
            </span>
          </div>
          <div class={style["header-name"]}>
            <span>马丰彦</span>
            <svg-icon name="man" />
            <div>前端开发/NodeJs后端开发</div>
          </div>
        </div>
      );
    };
  },
});
export default Header;
