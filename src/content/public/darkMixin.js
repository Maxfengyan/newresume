import { reactive, watchEffect } from "vue";
import { getDark, setDark } from "@/core/auth.js";

const Dark = () => {
  const darkData = reactive({
    darkStatus: getDark() || "0",
    darkIcon: "moon",
    darkName: "夜间模式",
  });
  const handleToggleDark = () => {
    darkData.darkStatus = darkData.darkStatus === "0" ? "1" : "0";
    setDark(darkData.darkStatus);
  };
  watchEffect(() => {
    if (darkData.darkStatus === "1") {
      document.documentElement.setAttribute("data-theme", "dark-theme");
      darkData.darkIcon = "sun";
      darkData.darkName = "日照模式";
    } else {
      document.documentElement.setAttribute("data-theme", "light-theme");
      darkData.darkIcon = "moon";
      darkData.darkName = "夜间模式";
    }
  });
  return { darkData, handleToggleDark };
};

export default Dark;
