<script setup>
const props = defineProps({
  index: {
    type: Object
  },
  prop: {
    type: String,
    default: '0'
  },
  label: {
    type: String,
    default: '0'
  },
})
</script>

<template>
    <slot :index="index"/>
</template>
