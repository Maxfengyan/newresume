<template>
  <div class="title">{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
  color: #409eff;
  font-weight: bold;
  margin: 19px 0 19px 54px;
}
</style>