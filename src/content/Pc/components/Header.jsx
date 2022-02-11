import { defineComponent, ref } from "vue";
import HeaderInfo from "@/content/public/headerInfo.js";
import style from "@/style/pc/module/header.module.scss";
import avatar from "@/assets/avatar.png";
import resume from "@/assets/resume.png";
const Header = defineComponent({
  name: "Header",
  setup() {
    const num = ref(0);
    const { state } = HeaderInfo();
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
            <a class={style.webResume} href={state.resume}>
              <van-icon name="down" />
              强烈建议PC端点击此链接或移动端扫描二维码查看web简历
            </a>
            <span>
              <svg-icon name="GitHub" />
              <a href={state.github}>{state.github}</a>
            </span>
            <span>
              <svg-icon name="gitee2" />
              <a href={state.gitee}>{state.gitee}</a>
            </span>
            <span>
              <svg-icon name="doodle" />
              <a href={state.csdn}>CSDN blog</a>
            </span>
            <span>
              <svg-icon name="mail" />
              {state.email}
            </span>
            <span class={style.wechat}>
              <svg-icon name="wechat" />
              {state.wechat}
            </span>
          </div>
          <div class={style["header-name"]}>
            <span>{state.name}</span>
            <svg-icon name="man" />
            <div>{state.duty}</div>
          </div>
        </div>
      );
    };
  },
});
export default Header;
