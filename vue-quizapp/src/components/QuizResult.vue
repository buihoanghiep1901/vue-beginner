<script setup>
defineProps(['numberOfCorrectAnswer', 'length'])
</script>

<template>
  <div class="container">
    <h1>result</h1>
    <p class="number">{{ numberOfCorrectAnswer }}/{{ length }}</p>
    <RouterLink to="/">
      <p>Go Back</p>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  width: 25%;
  padding: 20px;
  background-color: honeydew;
  display: flex;
  justify-content:center ;
  flex-direction: column;
  align-items: center;
}
.number {
  font-size: 80px;
  font-weight: 700;
  margin: 0;
}
</style>
