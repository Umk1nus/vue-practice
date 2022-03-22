<template>
  <div v-if="item">
    <h1>{{item.title}}</h1>
  </div>
</template>

<script>
import items from '@/seeders/items'
export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const card = items.find(el => el.alias === alias)
    this.item = card
  }
}
</script>

<style>

</style>