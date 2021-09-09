<template>
  <div class="header">
    <img :src="avatar" class="header-avatar" />
    <div class="header-name">
      <span>马丰彦</span>
      <svg-icon name="man" />
      <div>前端工程师/NodeJs后端开发</div>
    </div>
    <div class="header-link">
      <svg-icon name="GitHub" @click="enter(1)" />
      <svg-icon name="mail" @click="enter(2)" />
      <svg-icon name="wechat" @click="enter(3)" />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import avatar from "@/assets/ava.jpg";
import erweima from "@/assets/avatar.png";
import { ImagePreview, Dialog } from "vant";
export default {
  setup() {
    const state = reactive({
      github: "https://github.com/Maxfengyan",
      mail: "18624443327@163.com",
      wechat: "18624443327",
    });

    const enter = (num) => {
      if (num == 1) {
        window.location.href = state.github;
      } else if (num == 2) {
        Dialog({ message: state.mail });
      } else {
        ImagePreview([erweima]);
      }
    };
    return {
      avatar,
      enter,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #292929;
  height: 25%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header-avatar {
  width: 85px;
  border-radius: 50%;
  box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.4);
}
.header-name {
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  div {
    margin-top: 15px;
  }
}
.header-link {
  position: absolute;
  left: 14px;
  bottom: 0;
  display: flex;
  height: 72%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 30px;
  svg {
    font-size: 20px;
  }
}
</style>
<style>
.van-image-preview {
  z-index: 9999 !important;
}
</style>