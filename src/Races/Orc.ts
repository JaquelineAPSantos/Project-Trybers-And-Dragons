import Race from './Race';

export default class Orc extends Race {
  name: string;
  dexterity: number;
  static racesInstances = 0;
  maxLifePoints: number;
  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this.name = '';
    this.dexterity = 0;
    Orc.racesInstances += 1;
    this.maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    if (Orc.racesInstances === 0) {
      throw new Error('Not implemented');
    }
    return Orc.racesInstances;
  }
} 