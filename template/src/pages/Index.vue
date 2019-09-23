<template>
  <div class="index-wrap">
    <!-- nav -->
    <van-nav-bar title="首页" />
    <!-- content -->
    <div class="content">
      <van-button type="primary" size="normal" round @click="pushToList">PUSH TO LIST PAGE</van-button>
    </div>
    <!-- tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
      <van-tabbar-item icon="search">标签2</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    pushToList() {
      this.$router.push({
        name: "List"
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