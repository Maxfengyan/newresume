import { createApp } from "vue";
import svgIcon from "@/plugin/icons/svgIcon.vue";
import App from "./App.vue";
import useElementUi from "./elementui";
import "./style/normalize.css";
const app = createApp(App);
app.component("svg-icon", svgIcon);
useElementUi(app); // 引用element-ui
app.mount("#app");
