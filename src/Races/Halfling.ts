import Race from './Race';

export default class Halfling extends Race {
  name: string;
  dexterity: number;
  static racesInstances = 0;
  maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.name = '';
    this.dexterity = 0;
    Halfling.racesInstances += 1;
    this.maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    if (Halfling.racesInstances === 0) {
      throw new Error('Not implemented');
    }
    return Halfling.racesInstances;
  }
} 