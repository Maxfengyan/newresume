<template>
  <div class="header">
    <img :src="avatar" class="header-avatar" @click="showEgg" />
    <!-- <div class="header-link">
      <span
        ><svg-icon name="GitHub" /><a href="https://github.com/Maxfengyan"
          >https://github.com/Maxfengyan</a
        ></span
      >
      <span class="gitee"
        ><svg-icon name="gitee" /><a href="https://gitee.com/Maxfengyan"
          >https://gitee.com/Maxfengyan</a
        ></span
      >
      <span><svg-icon name="mail" />18624443327@163.com</span>
      <span><svg-icon name="wechat" />mafengyanxx</span>
    </div> -->
    <!-- <div class="header-name">
      <span>马丰彦</span>
      <svg-icon name="man" />
      <div>前端工程师/NodeJs后端开发</div>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import avatar from "@/assets/avatar.png";
export default {
  setup() {
    const num = ref(0);
    const showEgg = () => {
      num.value = num.value + 1;
      if (num.value === 5) {
        document.querySelector(".EasterEgg").style.opacity = "1";
        num.value = 0;
      }
    };
    return {
      avatar,
      num,
      showEgg,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #292929;
  height: 180px;
}
.header-avatar {
  width: 140px;
  margin: 20px;
  border-radius: 5px;
  float: left;
}
</style>