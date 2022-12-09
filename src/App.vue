<script setup>
import MTable from './components/MTable.jsx'
import MTableColumn from './components/MTableColumn.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
  },
  {
    date: '2016-05-02',
    name: 'Lily',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
  },
  {
    date: '2016-05-01',
    name: 'John',
  },
]

const clickDestroy = (index) => {
  console.log('index=>>>>>>>', JSON.stringify(index))
}
</script>

<template>
  <MTable :data="tableData">
    <MTableColumn prop="date" label="Date"/>
    <MTableColumn prop="name" label="Name"/>
    <MTableColumn label="操作">
      <template #default="{ index }">
        <button type="button" @click="clickDestroy(index)">删除</button>
      </template>
    </MTableColumn>
  </MTable>
</template>
