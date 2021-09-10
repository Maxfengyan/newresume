<template>
  <nprogressomponent />
  <div class="page">
    <headercomponent class="animated fadeInDown" />
    <leftcomponent class="animated fadeInLeft" />
    <rightcomponent class="animated fadeInRight" />
    <div class="EasterEgg">
      Any application that can be written in JavaScript, will eventually be
      written in JavaScript.
    </div>
    <van-icon
      name="back-top"
      class="returnTop"
      @click="returnTop"
      title="回到顶部"
    />
    <div class="download" title="下载简历">
      <svg-icon name="download" />
    </div>
  </div>
</template>

<script>
import Headercomponent from "../Header/index.vue";
import Leftcomponent from "../Left/index.vue";
import Rightcomponent from "../Right/index.vue";
import animateScrollTo from "animated-scroll-to";
import Nprogressomponent from "../Nprogress/index.vue";
export default {
  components: {
    Headercomponent,
    Leftcomponent,
    Rightcomponent,
    Nprogressomponent,
  },
  setup() {
    const returnTop = () => {
      animateScrollTo(0);
    };
    return { returnTop };
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 1100px;
  margin: 16px auto;
  box-shadow: 0 2px 12px 0 #636161;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
}
.returnTop {
  position: fixed;
  right: 2%;
  bottom: 3%;
  z-index: 3003;
  // transform: rotate(180deg);
  padding: 10px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;
  font-weight: bold;
}
.returnTop:active {
  background: #000 !important;
  color: #fff !important;
}
.returnTop:hover {
  background: rgba(255, 255, 255, 0.1);
}
.download {
  font-size: 25px;
  position: fixed;
  background: #fff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
  left: 5px;
  top: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.download:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>