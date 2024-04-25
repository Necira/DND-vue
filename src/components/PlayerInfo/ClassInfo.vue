<template>
  <div class="classInfo">
      <img :src="img" class="image" @click="toggleInfos()">
      <p class="description" v-if="show && showClass">{{ description }}</p>
      <p  class="header" v-if="show && showClass">abilities</p>
      <mage-abilities class="Mage" 
                      v-if="infoType === 'Mage' && show && showClass" 
                     showDice="false">
      </mage-abilities>
      <rogue-abilities class="Rogue" 
                      v-if="infoType === 'Rogue' && show && showClass" 
                      showDice="false">
      </rogue-abilities>
      <warrior-abilities class="Warrior" 
                      v-if="infoType === 'Warrior' && show && showClass" 
                      showDice="false">
      </warrior-abilities>
  </div>
</template>
<script>
import { defineComponent} from 'vue'
import RogueAbilities from '../Abilities/RogueAbilities.vue';
import MageAbilities from '../Abilities/MageAbilities.vue';
import WarriorAbilities from '../Abilities/WarriorAbilities.vue';
export default defineComponent({
  components: {
    RogueAbilities,
    MageAbilities,
    WarriorAbilities
  },
  name : "ClassInfo",
  props: [
    'img',
    'description',
    'abilityInfo',
    'showDice',
    'infoType',
    'show'
  ],
  emits: [
    'toggled'
  ],
  data() {
    return { 
      showClass : false,
    }
  },

  methods: {
    // hideDescription () {
    // if (this.show === false) {
    //     this.showDescription = false;
    //   };
    // },
    
    toggleInfos() {
      this.showClass = !this.showClass
      // this.showDescription = !this.showDescription;
      this.$emit('toggled', this.infoType , this.showClass);
      }
  },
});
</script>

<style scoped>
* {
  color:white;
}

.classInfo {
  display: grid;
  grid-template-areas: 
                        "image"
                        "description"
                        "header"
                        "abilities";
  grid-template-columns: auto;
  grid-template-rows: auto;
  background-color: #2c3e50;
  margin:0px;
  border: solid black 1px;
  cursor: pointer;
  user-select: none;
  transition: transform ease-in-out 0.2s;
  background-color:rgb(174, 184, 201);
  justify-self:center;
}


.image {
  grid-area: image;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  border: solid black 2px;
  justify-self:center;
}
.Rogue {
  margin:0;
  padding: 0;
}
.Mage {
  margin:0;
  padding: 0;
}
.Warrior {
  margin:0;
  padding: 0;
}
.header {
  background-color: #65375b;
  border-radius:10px;
  height:20px;
  justify-self:center;
  color:white;
  padding:10px;
  margin-bottom:0px;
  grid-area: header;
  border-bottom: 2px solid white;
}
.description {
  background-color: #65375b;
  margin:10px;
  margin-bottom: 20px;
  border-bottom: 2px solid white;
  grid-area: description;
  border-radius:10px;
  padding:30px;
  justify-self:center;
  color:rgb(255, 255, 255);
}
</style>
