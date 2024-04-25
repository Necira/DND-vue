<template>
  <div>
    <ability-info v-for="(ability,key,index) in abilities"
                  :ability="ability"
                  @click="console.log(key), $emit('pressedAbility', key)"
                  :key="index"
    ></ability-info>
   </div>
</template>
<script>
import { defineComponent } from 'vue';
import AbilityInfo from './AbilityInfo.vue';
export default defineComponent({
  name : "WarriorClass",
  components: {
    AbilityInfo
},
props: [
    'showDice'
  ],
  emits : [
    'pressedAbility'
  ],
  data() {
    return {
      abilities: {
        sword: {
          description: "hit",
          throws: 1,
          dice: 5,
          image: "./assets/sword.jpg",
          name: "sword"
        },
        shieldBlock: {
          description: "blocked",
          throws: 1,
          dice: 5,
          image: "./assets/shieldBlock.jpg",
          name: "shield block"
        }
      }
    }
  }
})
</script>
<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>