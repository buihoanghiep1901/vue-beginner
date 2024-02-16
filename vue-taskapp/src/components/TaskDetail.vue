<script setup>
defineProps(['task'])
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
</script>

<template>
  <div class="task-container">
    <p class="title">{{ task.title }}</p>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"> delete </i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<style scoped>
.task-container {
  width: 650px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  margin: 20px auto;
  border-radius: 10px;
  background-color: aliceblue;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.title {
  font-size: 20px;
  font-weight: 600;
  font-family: 'poppins';
}
.active {
  color: red;
}
.icons{
    cursor: pointer;
}
</style>
