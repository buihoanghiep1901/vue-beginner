import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
    ],
    loading: false
  }),

  getters: {
    async getTask(){
        await axios.get('http://localhost:3000/tasks')
        .then((response)=>{
            console.log(response.data)
            this.tasks= response.data
            this.loading=true
        })
    },
    fav() {
      return this.tasks.filter((task) => task.isFav)
    }
  },

  actions: {
    async addTask(newTask) { 
      this.tasks.push({
        id:''+ Math.floor(Math.random() * 10000).toString(),
        title: newTask,
        isFav: false
      })

      await axios.post('http://localhost:3000/tasks', this.tasks[this.tasks.length-1])
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id != id)

      await axios.delete(`http://localhost:3000/tasks/${id}`)
    },

    async toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id)
      task.isFav = !task.isFav

      await axios.patch(`http://localhost:3000/tasks/${id}`, {
        isFav: task.isFav
      })
    }
  }
})
