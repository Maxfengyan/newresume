<template>
  <div class="tab-title">
    <div class="tab-title-icon">
      <svg-icon :name="icon" />
    </div>
    <div class="tab-title-content">
      <span>{{ title }}</span>
      <div v-if="append.type === 1">{{ append.content }}</div>
      <a v-if="append.type === 0" :href="append.url">{{ append.content }}</a>
    </div>
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
    append: {
      type: Object,
      default: {
        type: 1,
        content: "",
        url: "",
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-title-content {
  background-color: #292929;
  float: left;
  color: #fff;
  padding: 5px;
  border-radius: 8px;
  font-size: 14px;
  margin-left: -10px;
  padding-left: 26px;
  width: 100%;
  position: relative;
  div {
    display: inline-block;
    position: absolute;
    right: 14px;
  }
  a {
    background: #fff;
    color: #000;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 12px;
    float: right;
    margin-right: 2px;
    text-decoration: none;
  }
  a:hover {
    background: #198aff;
    color: #fff;
  }
}
.tab-title {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.tab-title-icon {
  z-index: 10;
  flex-shrink: 0;
  width: 35px !important;
  height: 35px !important;
  float: left;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #198aff;
  svg {
    font-size: 20px;
  }
}
</style>