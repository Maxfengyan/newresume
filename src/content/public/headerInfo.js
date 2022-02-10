import { reactive } from "vue";
import { getBasicInfo } from "@/api/Me.js";
const HeaderInfo = () => {
  const state = reactive({
    resume: "",
    gitee: "",
    github: "",
    email: "",
    wechat: "",
    name: "",
    duty: "",
    csdn: "",
  });
  getBasicInfo().then((data) => {
    state.resume = data.resume;
    state.gitee = data.gitee;
    state.github = data.github;
    state.email = data.email;
    state.wechat = data.wechat;
    state.name = data.name;
    state.duty = data.duty;
    state.csdn = data.csdn;
  });

  return { state };
};

export default HeaderInfo;
