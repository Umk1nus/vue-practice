<template>
  <div class="card">
    <span class="card-name">{{lvl}}</span>
    <span class="card-title">{{title}}</span>
    <div class="card-body">
      <slot name="header"></slot>
      <router-link v-if="link" :to="link">Посмотреть</router-link> 
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lvl: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    stats:{
      type: Array,
      required: true
    } 
    
  }
}
</script>

<style>

</style>