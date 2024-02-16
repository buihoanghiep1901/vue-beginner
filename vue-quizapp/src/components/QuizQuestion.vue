<script setup>
defineEmits(['onSelected'])
defineProps(['question'])
</script>

<template>
    <div class="container">
        {{ question }}
        <h1>{{ question.text }}</h1>
        <div class="options">
            <div class="option"
            v-for="option in question.options"
            :key="option.id"
            @click="$emit('onSelected',option.isCorrect)"
            >
                <p class="label">{{ option.label }}</p>
                <p class="text">{{ option.text }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.option{
    display: flex;
    align-items:center ;
}
.option .label{
width: 30px;
height: 30px;
background-color: bisque;
display: flex;
justify-content: center;
align-items:center ;
font-size: 20px
}

.text{
    height: 30px;
    width: 100%;
    display: flex;
    align-items:center ;
    background-color: aliceblue;
    padding-left: 20px;
    font-size: 20px

    
}
</style>