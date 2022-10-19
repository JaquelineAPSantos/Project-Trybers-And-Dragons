import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    if (Warrior.archetypeInstances === 0) {
      throw new Error('Not implemented');
    }
      
    return Warrior.archetypeInstances;
  }
}