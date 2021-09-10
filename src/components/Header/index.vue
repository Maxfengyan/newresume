<template>
  <div class="header">
    <img :src="avatar" class="header-avatar" @click="showEgg" />
    <img :src="resume" class="header-resume" />
    <div class="header-link">
      <span class="webResume">
        <van-icon name="down" />建议扫描右侧二维码查看完整web端简历</span
      >
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
      <div>前端开发/NodeJs后端开发</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import avatar from "@/assets/avatar.png";
import resume from "@/assets/resume.png";
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
      resume,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #292929;
  height: 180px;
  overflow: hidden;
}
.header-avatar {
  width: 140px;
  margin: 20px;
  border-radius: 5px;
  float: left;
}
.header-resume {
  width: 140px;
  margin: 20px;
  border-radius: 5px;
  float: left;
  display: none;
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
.webResume {
  display: none;
  i {
    transform: rotate(77deg);
    margin-right: 16px;
  }
}
</style>