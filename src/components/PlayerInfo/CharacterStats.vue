<template>
    <ol class="list">
      <li class="player">{{player}}</li>
      <li class="hpHead">hp:</li>
      <li class="hp">{{hp}}</li>
      <li class="initiativeHead">initiative:</li>
      <li class="initiative">{{ initiative }}</li>
      <li class="damageDealHead">damage dealt:</li>
      <li class="damageDeal">{{damageDeal}}</li>
      <li class="damageTakeHead">damage taken:</li>
      <li class="damageTake">{{damageTake}}</li>
      <li class="statusEffectsHead">status effects :</li>
      <li class="statusEffects">{{statusEffects}}</li>
    </ol>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name : "CharacterStats",
  props: [
    'initiative',
    'player',
    'hp',
    'damageDeal',
    'damageTake',
    'statusEffects',
  ],
  data() {
    return {

    }
  }
});
</script>

<style scoped>
  .list {
    display: grid;
    grid-template-areas: "player"
                          "hpHead"
                          "hp"
                          "initiativeHead"
                          "initiative"
                          "damageDealHead"
                          "damageDeal"
                          "damageTakeHead"
                          "damageTake"
                          "statusEffectsHead"
                          "statusEffects";
   grid-template-columns: auto;     
   grid-template-rows: auto ;           
   margin: 10px;
    padding: 30px;
    justify-self: center;
    background-color: #214971;
    border-radius: 4px;
    color:white;
    width: 100px;
  }
  .player {
    grid-area: player;
    justify-self: center;
    padding:10px;
    border-bottom: 2px solid white;
    margin-bottom:20px;
  }
  .hp {
    border-bottom: 1px solid white;
    margin-bottom: 8px;
    grid-area: hp;
    justify-self: center;
    padding:10px;
  }

  .damageDeal{
    border-bottom: 1px solid white;
    margin-bottom: 8px;
    grid-area: damageDeal;
    justify-self: center;
    padding:10px;
  }
  .initiative {
    border-bottom: 1px solid white;
    margin-bottom: 8px;
    grid-area: initiative;
    justify-self: center;
    padding:10px;
  }
  .damageTake {
    border-bottom: 1px solid white;
    margin-bottom: 8px;
    grid-area: damageTake;
    justify-self: center;
    padding:10px;
  }

  .statusEffects {
    border-bottom: 1px solid white;
    margin-bottom: 8px;
    grid-area: statusEffects;
    justify-self: center;
    padding:10px;
  }

  .hpHead {
    grid-area: hpHead;
    justify-self: center;
  }

  .damageDealHead{
    grid-area: damageDealHead;
    justify-self: center;
  }
  .initiativeHead {
    grid-area: initiativeHead;
    justify-self: center;
  }


  .damageTakeHead {
    grid-area: damageTakeHead;
    justify-self: center;
  }

.statusEffectsHead {
  grid-area: statusEffectsHead;
  justify-self: center;
}
</style>