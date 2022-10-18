import Race from './Race';

export default class Dwarf extends Race {
  name: string;
  dexterity: number;
  createdRacesInstances: number;
  maxLifePoints: number;
  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this.name = '';
    this.dexterity = 0;
    this.createdRacesInstances = 0;
    this.maxLifePoints = 80;
  }
} 