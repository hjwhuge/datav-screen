import { onMounted, onUnmounted, ref } from "vue";

export function useScreenData() {
  const userToday = ref(10000);
  const userGrowthLastDay = ref(10);
  const userGrowthLastMonth = ref(15);
  let task = null;
  const killTask = () => {
    if (task) {
      clearInterval(task);
    }
  };

  onMounted(() => {
    task = setInterval(() => {
      userToday.value = userToday.value + 1;
      userGrowthLastDay.value = userGrowthLastDay.value + 1;
      userGrowthLastMonth.value = userGrowthLastMonth.value + 1;
    }, 1000);
  });
  onUnmounted(killTask);

  return {
    userToday,
    userGrowthLastDay,
    userGrowthLastMonth,
  };
}
