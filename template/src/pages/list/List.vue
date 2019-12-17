<template>
  <div class="list-wrap">
    <!-- header -->
    <van-nav-bar
      title="列表页"
      left-text="返回"
      right-text="菜单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- content -->
    <van-skeleton class="custom-skeleton" :title="true" :avatar="false" :row="5" :loading="loading">
      <p class="content">列表页</p>
    </van-skeleton>
  </div>
</template>

<script>
import Vue from 'vue';
import { Skeleton } from "vant";
Vue.use(Skeleton);
export default {
  data() {
    return {
      active: 0,
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("right");
    }
  }
};
</script>

<style lang="less" scoped>
.list-wrap {
  .custom-skeleton {
    padding: 10px;
  }
  .content {
    font-size: 14px;
    background: #e5e5e5;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>