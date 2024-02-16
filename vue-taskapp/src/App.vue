<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script setup>
import { ref } from 'vue'
import { useTaskStore } from './stores/TaskStore'

import TaskDetail from './components/TaskDetail.vue'

const taskStore = useTaskStore()
taskStore.getTask
const mode = ref('all')
const newTask = ref('')
const handleSubmit = (task) => {
  if (newTask.value.length > 0) {
    taskStore.addTask(task)
  }
  newTask.value = ''
}
</script>

<template>
  <div class="container">
    <header>
      <img
        src="./assets/pinia-logo.svg"
        alt="pinia 
            logo"
      />
      <h1>Pinia</h1>
    </header>

    <div class="input-container">
      <form action="">
        <input type="text" v-model="newTask" />
        <button @click.prevent="handleSubmit(newTask)">Add</button>
      </form>
      <div>
        <button @click="mode = 'all'">All tasks</button>
        <button @click="mode = 'fav'">Favorite tasks</button>
      </div>
    </div>

    <div v-if="mode === 'all'">
      <div class="tasks" v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div v-if="mode === 'fav'">
      <div class="tasks" v-for="task in taskStore.fav" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 0;
}

header img {
  width: 60px;
}
.input-container {
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.input-container input {
  padding: 10px 10px;
  border: rgb(255, 212, 81) solid;
  border-radius: 5px;
}

.input-container button {
  padding: 10px 20px;
  margin: 0 10px;
  border: rgb(255, 212, 81) solid;
  border-radius: 5px;
  background-color: rgb(255, 212, 81);
}
.input-container button:hover {
  background-color: rgb(255, 212, 81, 0.7);
}
.input-container div button {
  margin: 0 5px;
}
</style>
