import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    if (Necromancer.archetypeInstances === 0) {
      throw new Error('Not implemented');
    }
      
    return Necromancer.archetypeInstances;
  }
}