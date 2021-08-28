<template>
  <div class="header-title">
    <div class="header-title-icon">
      <svg-icon :name="icon" />
    </div>
    <div class="header-title-name">
      <span>{{ name }}</span>
      <span>{{ englishName }}</span>
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
    name: {
      type: String,
      required: true,
    },
    englishName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.header-title {
  box-sizing: border-box;
}
.header-title-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 25px;
  background: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}
.header-title-name {
  font-weight: 700;
  line-height: 22px;
  margin-left: 10px;
  display: inline-block;
  color: #000;
  & span:nth-child(1) {
    font-size: 18px;
    display: block;
  }
  & span:nth-child(2) {
    font-size: 13px;
    display: block;
    font-weight: 700;
  }
  & span:nth-child(2):first-letter {
    color: #409eff;
    font-size: 21px;
  }
}
</style>