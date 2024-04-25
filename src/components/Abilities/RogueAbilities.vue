<template>
  <div>
    <ability-info v-for="(ability, key, index) in abilities"
                  :ability="ability"
                  @click="console.log(key), $emit('pressedAbility', key)"
                  :key="index"
    ></ability-info>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import AbilityInfo from './AbilityInfo.vue'
export default defineComponent({
  /* eslint-disable */
  name : "RogueAbilities",
  components: {
    AbilityInfo
  },
  props: [
    'showDice'
  ],
  emits : [
    'pressedAbility'
  ],
  data: () => ({
    abilities: {
      dagger: {
        name: 'Dagger',
        image: './assets/dagger.jpg',
        description: 'stab',
        throws: 1,
        dice: 5,
      },
      sneakAttack: {
        name: 'sneak attack',
        image: './assets/sneakAttack.jpg',
        description: 'sneak',
        throws: 1,
        dice: 5,
      },
      dirt: {
        name: 'dirt',
        image: './assets/dirt.jpg',
        description: 'vision blocked',
        throws: 1,
        dice: 5,
      },
    }
    })
  });
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