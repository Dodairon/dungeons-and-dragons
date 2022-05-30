import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

class Necromancer extends Archetypes {
  private readonly _energyType: EnergyType;
  private static _ArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._ArchetypesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._ArchetypesInstances;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
