import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

class Warrior extends Archetypes {
  private readonly _energyType: EnergyType;
  private static _ArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._ArchetypesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._ArchetypesInstances;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
