<template>
  <div class="index-wrap">
    <!-- nav -->
    <van-nav-bar :title="title" />
    <!-- content -->
    <div class="content">
      <van-button type="primary" size="normal" round @click="pushToList">PUSH TO LIST PAGE</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:"首页"
    };
  },

  methods: {
    pushToList() {
      this.$router.push({
        path: "/list"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.index-wrap {
  .content {
    padding: 10px;
    button{
      width:100%;
    }
  }
}
</style>