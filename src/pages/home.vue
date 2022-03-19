<template>
  <div class="md-body">
    <h1>Home</h1>
    <div class="card_wrapper" v-for="card in cards" :key="card.id">
      <Card :title="card.title" :description="card.description" :lvl="`${card.lvl}`"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/UI/Card'
export default {
  components:{Card},
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'archer',
          description: 'archer archer archer',
          lvl: 4
        },
        {
          id: 2,
          title: 'barbarian',
          description: 'barbarian barbarian barbarian',
          lvl: 5
        },
        {
          id: 3,
          title: 'giant',
          description: 'giant giant giant',
          lvl: 1
        },
        {
          id: 4,
          title: 'wizard',
          description: 'wizard wizard wizard',
          lvl: 8
        }
      ]
    }
  }
}
</script>

<style>

</style>