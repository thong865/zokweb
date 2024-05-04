<template>
  <div>
    <!-- {{ room }} -->
    <el-descriptions
      class="margin-top"
      title="ລາຍລະອຽດຫ້ອງ"
      :column="2"
      :size="size"
      border
    >
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            ຫ້ອງເບີ
          </div>
        </template>
        {{ room?.rmNo }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <location />
            </el-icon>
            ລາຄາ/ເດືອນ
          </div>
        </template>
        {{ room?.price }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            ວັນທີ.ເດືອນ.ປີ ເຂົ້າພັກ
          </div>
        </template>
        {{ room?.bookDate }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            ວັນທີ.ເດືອນ.ປີ ບິນລ່າສຸດ
          </div>
        </template>
        {{ room?.lastDueDate }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            ວັນທີ.ເດືອນ.ປີຄົບກຳນົດ
          </div>
        </template>
        {{ room?.nextDueDate }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <tickets />
            </el-icon>
            ສະຖານະ
          </div>
        </template>
        <el-tag size="small">{{ room?.stat }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <office-building />
            </el-icon>
            ໝາຍເຫດ:
          </div>
        </template>
      </el-descriptions-item>
    </el-descriptions>
    <el-tabs type="card">
      <el-tab-pane label="ລູກຄ້າ">
        <div class="statistic-card">
          <el-statistic :value="98500">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                ລູກຄ້າປະຈຸບັນ
                <el-tooltip
                  effect="dark"
                  content="Number of users who logged into the product in one day"
                  placement="top"
                >
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="x.srCode" v-for="(x, i) in room?.services" :key="i">
        <ServicesCard :svgIcon="x.srCode" :title="x.srCode" :data="x" />
      </el-tab-pane>
      <el-tab-pane label="ປະຫວັດບິນ">
        <ServicesCard svgIcon="" title="BOOKHIS" data="" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
<script setup>
const route = useRoute();
const { pending, data: room } = await useLazyAsyncData("RoomDetail", () =>
  $fetch(`/api/room/${route.query.rm_no}`)
);

//   const deleteRow = (index: number) => {
//     tableData.value.splice(index, 1)
//   }

//   const onAddItem = () => {
//     now.setDate(now.getDate() + 1)
//     tableData.value.push({
//       date: dayjs(now).format('YYYY-MM-DD'),
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles',
//       zip: 'CA 90036',
//     })
//   }
</script>
  