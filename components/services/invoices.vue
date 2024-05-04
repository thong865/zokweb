<script setup>
const route = useRoute();
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const {
  pending,
  data: bookInv,
  error,
} = await useLazyFetch(`/api/booking/${route.query.rm_no}`);
watch(bookInv, (newBookInv) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<style scoped>
.flex {
  display: flex;
}
</style>

<template>
  <div>
    <el-card shadow="never">
      {{ bookInv }} {{ pending }} {{ error }}
      <el-card shadow="never">
        <div class="flex">
          <div>
            <el-image
              style="width: 62px; height: 62px"
              :src="`/icons/bill.svg`"
              fit="fill"
            />
          </div>
          <div>
            <p>ເລກທີຈອງ: {{ bookInv?.data?.bookRef }}</p>
            <p>{{ props.data }}</p>
          </div>
        </div>
      </el-card>
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card shadow="never">
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>