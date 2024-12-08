<script setup>
import WouldYouRather from './components/WouldYouRather.vue'
//we need to import the ref library and store the question and answer for the user

import { ref, onMounted } from 'vue'
import wyrService from "./services/wyrService"


const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// we also need a variable that response the user response

const userSelection = ref('') // we don't know the user selection so we left it empty
// now we have to send the question and answer to the would you rather to display and we use v-bind

onMounted(() => {
  wyrService.getRandomWyr().then((wyrData) =>{
    // here we expect the wyr question and answer in the json format
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })

})
function updateUserSelection (userChoice) {
  userSelection.value = `Thank you, you choose ${userChoice}`
}

</script>

<template>
<div id="app-component">

  <h1>Hello! would you rather?</h1>

  <WouldYouRather v-bind:question="wyrQuestion"
  v-bind:answer1="wyrAnswer1"
  v-bind:answer2="wyrAnswer2"
  v-on:answer-selected="updateUserSelection">
  </WouldYouRather>

  <p>{{ userSelection }}</p>
<!--  the parent will receive the child message and it will display
to do that, we will use the v-on and create a function to display the message -->
<!--this will be replaced by would you rather template -->

</div>
</template>

<style scoped>
#app-component {
  background-color: #e4a5bd;
}

</style>
