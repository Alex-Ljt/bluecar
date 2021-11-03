<template>
  <div>
<div>当前页面不存在，请检查网址是否正确</div>
    <div><router-link to="/">返回首页</router-link></div>
  </div>
</template>
<!-- 也可以使用<a href="#/">返回首页<a>，不过用上面的更高级，更好 -->
<script lang="ts">
export default {
name: "NotFound"
}
</script>

<style lang="scss" scoped>

</style>