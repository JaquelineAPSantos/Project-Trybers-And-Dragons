import Race from './Race';

export default class Dwarf extends Race {
  name: string;
  dexterity: number;
  static racesInstances: 0;
  maxLifePoints: number;
  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this.name = '';
    this.dexterity = 0;
    Dwarf.racesInstances += 1;
    this.maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    if (Dwarf.racesInstances === 0) {
      throw new Error('Not implemented');
    }
    return Dwarf.racesInstances;
  }
} 