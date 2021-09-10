import { createApp } from "vue";
import { Popup, Icon } from "vant";
import svgIcon from "@/plugin/icons/svgIcon.vue";
import App from "./App.vue";
import "nprogress/nprogress.css"; // Progress 进度条样式
import "./style/normalize.css";
import "animate.css";
import "./style/print.css";
import "./style/style.css";

const app = createApp(App);
app.component("svg-icon", svgIcon);
app.use(Popup);
app.use(Icon);
app.mount("#app");
