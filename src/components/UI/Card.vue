<template>
  <div class="card">
    <span class="card-name">{{lvl}}</span>
    <span class="card-title">{{title}}</span>
    <div class="card-body">
      {{description}}
    </div>
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
    
  }
}
</script>

<style>

</style>