<template>
  <!-- <van-icon name="arrow" class="rightArrow" /> -->
  <!-- <van-icon name="arrow-left" class="leftArrow" /> -->
  <van-icon name="sort" class="sort" @click="toggle" :style="state.sortStyle" />
  <van-icon name="down" class="returnTop" @click="returnTop" />
  <rightcomponent />
  <!-- <img :src="avatar" class="avatar" /> -->
  <van-popup
    v-model:show="state.drawer"
    position="left"
    duration="0.5"
    ref="popup"
    :style="{ height: '100%', width: '100%' }"
  >
    <!-- closeable -->
    <!-- round -->
    <headercomponent />
    <leftcomponent />
  </van-popup>
</template>

<script>
import { reactive, watch, ref } from "vue";
import Headercomponent from "../Header/mobile.vue";
import Rightcomponent from "../Right/index.vue";
import Leftcomponent from "../Left/index.vue";
import avatar from "@/assets/ava.jpg";
import animateScrollTo from "animated-scroll-to";
export default {
  components: {
    Headercomponent,
    Rightcomponent,
    Leftcomponent,
  },
  setup() {
    const popup = ref();
    const contentref = ref();
    const state = reactive({
      drawer: true,
      sortStyle: {
        background: "#fff",
        color: "#000",
        transform: "rotate(90deg)",
      },
    });

    watch(
      () => state.drawer,
      (value) => {
        if (value) {
          state.sortStyle.background = "#fff";
          state.sortStyle.color = "#000";
          state.sortStyle.transform = "rotate(90deg)";
        } else {
          state.sortStyle.background = "#000";
          state.sortStyle.color = "#fff";
          state.sortStyle.transform = "rotate(270deg)";
        }
      }
    );
    const toggle = () => {
      state.drawer = !state.drawer;
    };

    const returnTop = () => {
      if (state.drawer) {
        animateScrollTo(0, {
          elementToScroll: popup.value.popupRef.value,
        });
      } else {
        animateScrollTo(0);
      }
    };
    return { state, avatar, toggle, popup, returnTop };
  },
};
</script>

<style scoped>
.avatar {
  position: fixed;
  right: 20px;
  top: 7px;
  border-radius: 50%;
  width: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
}
.rightArrow {
  font-size: 50px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 3000;
}
.leftArrow {
  font-size: 50px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 3000;
}
.sort {
  font-size: 20px;
  color: #000;
  padding: 10px;
  border-radius: 50%;
  background: #fff;
  position: fixed;
  transform: rotate(90deg);
  right: 10px;
  top: 3%;
  z-index: 3003;
  transition: all 0.5s ease-in;
  box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.7);
}
.returnTop {
  position: fixed;
  right: 10px;
  bottom: 15%;
  z-index: 3003;
  transform: rotate(180deg);
  padding: 10px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.7);
}
.returnTop:active {
  background: #000 !important;
  color: #fff !important;
}
</style>