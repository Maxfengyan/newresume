<template>
  <div class="person">
    <headertitle icon="person2" name="个人项目" englishName="Person" />
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="vue3-element-template-vite"
      :append="{
        type: 0,
        content: '</>源代码',
        url: 'https://gitee.com/Maxfengyan/vue3-admin-template-vite',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in vue3Template"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="visual-drag"
      :append="{
        type: 0,
        content: '</>源代码',
        url: 'https://gitee.com/Maxfengyan/visual-drag',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in visualDrag"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="aconsole"
      :append="{
        type: 0,
        content: '</>源代码',
        url: 'https://gitee.com/Maxfengyan/m-console',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in aconsole"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="LemonTodo"
      :append="{
        type: 0,
        content: '</>源代码',
        url: 'https://gitee.com/Maxfengyan/pc-todolist',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in LemonTodo"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="electronexcel"
      :append="{
        type: 0,
        content: '</>源代码',
        url: 'https://gitee.com/Maxfengyan/electronexcel',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in electronexcel"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="video"
      :append="{
        type: 1,
        content: '略',
        url: 'https://gitee.com/Maxfengyan/electronexcel',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in video"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="project"
      title="resume"
      :append="{
        type: 0,
        content: '</>源代码',
        url: 'https://gitee.com/Maxfengyan/electronexcel',
      }"
    />
    <div class="project">
      <contentcomponent
        v-for="item in resume"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="more"
      title="更多项目参见gitee"
      :append="{
        type: 0,
        content: '</>查看更多',
        url: 'https://gitee.com/Maxfengyan',
      }"
    />
    <contentcomponent
      icon="about"
      title="gitee地址："
      text="https://gitee.com/Maxfengyan"
      :type="1"
    />
    <div class="line"></div>
    <div class="round"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import Headertitle from "../Header-title/index.vue";
import TabTitle from "../Tab-title/index.vue";
import Titlecomponent from "../Title/index.vue";
import Contentcomponent from "../Content/index.vue";
import {
  vue3Template,
  visualDrag,
  aconsole,
  LemonTodo,
  electronexcel,
  video,
  resume,
} from "../data/Person.js";
export default {
  components: {
    Headertitle,
    TabTitle,
    Titlecomponent,
    Contentcomponent,
  },
  setup() {
    return {
      vue3Template,
      visualDrag,
      aconsole,
      LemonTodo,
      electronexcel,
      video,
      resume,
    };
  },
};
</script>

<style scoped lang="scss">
.person {
  margin-top: 30px;
  position: relative;
  padding-bottom: 5px;
  width: 94%;
}
.line {
  width: 3px;
  background: #292929;
  position: absolute;
  height: calc(100% - 10px);
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
  bottom: -11px;
}
</style>