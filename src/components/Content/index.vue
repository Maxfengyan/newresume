<template>
  <div class="content" v-if="type !== 3">
    <svg-icon :name="icon" />
    <span
      class="content-title"
      :style="{
        'font-size': !!parseInt(title) ? '17px' : '15px',
        color: !!parseInt(title) ? '#0a7df4' : '#409eff',
      }"
      >{{ title }}</span
    >
    <span class="content-text" v-if="type === 0">{{ text }}</span>
    <a :href="text" v-if="type === 1">点击查看</a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  // margin-left: 75px;
  margin-top: 15px;
  padding-left: 15px;
  // text-indent: -6%;
  word-break: break-all;

  svg {
    font-size: 22px;
    margin-right: 6px;
  }
  a {
    color: #409eff;
  }
}
span:first-letter {
  color: red !important;
}
.content-title {
  color: #409eff;
  font-size: 15px;
  font-weight: bold;
}
.content-text {
  font-size: 14px;
  line-height: 1.2;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.65);
}
</style>