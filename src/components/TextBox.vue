<template>
  <input v-model="text" @input="event => $emit('textChanged', event.target.value)">
</template>

<script>
export default {
  name: "TextBox",
  data(){
    return{
      text: ""
    }
  }
}
</script>

<style scoped>

</style>