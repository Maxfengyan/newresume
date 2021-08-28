<template>
  <div class="experience">
    <headertitle icon="rocket" name="项目与工作经验" englishName="EXPERIENCE" />
    <tabTitle
      style="margin-top: 10px"
      icon="package"
      title="北京百途互动股份有限公司"
      :append="{ type: 1, content: '2018-09 ~ 至今', url: '' }"
    />
    <titlecomponent name="前端开发 && Node.js后台开发" />
    <div class="project" style="margin-top: 20px">
      <contentcomponent
        v-for="item in boss"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>

    <div class="project">
      <contentcomponent
        v-for="item in epgms"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in cams"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in epg"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in ma"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in ugms"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in AAA"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in EPGmanage"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in uploadfile"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in superplayer"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <tabTitle
      style="margin-top: 10px"
      icon="package"
      title="沈阳元格信息技术有限公司"
      :append="{ type: 1, content: '2017-07 ~ 2018-08', url: '' }"
    />
    <titlecomponent name="前端开发" />
    <div class="project" style="margin-top: 20px">
      <contentcomponent
        v-for="item in waibaoPc"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
    <div class="project">
      <contentcomponent
        v-for="item in waibaoMobile"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
        :type="item.type"
      />
    </div>
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
  boss,
  epgms,
  epg,
  ma,
  cams,
  ugms,
  AAA,
  EPGmanage,
  uploadfile,
  superplayer,
  waibaoPc,
  waibaoMobile,
} from "../data/Exp.js";
export default {
  components: {
    Headertitle,
    TabTitle,
    Titlecomponent,
    Contentcomponent,
  },
  setup() {
    return {
      boss,
      epgms,
      epg,
      ma,
      cams,
      ugms,
      AAA,
      EPGmanage,
      uploadfile,
      superplayer,
      waibaoPc,
      waibaoMobile,
    };
  },
};
</script>

<style scoped lang="scss">
.experience {
  margin-top: 30px;
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
  z-index: -1;
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
.project {
  margin-top: 35px;
}
</style>