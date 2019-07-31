<template>
  <view class="loading">
    <image src="../../static/img/loading.gif"/>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "????..."
    }
  }
};
</script>

<style  scoped>
.loading {
  width: 100%;
  height: 40px;
  text-align: center;
}
 image {
    margin-top: 10px;
	width: 25px;
	height: 25px;
  }
</style>
