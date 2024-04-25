<template>
    
    <player-pick  v-if="playerPicked === false"
                  @picking="initializePlayer">
    </player-pick> 
    <div class="game" v-if="playerOneWin === false && playerTwoWin === false">
    <div class="combat">
      <character-stats v-if="playerPicked" 
                      class="playerOne" 
                      :initiative="playerOne.initiative"
                      :player="playerOne.charName"
                      :hp="playerOne.hp" 
                      :damageDealt="playerOne.damageDeal" 
                      :damageTake="playerOne.damageTake" 
                      :statusEffects="playerOne.statusEffects">
      </character-stats>
      <character-stats v-if="playerPicked" 
                      class="playerTwo" 
                      :initiative="playerTwo.initiative"
                      :player="playerTwo.charName"
                      :hp="playerTwo.hp" 
                      :damageDealt="playerTwo.damageDeal" 
                      :damageTake="playerTwo.damageTake" 
                      :statusEffects="playerTwo.statusEffects">
      </character-stats>
      <h1 class="activePlayer" 
            v-if="activePlayer">{{ this.activePlayer.charName }} 's turn
      </h1>
       <mage-abilities class="abilityCombat"
                      v-if="activePlayer.type === 'Mage' && activePlayer" 
                      @pressedAbility="onClick">
      </mage-abilities>
      <rogue-abilities v-if="activePlayer.type === 'Rogue' && activePlayer" 
                       class="abilityCombat"
                       @pressedAbility="onClick">
      </rogue-abilities>
      <warrior-abilities v-if="activePlayer.type === 'Warrior' && activePlayer" 
                        class="abilityCombat"
                        @pressedAbility="onClick">
      </warrior-abilities>
    </div>
  </div>
      <h1 class="win" v-if="playerOneWin === true"> {{ playerOne.charName }} won !!! </h1>
      <h1 class="win" v-if="playerTwoWin === true"> {{ playerTwo.charName }} won !!! </h1>
</template>
<script>
/* eslint-disable */
import { Mage } from '../../classes/Mage.js';
import { Warrior } from '../../classes/Warrior.js';
import { Rogue } from '../../classes/Rogue.js';
import { defineComponent, vModelCheckbox } from 'vue';
import { diceRoll } from '@/classes/DiceRoll';
import CharacterStats from '../PlayerInfo/CharacterStats.vue';
import PlayerPick from './PlayerPick.vue';
import MageAbilities from '../Abilities/MageAbilities.vue';
import RogueAbilities from '../Abilities/RogueAbilities.vue';
import WarriorAbilities from '../Abilities/WarriorAbilities.vue';
export default defineComponent({
  name: "showCombat",
  components: {
    PlayerPick,
    Warrior,
    Rogue,
    Mage,
    CharacterStats,
    MageAbilities,
    WarriorAbilities,
    RogueAbilities
  },
   
    data() {
      return {
        playerOne: undefined,
        playerTwo: undefined,
        activePlayer: false,
        unactivePlayer: false,
        playerPicked: false,
        playerOneWin: false,
        playerTwoWin: false,
        damage: 0
      }
    },

    methods: {
        initializePlayer(pick, player, name)  { 
          try {this[player]
            this[player] = this.pickClass(pick);
            this[player].charName = name;
            if (player === 'playerTwo') {
            this.initiativeOrder();
          } 
        }
        catch (exception) {
          console.log(exception) 
        }
      },

      pickClass(pick) {
        let pickedClass = undefined;
        if (pick === 'Warrior'){
          pickedClass = new Warrior();
        } else if (pick === 'Mage'){
          pickedClass = new Mage();
        } else if (pick === 'Rogue'){
          pickedClass = new Rouge();
        }
        return pickedClass;
      },
  
      initiativeOrder() {
        if (this.playerTwo.initiative > this.playerOne.initiative) {
          this.activePlayer = this.playerTwo;
          this.unactivePlayer = this.playerOne;
          this.playerPicked = true;
        } else if (this.playerTwo.initiative < this.playerOne.initiative) { 
          this.activePlayer = this.playerOne;
          this.unactivePlayer = this.playerTwo;
          this.playerPicked = true;
        }
      },

      onClick(ability) {
        if (typeof this[ability] === 'function') {
          this[ability](); 
        } else {
          console.log(`${ability} is not a function`);
        }
        // try {
        //   this[ability]();
        // } catch (exception) {
        //   console.log(exception)
        // }
        this.triggerStatusEffects();
        this.checkStatusEffects();
        this.triggerDamage();
        this.switchPlayer();
      },

      triggerDamage() {
        this.unactivePlayer.hp -= this.damage;
        this.damage = 0;
      },

      triggerStatusEffects() {
        if (this.unactivePlayer.statusEffects.fireBall === true) {
            this.damage = diceRoll(2,8);
          }
        this.dirtCount();
        this.mirrorCount();
        this.activePlayer.statusEffects.shield = false;
      },

      checkStatusEffects() {
        if (this.unactivePlayer.statusEffects.dirt === false) {
          if (this.activePlayer.statusEffects.mirrors === true) {
            let mirrorLuck = diceRoll(1,2);
            if (mirrorLuck > 1 || this.unactivePlayer.statusEffects.shield === true) {
              this.damage = 0;
            }
          }
        }
      },

      mirrorCount() {
        if (this.activePlayer.statusEffects.mirror === true) {
          if (this.activePlayer.mirrorCount > 4) {
            this.activePlayer.mirrorCount = 0;
            this.activePlayer.statusEffects.mirror = false;
          } else {
            this.activePlayer.mirrorCount++;
          }
        }
      },

      dirtCount() {
        if (this.activePlayer.statusEffects.dirt === true) {
          this.activePlayer.statusEffects.dirt = false;
        }
      },

    switchPlayer() {
      if (this.activePlayer === this.playerOne) {
          this.activePlayer = this.playerTwo;
          this.unactivePlayer = this.playerOne;
      }
      else {
        this.activePlayer = this.playerOne;
        this.unactivePlayer = this.playerTwo;
      }
      this.EndOfCombat();
    },

    EndOfCombat() {
      if (this.playerOne.hp <= 0) {
        this.playerTwoWin = true;
      }
      if (this.playerTwo.hp <= 0) {
        this.playerOneWin = true;
      }
    },
    magicMissile() {
      this.damage = diceRoll(1,4);
    },

    fireBall() {
      this.activePlayer.statusEffects.fireBall = true;
    },
    mirors() {
      this.activePlayer.statusEffects.mirrors = true;
    },

    dagger() {
      this.damage = diceRoll(1,4)
    },
    sneakAttack() {
      this.damage = diceRoll(1,4) * 2;
    },
    dirt() {
      this.activePlayer.statusEffects.dirt = true;
    },
    sword() {
      this.damage = diceRoll(1,6);
    },
    shield() {
      this.activePlayer.statusEffects.shield = true;
    }
  }
});
</script>
<style scoped>

.combat {
  display:grid;
  grid-template-areas: "activePlayer activePlayer activePlayer"
                        "playerOne abilityCombat playerTwo";
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
}

.activePlayer {
  font-size: 30px;
  grid-area: activePlayer;
  padding: 50px;
  justify-self: center;
}
.playerOne {
  grid-area: playerOne;
}
.abilityCombat {
  grid-area: abilityCombat;
}
.playerTwo {
  grid-area: playerTwo;
}
.win {
  font-size: large;
  color:red;
  display: flex;
  margin: 200px;
  justify-content: center;
}

</style>