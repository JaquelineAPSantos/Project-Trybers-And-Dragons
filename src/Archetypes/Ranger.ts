import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    if (Ranger.archetypeInstances === 0) {
      throw new Error('Not implemented');
    }
      
    return Ranger.archetypeInstances;
  }
}