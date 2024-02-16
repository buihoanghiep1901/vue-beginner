<script setup>
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const errMess=ref('')

function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}


const addNote = () => {
  if (newNote.value.length < 10 ) {
    return errMess.value='Note must longer than 10 characters'
  }
  notes.value.push({
    id: Math.floor(Math.random() * 10000),
    text: newNote.value,
    date: new Date().toLocaleDateString("en-US"),
    background: getRandomColor(),
  });
  newNote.value = "";
  errMess.value=''
  showModal.value = false;
};
</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true" class="addBtn">+</button>
      </header>

      <div class="card-container">
        <div
          v-for="note in notes"
          :key="note.id"
          :style="{ backgroundColor: note.background }"
          class="card"
        >
          <p>{{ note.text }}</p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>

      <div v-if="showModal" class="overlay">
        <div class="modal">
          <textarea v-model="newNote" cols="30" rows="10"></textarea>
          <p v-show="errMess" :style="{color: 'red'}">{{ errMess }}</p>
          <button @click="addNote" class="add">Add Note</button>

          <button @click="showModal = false" class="close">X</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 20px 50px;
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 75px;
  font-weight: bold;
}

.addBtn {
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border: none;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 225px;
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: aqua;
  border-radius: 20px;
  margin: 10px 20px;
}

.date {
  font-size: 13px;
  font-weight: 600;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.77);
  z-index: 10;
  top: 0;
  left: 0;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px;
  border-radius: 10px;
  background-color: white;
  position: relative;
}

.add {
  margin-top: 10px;
  border: none;
  font-size: 20px;
  padding: 10px;
  background-color: lightgreen;
}

.close {
  position: absolute;
  background-color: transparent;
  top: 2.5px;
  right: 2.5px;
  z-index: 5;
  width: 25px;
  height: 25px;
  border: none;
}
.close:hover {
  background-color: lightcoral;
}
</style>
