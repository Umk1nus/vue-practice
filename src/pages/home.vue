<template>
  <div class="container-card">
    <carousel :settings="settings">
      <slide class="card_wrapper" v-for="card in cards" :key="card.id">
        <Card :title="card.title" :description="card.description" :lvl="`${card.lvl}`" :img="card.img" :link="`/${card.alias}`">
          <template v-slot:header>
              <img class="card-img" :src="card.img" alt="">
          </template>
          <template v-slot:footer>
            <div class="card-stats">
              <div class="one-third" v-for="(stat, index) in card.stats" :key="index">
                {{stat.title}}
                <h3>{{stat.value}}</h3>
              </div>
            </div>
          </template>
        </Card>
      </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</div>
</template>

<script>
import Card from '@/components/UI/Card'
import cards from '@/seeders/items'
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      cards: cards,
      settings: {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: 'center'
      }
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