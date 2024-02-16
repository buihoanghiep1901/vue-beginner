<script setup>
defineProps(['status', 'percentage'])
</script>

<template>
    <div class="container">
        <h4>Question {{ status }}</h4>
        <div class="bar">
            <div class="progress" :style="{width: percentage }">
    
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    align-items: center;
}

.container h4{
    font-size: 30px;
}
.bar{
    margin-left: 10px;
    height: 50px ;
    width: 300px;
    border-radius: 10px;
    border: 3px solid bisque ;
}

.progress {
        height: 100%;
        width: 0%;
        background-color: bisque;
    }
</style>