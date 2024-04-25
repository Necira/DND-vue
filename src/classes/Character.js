export class Character {
  charName = '';
  initialHp = 0;
  currentHp = 0;
  initiative = 0;
  damageDeal = 0;
  damageTake = 0;
  statusEffects = {};
  type = ""
  constructor() {
    this.statusEffects = {  
      fireBall: false,
      mirrors:false,
      dirt:false,
      shield:false,
    }
  }
  
  potion(dice) {
    this.currentHp + dice;
  }

  setStatusEffects(effect, state) {
    if (!this.effects[effect]) {
      this.effects[effect] = [];
    }
    this.statusEffects[effect].push(state);
  }

  setName(name) {
    this.charName = name;
  }

  setInitiative(initiative) {
    this.initiative = initiative;
  }

  setInitialHp(hp) {
    this.initialHp = hp;
    this.currentHp = hp;
  }

  setCurrentHp(hp) {
    this.currentHp = hp;
  }

  getCurrentHp() {
    return this.currentHp;
  }

  getDamageTake() {
    return this.damageTake;
  }

  getDamageDeal() {
    return this.damageDeal;
  }
}
