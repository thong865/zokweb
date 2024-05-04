<template>
    <el-table :data="rooms" style="width: 100%" @cell-dblclick:="dbSelect(row)" >
      <el-table-column fixed prop="rmNo" label="ຫ້ອງເບີ" width="150" />
      <el-table-column prop="bookDate" label="ວ.ດ.ປ ເຂົ້າພັກ" width="150" />
      <el-table-column prop="lastDueDate" label="ວ.ດ.ປ" width="150" />
      <el-table-column prop="nextDueDate" label="ວ.ດ.ປ" width="150" />
      <el-table-column prop="nextDueDate" label="ນ້ຳປະປາ" width="150" />
      <el-table-column prop="nextDueDate" label="ໄຟຟ້າ" width="150" />
      <el-table-column prop="price" label="ລາຄາ(ເດືອນ)" width="150" />
      <el-table-column prop="stat" label="ສະຖານະ" width="150" />
      
    </el-table>
  </template>
  
  <script setup>
  const { pending, data: rooms } = await useLazyAsyncData('listRooms', () => $fetch('/api/rooms'))

  const dbSelect = (val)=> {
    console.log(val)
  }
  
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
  