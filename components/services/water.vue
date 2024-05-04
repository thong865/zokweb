<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
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
      <div class="flex">
        <div>
          <el-image
            style="width: 62px; height: 62px"
            :src="`/icons/WATER.svg`"
            fit="fill"
          />
        </div>
        <div>
          <h4>ນ້ຳປະປາ</h4>
          <p>ເລກຜູ້ໃຊ້: {{ props.data?.srBillNo }}</p>
          <p>{{ props.data }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>