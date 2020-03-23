<template>
  <div class="edit">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Edit'
  }
</script>

<style lang="less" scoped>
  .edit {
    position: absolute;
    outline: 1px dashed #fb121c;
  }
</style>
