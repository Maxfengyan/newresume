<template>
  <div class="page">
    <headercomponent class="animated fadeInDown" />
    <leftcomponent class="animated fadeInLeft" />
    <rightcomponent class="animated fadeInRight" />
    <div class="EasterEgg">
      Any application that can be written in JavaScript, will eventually be
      written in JavaScript.
    </div>
    <van-icon name="down" class="returnTop" @click="returnTop" />
  </div>
</template>

<script>
import Headercomponent from "../Header/index.vue";
import Leftcomponent from "../Left/index.vue";
import Rightcomponent from "../Right/index.vue";
import animateScrollTo from "animated-scroll-to";
export default {
  components: {
    Headercomponent,
    Leftcomponent,
    Rightcomponent,
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
  transform: rotate(180deg);
  padding: 10px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;
}
.returnTop:active {
  background: #000 !important;
  color: #fff !important;
}
</style>