<template>
  <div class="skills">
    <headertitle icon="hand" name="掌握技能" englishName="SKILLS" />
    <tabTitle
      style="margin-top: 10px"
      icon="pintu"
      title="Web前端"
      :append="{ type: 1, content: '', url: '' }"
    />
    <titlecomponent name="HTML" />
    <div class="commontext" v-for="item in HTML">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="CSS" />
    <div class="commontext" v-for="item in css">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="ECMAScript" />
    <div class="commontext" v-for="item in ECMAScript">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="DOM" />
    <div class="commontext" v-for="item in DOM">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="BOM" />
    <div class="commontext" v-for="item in BOM">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="http" />
    <div class="commontext" v-for="item in http">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="canvas/svg" />
    <div class="commontext" v-for="item in canvassvg">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="前端工程化" />
    <div class="commontext" v-for="item in engineered">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="前端框架" />
    <div class="commontext" v-for="item in frame">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>
    <titlecomponent name="杂项" />
    <div class="commontext" v-for="item in other">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <tabTitle
      style="margin-top: 10px"
      icon="cloud"
      title="后端"
      :append="{ type: 1, content: '', url: '' }"
    />

    <titlecomponent name="nodejs" />
    <div class="commontext" v-for="item in nodejs">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <titlecomponent name="其他" />
    <div class="commontext" v-for="item in others">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>

    <tabTitle
      style="margin-top: 10px"
      icon="chilun"
      title="其他"
      :append="{ type: 1, content: '', url: '' }"
    />

    <div class="commontext" v-for="item in realOther">
      <svg-icon name="star" />
      <span>{{ item }}</span>
    </div>
    <div class="line"></div>
    <div class="round"></div>
  </div>
</template>

<script>
import Headertitle from "../Header-title/index.vue";
import Titlecomponent from "../Title/index.vue";
import TabTitle from "../Tab-title/index.vue";
import {
  HTML,
  css,
  ECMAScript,
  DOM,
  BOM,
  http,
  canvassvg,
  engineered,
  frame,
  other,
  nodejs,
  others,
  realOther,
} from "../data/Skill";
export default {
  components: {
    Headertitle,
    TabTitle,
    Titlecomponent,
  },
  setup() {
    return {
      HTML,
      css,
      ECMAScript,
      DOM,
      BOM,
      http,
      canvassvg,
      engineered,
      frame,
      other,
      nodejs,
      others,
      realOther,
    };
  },
};
</script>

<style scoped lang="scss">
.skills {
  position: relative;
  width: 94%;
  padding-bottom: 20px;
}
.line {
  width: 3px;
  background: #292929;
  position: absolute;
  height: calc(100% - 36px);
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
  bottom: 7px;
}
.commontext {
  word-break: break-all;
  font-size: 14px;
  line-height: 1.2;
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