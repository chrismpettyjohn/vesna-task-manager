import {BusinessPositionEntity} from './business-position.entity';
import {BusinessPosition, RPUser} from '@bobba-rp/types';

export function businessPositionWire(
  entity: BusinessPositionEntity,
  employees: RPUser[]
): BusinessPosition {
  return {
    id: entity.id!,
    businessID: entity.jobID,
    businessName: 'TO BE ADDED',
    name: entity.name,
    employees,
    order: entity.id!,
    governmentBranch: entity.governmentBranch,
    femaleUniform: entity.femaleUniform,
    maleUniform: entity.maleUniform,
    shiftWage: entity.shiftWage,
    openPositions: entity.openPositions,
  };
}
