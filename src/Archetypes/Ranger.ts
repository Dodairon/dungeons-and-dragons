import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

class Ranger extends Archetypes {
  private readonly _energyType: EnergyType;
  private static _ArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._ArchetypesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._ArchetypesInstances;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
