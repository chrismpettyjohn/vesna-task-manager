import {VendingMachineEntity} from './vending-machine.entity';
import {VendingMachine} from '@bobba-rp/types';

export function vendingMachineWire(
  entity: VendingMachineEntity
): VendingMachine {
  return {
    id: entity.id!,
    name: entity.name,
    itemName: entity.itemName,
    cost: entity.cost,
    hungerRestored: entity.hunger,
    energyGained: entity.energy,
    healthGained: entity.health,
  };
}
