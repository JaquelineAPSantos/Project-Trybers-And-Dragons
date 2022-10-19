import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    if (Mage.archetypeInstances === 0) {
      throw new Error('Not implemented');
    }
      
    return Mage.archetypeInstances;
  }
}