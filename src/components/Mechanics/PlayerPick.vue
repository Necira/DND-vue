<template>
  
  <div class="classes">
    <h1 class="header">{{header}}</h1>
    <class-info class="rogueInfo" 
                :show="showRogue" 
                @toggled="showEmit" 
                img="../assets/catRogue.jpg" 
                showDice="false" 
                infoType="Rogue" 
                description="a versatile character, capable of sneaky combat and nimble tricks"/>
    <class-info class="mageInfo" 
                :show="showMage" 
                @toggled="showEmit" 
                img="../assets/catMage.jpg" 
                showDice="false" 
                infoType="Mage" 
                description="Spellcasters who spent countless hours learning about magic and experimenting their findings"/>
    <class-info class="warriorInfo" 
                :show="showWarrior" 
                @toggled="showEmit" 
                img="../assets/catWarrior.jpg"  
                showDice="false" 
                infoType="Warrior" 
                description="The warrior is proficient in the use of all simple weapons with great durablity"/>
  <div class="name">
    <p class = "nameHead">Choose your Name</p>
    <br>
    <p class="pickedName" 
      style="white-space: pre-line;">
      {{ naming }}
    </p>
    <br>
    <input class="naming1"
            type="text" 
            placeholder="Gustav" 
            v-model="naming"  
            v-if="playerOne === false">
    <button class="enter" @click="onClick('playerOne', naming)"
            v-if="playerOne === false">
            enter first player
    </button>
    <input type="text" 
            class="" 
            v-model="naming"
            placeholder="Paula"  
            v-if="playerOne === true">
    <button class="enter" @click="onClick('playerTwo', naming)"
            v-if="playerOne === true">
            enter second player 
    </button>
  </div>
</div>
</template>
<script>
import ClassInfo from '../PlayerInfo/ClassInfo.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PlayerPick",
  components: {
    ClassInfo,
  },

  data() {
    return {
      toggled: false,
      naming: "",
      playerOne: false,
      playerTwo: false,
      showWarrior: false,
      showRogue: false,
      showMage: false,
      pick: "",
      header: this.playerOne? 'player two pick' : 'player two pick',
    }
  },
  emits: ['picking', 'naming'],
  methods: {
    onClick(player, name) {
      if (this.toggled) {
        this.$emit('picking', this.pick, player, name);
        if (player === 'playerOne') {
          this.playerOne = true
        } 
        else if (player === 'playerTwo') {
          this.playerTwo = true
        }
      } else {
        alert("pick class")
      }
    },
    showEmit (type, toggled) {
      if (type === 'Rogue' && toggled) {
        this.showRogue = true;
        this.showMage = false;
        this.showWarrior = false;
        this.pick = "Rogue";
      }
      else if (type === 'Warrior' && toggled) {
        this.showWarrior = true;
        this.showMage = false;
        this.showRogue = false;
        this.pick = "Warrior";
      }
      else if (type === 'Mage' && toggled) {
        this.showMage = true;
        this.showWarrior = false;
        this.showRogue = false;
        this.pick = "Mage";
      }  
    this.toggled = toggled;
    }
  }
});
</script>
<style scoped>
.classes {
  display: grid;
  grid-template-areas:"header header header"
                    "rogue mage warrior"
                    "name name name"
                    "enter enter enter";
  align-items: row; 
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  justify-self: center;
}
.rogueInfo {
  grid-area: rogue;
  border-radius: 10px;
  justify-self: center;
  background-color: rgb(198, 155, 184);
}
.mageInfo {
  grid-area: mage;
  border-radius: 10px;
  justify-self: center;
  background-color: rgb(169, 155, 198);
}
.warriorInfo {
  background-color: rgb(161, 198, 155);
  grid-area: warrior;
  border-radius: 10px;
  justify-self: center;
}
.name {
  padding: 10px;
  grid-area: name;
  justify-self: center;
  margin: 30px;
  background-color: #65375b;
  border-radius: 8px;
  color:white;
}
.pickedName {
  text-align: center;
}
.nameHead {
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid white;
}
.enter {
  grid-area: enter;
  justify-self: center;
  margin: 20px;
}
.header {
  background-color: #65375b;
  padding: 20px;
  border-radius: 8px;
  color:white;
  grid-area: header;
  text-align: center;
  justify-self: center;
  font-size: 20px;
  margin: 20px;
}
</style>