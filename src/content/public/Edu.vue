<template>
  <div class="edu">
    <headertitle icon="book" name="教育经历" englishName="EDUCATION" />
    <tabTitle
      style="margin-top: 10px"
      icon="bookmark"
      title="本科"
      :append="{ type: 1, content: '2013 ~ 2017', url: '' }"
    />
    <div class="university">
      <img :src="unImg" />
      <span class="university-name">沈阳师范大学</span>
      <div class="specialty">
        <svg-icon name="edu" />
        <span>软件工程</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="round"></div>
  </div>
</template>

<script>
import Headertitle from "../Header-title/index.vue";
import TabTitle from "../Tab-title/index.vue";
import unImg from "@/assets/un.jpg";
export default {
  components: {
    Headertitle,
    TabTitle,
  },
  setup() {
    return {
      unImg,
    };
  },
};
</script>

<style scoped lang="scss">
.edu {
  position: relative;
  width: 94%;
}
.line {
  width: 3px;
  background: #292929;
  position: absolute;
  height: calc(100% - 19px);
  top: 19px;
  left: 20px;
  z-index: 1;
}
.university {
  margin-left: 52px;
  margin-top: 11px;
  img {
    width: 50px;
    vertical-align: middle;
    margin-right: 7px;
  }
}
.university-name {
  font-size: 25px;
  font-weight: bold;
  color: #484848;
}
.specialty {
  margin-left: 9px;
  margin-top: 9px;
  svg {
    margin-right: 6px;
    font-size: 30px;
  }
}
.round {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #292929;
  margin-left: 14px;
  position: absolute;
  z-index: 1;
}
</style>