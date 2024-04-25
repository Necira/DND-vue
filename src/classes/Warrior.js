import  { Character } from "./Character.js";
import { diceRoll } from "./DiceRoll.js";
export class Warrior extends Character {

  constructor() {
    super();
    this.type = 'Warrior';
    this.initiative = diceRoll(1,6)
    this.hp = diceRoll(1,8)
  }
}