import { createApp } from "vue";
import { Popup, Icon } from "vant";
import svgIcon from "@/plugin/icons/svgIcon.vue";
import App from "./App.jsx";
import "animate.css";
import "./style/index.scss";

const app = createApp(App);
app.component("svg-icon", svgIcon);
app.use(Popup);
app.use(Icon);
app.mount("#app");
