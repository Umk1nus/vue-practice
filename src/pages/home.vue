<template>
  <div class="md-body">
    <h1>Home</h1>
    <div class="container-card">
      <div class="card_wrapper" v-for="card in cards" :key="card.id">
        <Card :title="card.title" :description="card.description" :lvl="`${card.lvl}`" :img="card.img">
          <img :src="card.img" alt="">
        </Card>
      </div>
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
          img: require('@/assets/img/archer.png'),
          lvl: 4
        },
        {
          id: 2,
          title: 'barbarian',
          description: 'barbarian barbarian barbarian',
          img: require('@/assets/img/barbarian.png'),
          lvl: 5
        },
        {
          id: 3,
          title: 'giant',
          description: 'giant giant giant',
          img: require('@/assets/img/giant.png'),
          lvl: 1
        },
        {
          id: 4,
          title: 'wizard',
          description: 'wizard wizard wizard',
          img: require('@/assets/img/wizard.png'),
          lvl: 8
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .container-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>