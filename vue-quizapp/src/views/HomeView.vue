<script setup>
import { ref, watch } from 'vue'
import QuizCard from '@/components/QuizCard.vue'
import quizData from '../data/quizes.json'
const quizes = ref(quizData)
const search = ref('')
watch(search, () => {
  quizes.value = quizData.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
})
</script>

<template>
  <div class="header">
    <h1>Quiz</h1>
    <input v-model="search" type="text" />
  </div>
  <div class="card-container">
      <QuizCard 
      v-for="quiz in quizes" 
      :key="quiz.id" 
      :quiz="quiz" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
}

.header h1 {
  margin-right: 20px;
}

.header input {
  background-color: bisque;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
