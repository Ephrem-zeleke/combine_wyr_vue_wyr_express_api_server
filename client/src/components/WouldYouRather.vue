<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String
})
// we need another variable for user choice
const choice = ref(null) // this will be empty because we don't know the user choice
// first we have to define what kind data are we sending to the parent
const emit = defineEmits([
    'answer-selected'
])
// now here we can define our function

function choiceMade (){
  emit('answer-selected', choice.value) // this will emit the answer selected to the parent
}
</script>

<template>

<div id="wyr">
<h2>Make your choice!</h2>
    {{ question }}
  <br>
<!--  we have to make the radio button to work and we will use the v-model and v-bind -->
<!--  the child need to send a data when the user make a choice and we can't directly send a message from the
child to the parent so we need to add an event handler and the child can notify the parent when change made and send data-->
<div>
  <input v-model="choice" v-bind:value="answer1" v-on:change="choiceMade" type="radio" id="answer1">
  <label for="answer1">{{ answer1 }}</label>

  <input v-model="choice" v-bind:value="answer2" v-on:change="choiceMade" type="radio" id="answer2">
  <label for="answer2">{{ answer2 }}</label>
</div>

</div>
</template>

<style scoped>
#wyr{
  background-color: hotpink;
}
</style>
