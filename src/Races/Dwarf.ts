import Race from './Race';

export default class Dwarf extends Race {
  name: string;
  dexterity: number;
  _createdRacesInstances: number;
  maxLifePoints: number;
  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this.name = '';
    this.dexterity = 0;
    this._createdRacesInstances = this.createdRacesInstances;
    this.maxLifePoints = 80;
  }

  get createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  set createdRacesInstances(value: number) {
    this._createdRacesInstances = value;
  }
} 