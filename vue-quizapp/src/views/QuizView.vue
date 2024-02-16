<script setup>
defineProps(['id'])
import { computed, ref} from 'vue';
import { useRoute } from 'vue-router';

import QuizHeader from '@/components/QuizHeader.vue';
import QuizQuestion from '@/components/QuizQuestion.vue';
import QuizResult from '@/components/QuizResult.vue';

import quizData from '../data/quizes.json'

const route=useRoute()
const quiz=quizData.find((quiz)=>quiz.id===parseInt(route.params.id))
const questions=quiz.questions

const currentQuesIndex=ref(0)
const numberOfCorrectAnswer=ref(0)
const showResult=ref(false)

const questionStatus=computed(()=>`${currentQuesIndex.value}/${questions.length}`)

const barPercentage= computed(()=>`${(currentQuesIndex.value/questions.length) *100}%`)

const onSelected= (isCorrect)=>{
  currentQuesIndex.value++
  if(isCorrect){
    numberOfCorrectAnswer.value++
  }
  if(currentQuesIndex.value===questions.length){
    showResult.value=true
  }
}
</script>


<template>

  <QuizHeader 
  :status="questionStatus"
  :percentage="barPercentage"
  />

  <QuizQuestion 
  v-if="!showResult"
  :question="questions[currentQuesIndex]"
  @onSelected="onSelected"
  />

  <QuizResult v-else :numberOfCorrectAnswer="numberOfCorrectAnswer"
  :length="questions.length"
  class="result"
  />
</template>

<style scoped>
.result{
  margin: 0 auto;
}
</style>