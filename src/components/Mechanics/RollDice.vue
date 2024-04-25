<template>
  <img src="/assets/dice.png" @click="diceRoll()" class="dice">
  <p> {{ num }} </p>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RollDice',
  props: [
    'throws',
    'eyes',
  ],
  data() {
    return {
      num: undefined,
    }
  },
  methods: {
    diceRoll() {
      let num = 0;
      for (let step = 0; step < this.throws; step++) {
        let result = Math.floor(Math.random()*this.eyes) + 1;
        num += result;
      }
      this.num = num;
      this.$emit('result', num);
    }
  }
});
</script>
<style>
 .dice {
  width: 70px;
  height: 70px;
 }
 .dice:hover {
  transform: scale(1.2);
  cursor: pointer;
 }
</style>