<script setup>
defineProps(['quiz'])
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink :to="`/quiz/${quiz.id}`">
    <div class="card">
      <img :src="quiz.img" :alt="quiz.name" />
      <div class="text">
        <h4 class="quizname">{{ quiz.name }}</h4>
        <p class="date">{{ new Date().toLocaleDateString(en - US) }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  box-shadow: 1px 1px 5px 0px;
  border: none;
  cursor: pointer;
  margin: 20px 10px;
  border-radius: 2%;
}

.card img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.text {
  padding: 10px;
}

.quizname{
    margin: 0;
    font-size: 30px;
}
</style>
