export default class Race {
  constructor(
    readonly name: string, 
    readonly dexterity: number,
  ) { }

  static createdRacesInstance(): number {
    throw new Error('Not implemented');
  }
}