<template>
  <div class="page">
    <headercomponent class="animated fadeInDown" />
    <leftcomponent class="animated fadeInLeft" />
    <rightcomponent class="animated fadeInRight" />
    <div class="EasterEgg">
      Any application that can be written in JavaScript, will eventually be
      written in JavaScript.
    </div>
  </div>
</template>

<script>
import Headercomponent from "../Header/index.vue";
import Leftcomponent from "../Left/index.vue";
import Rightcomponent from "../Right/index.vue";
export default {
  components: {
    Headercomponent,
    Leftcomponent,
    Rightcomponent,
  },
};
</script>

<style lang="scss">
.page {
  width: 1100px;
  margin: 16px auto;
  box-shadow: 0 2px 12px 0 #636161;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
}
</style>