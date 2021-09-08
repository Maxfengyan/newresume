<template>
  <div class="aboutus">
    <headertitle icon="aboutus" name="关于自己" englishName="ABOUTUS" />
    <tabTitle
      style="margin-top: 10px; margin-bottom: 25px"
      icon="message"
      title="英语能力"
      :append="{ type: 1, content: '', url: '' }"
    />
    <div class="commontext" v-for="item in language">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>
    <!-- <el-progress
      type="dashboard"
      :percentage="80"
      style="position: absolute; right: 35px; top: 108px"
    >
      <template #default="{ percentage }">
        <span class="percentage-label">CET4: 430</span>
      </template>
    </el-progress> -->

    <tabTitle
      style="margin-top: 30px"
      icon="info"
      title="基本信息"
      :append="{ type: 1, content: '', url: '' }"
    />
    <div class="commontext" v-for="item in info">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <tabTitle
      style="margin-top: 20px"
      icon="pingjia"
      title="自我评价"
      :append="{ type: 1, content: '', url: '' }"
    />
    <div class="commontext" v-for="item in pingjia">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>
    <div class="line"></div>
    <div class="round"></div>
  </div>
</template>

<script>
import Headertitle from "../Header-title/index.vue";
import TabTitle from "../Tab-title/index.vue";
import Titlecomponent from "../Title/index.vue";
import { language, info, pingjia } from "../data/aboutus";
export default {
  components: {
    Headertitle,
    TabTitle,
    Titlecomponent,
  },
  setup() {
    return { language, info, pingjia };
  },
};
</script>

<style lang="scss">
.aboutus {
  position: relative;
  width: 94%;
}
.el-progress-bar__inner {
  background-color: #198aff !important;
}
.line {
  width: 3px;
  background: #292929;
  position: absolute;
  height: calc(100% - 12px);
  top: 19px;
  left: 20px;
  z-index: 1;
}

.round {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #292929;
  margin-left: 14px;
  position: absolute;
  z-index: 1;
  bottom: -9px;
}
.commontext {
  word-break: break-all;
  font-size: 14px;
  line-height: 1.8 !important;
  // line-height: 1.2;
  margin: 10px 0 10px 55px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.65);
  svg {
    font-size: 22px;
    margin-right: 5px;
    vertical-align: sub;
  }
}
</style>