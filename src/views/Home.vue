<script setup>
import { ref, onMounted } from "vue";
import TopHeader from "~/components/TopHeader/index.vue";
import TotalUser from "~/components/TotalUser/index.vue";
import { useScreenData } from "~/hooks/useScreenData.js";

const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
const { userToday, userGrowthLastDay, userGrowthLastMonth } = useScreenData();
</script>
<template>
  <div class="home">
    <Loading v-if="loading">
      <div class="lading-text">数据大屏加载中......</div>
    </Loading>
    <Container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator-wrapper"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="userToday"
              :growth-last-day="+userGrowthLastDay || 0"
              :growth-last-month="+userGrowthLastMonth || 0"
              ref="totalUser"
            />
          </div>
          <div class="left2">222</div>
          <div class="left3">333</div>
          <div class="left4">444</div>
          <div class="left5">555</div>
          <div class="left6">666</div>
        </div>
        <div class="right">
          <div class="right-top1">111</div>
          <div class="right-top2">222</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">111</div>
              <div class="right-left2">222</div>
              <div class="right-left3">333</div>
              <div class="right-left4">444</div>
            </div>
            <div class="right-right">
              <div class="right-right1">111</div>
              <div class="right-right2">222</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  #screen-container {
    display: flex;
    flex-direction: column;

    .header {
      height: 167px;
      margin-top: 10px;
    }

    .separator-wrapper {
      width: 100%;
      height: 10px;
      background: rgb(92, 88, 89);
      filter: blur(0px);
      backdrop-filter: blur(0px);
    }

    .center {
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);

        .left1,
        .left2,
        .left3,
        .left4,
        .left5,
        .left6 {
          padding-bottom: 20px;
        }

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;

        .right-top1 {
          height: 206px;
          margin-bottom: 20px;
        }

        .right-top2 {
          height: 48px;
          margin-bottom: 20px;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
            }

            .right-left2 {
              height: 80px;
              padding-top: 20px;
              box-sizing: border-box;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;

              .dv-border-box-8 {
                width: 100%;
                height: 100%;
                padding: 5px;
                box-sizing: border-box;
                background: rgb(66, 68, 70);
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
              }
            }

            .right-left4 {
              height: 220px;
              margin-top: 10px;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
            }

            .right-right2 {
              width: 100%;
              height: 650px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
.lading-text {
  font-size: 20px;
}
</style>
