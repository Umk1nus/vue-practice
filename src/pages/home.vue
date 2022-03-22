<template>
  <div class="md-body">
    <h1>Home</h1>
    <div class="container-card">
      <div class="card_wrapper" v-for="card in cards" :key="card.id">
        <Card :title="card.title" :description="card.description" :lvl="`${card.lvl}`" :img="card.img">
          <img class="card-img" :src="card.img" alt="">
        </Card>
      </div>
    </div>

  </div>
</template>

<script>
import Card from '@/components/UI/Card'
import cards from '@/seeders/items'
export default {
  components:{Card},
  data() {
    return {
      cards: cards
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
  .card-img {
    height: 250px;
  }
</style>