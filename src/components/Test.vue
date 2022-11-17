<!-- 测试组件库中 组件使用情况 -->
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // const path = document.getElementById("taobao-logo");
  // const pathLen = path.getTotalLength(); // 6885
  // console.log(pathLen);
});
</script>

<template>
  <div class="icon-box">
    <TestComponent />
    <svg width="50" height="50" style="color: red">
      <use href="#cross"></use>
    </svg>
    <Icon prefix="" name="more" class="common-icon"></Icon>
    <Icon name="caomei" class="common-icon"></Icon>
    <!-- <SvgAnimation /> -->
    <Loading :width="100" :height="100">
      <div style="color: #58bc58; font-size: 18px">数据大屏加载中...</div>
    </Loading>
    <div style="width: 50%; background-color: #333; margin-bottom: 20px">
      <FlyBox :duration="4">
        <div>
          <div>111111</div>
          <div>222222</div>
          <div>333333</div>
          <div>444444</div>
        </div>
      </FlyBox>
    </div>
    <div style="width: 100%; background-color: #333">
      <FlyBox :duration="4">
        <div>
          <div>111111</div>
          <div>222222</div>
          <div>333333</div>
          <div>444444</div>
        </div>
      </FlyBox>
    </div>
  </div>
</template>

<style scoped>
.icon-box {
  color: green;
}
.common-icon {
  width: 50px;
  height: 50px;
  color: #58bc58;
}
</style>
