import { Character } from "./Character.js";
import { diceRoll } from "./DiceRoll.js";
export class Rogue extends Character {
  
  constructor() {
    super();
    this.type = 'Rogue';
    this.initiative = diceRoll(1,6)
    this.hp = diceRoll(1,8)
  }
}