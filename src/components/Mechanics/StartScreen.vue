<template>
  <div class="startScreen">
    <button class="StartButton" @click="$emit('startGame')">Play</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name : "startScreen",
});
</script>
<style scoped>
.StartButton {
  border: none;
  color: rgb(88, 118, 153);
  padding: 15px 32px;
  text-decoration: none;
  font-size: 50px;
  cursor: pointer;
  border-radius: 3px;
}
.StartButton:hover {
  background-color: rgb(197, 227, 239);
  transform: scale(1.2);
}
* {
  background-color: rgb(255, 255, 255);
}
</style>