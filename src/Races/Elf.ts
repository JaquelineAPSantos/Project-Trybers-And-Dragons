import Race from './Race';

export default class Elf extends Race {
  name: string;
  dexterity: number;
  static racesInstances = 0;
  maxLifePoints: number;
  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this.name = '';
    this.dexterity = 0;
    Elf.racesInstances += 1;
    this.maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    if (Elf.racesInstances === 0) {
      throw new Error('Not implemented');
    }
    return Elf.racesInstances;
  }
} 