<script setup>
const props = defineProps({
  svgIcon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
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
    <ServicesWater :data="props.data" v-if="props.title == 'WATER'" />
    <ServicesInvoices v-if="props.title == 'BOOKHIS'" />
  </div>
</template>