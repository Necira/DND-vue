<template>
<h1> Good Luck! </h1>
<p id="result" v-bind=diceResult></p>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "RollInitiative",
  data() {
    return {
    diceResult: 0
    }
  },
  getDiceResult(diceResult, player) {
    this.diceResult = diceResult;
    player.initiative = diceResult;
  }
});
</script>
<style>
</style>