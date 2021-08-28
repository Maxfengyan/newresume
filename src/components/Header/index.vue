<template>
  <div class="header">
    <img :src="avatar" class="header-avatar" />
    <div class="header-link">
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
    </div>
    <div class="header-name">
      <span>马丰彦</span>
      <svg-icon name="man" />
      <div>前端工程师/NodeJs后端开发</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import avatar from "@/assets/avatar.png";
export default {
  setup() {
    return {
      avatar,
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
.header-link {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-weight: bold;
  color: #dedede;
  font-size: 15px;
  span {
    margin: 5px 0;
    height: 20px;
    overflow: hidden;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
}
.gitee svg {
  font-size: 66px !important;
  margin-top: -23px;
}
.gitee a {
  margin-top: -43px;
  display: block;
  margin-left: 30px;
  background: #292929;
}
.header-name {
  color: #fff;
  float: right;
  margin-right: 20px;
  margin-top: 41px;
  span {
    font-size: 50px;
    font-family: Courier New, Courier, monospace;
    vertical-align: top;
  }
  svg {
    font-size: 50px;
  }
  div {
    margin-top: 20px;
    margin-left: -4px;
  }
}
</style>