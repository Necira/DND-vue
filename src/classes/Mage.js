import { Character } from "./Character.js";
import { diceRoll } from "./DiceRoll.js";
export class Mage extends Character {
  constructor() {
    super();
    this.type = 'Mage';
    this.initiative = diceRoll(1,6)
    this.hp = diceRoll(1,8)
  }
}