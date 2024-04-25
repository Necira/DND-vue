<template>
   <div>
    <ability-info v-for="(ability, key, index) in abilities"
                  :ability="ability"
                  @click="$emit('pressedAbility', key), console.log(key)"
                  :key="index"
    ></ability-info>
   </div>
</template>
<script>
import { defineComponent } from 'vue';
import AbilityInfo from './AbilityInfo.vue';
export default defineComponent({
  name: 'MageAbilities',
  components: {
    AbilityInfo
  },
  props: [
    'showDice',
  ],
  emits : [
    'pressedAbility'
  ],
  data() {
    return {
      abilities: {
        magicMissile: {
          description: "fires bolt of magic",
          throws: 1,
          dice: 5,
          image: "/assets/magicMissile.jpg",
          name:"magic missile",
        },
        fireBall: {
          description : "fires next turn",
          throws : 1,
          dice: 6,
          image: "/assets/fireBall.jpg",
          name:"fireball",
        },
        mirrors: {
          description: "summons defense",
          throws: 1,
          dice: 5,
          image: "./assets/mirrors.jpg",
          name:"mirrors",
        }
      },
      methods: {
        // combat() {
        //   if (this.name === magicMissile) {
        //     let damage = dice(1,4);
        //     let statusEffect = "";
        //     this.$emit('combat', damage, this.target, statusEffect);
        //   }
        //   if (this.name === fireball) {
        //     let damage = dice(1,8);
        //     let statusEffect = "";
        //     this.$emit('combat', damage, this.target, statusEffect);
        //   }
        //   if (this.name === mirrors) {
        //     let damage = 0;
        //     let statusEffect = mirrors;
        //     this.$emit('combat', damage, this.target, statusEffect);
        //   }
        // }
      }
    }
  }
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