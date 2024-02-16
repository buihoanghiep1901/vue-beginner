<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="container">
    <RouterLink to="/"></RouterLink>
    <RouterView/>
  </div>
</template>

<style scoped>
.container{
  max-width: 1000px;
margin: 0 auto;

}
</style>
