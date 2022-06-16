import {RankService} from './rank.service';
import {Controller, Get, CacheTTL} from '@nestjs/common';
import {HasSession} from '@instinct-api/session';
import {RPRank} from '@bobba-rp/types';
import {PermissionStatus} from '@instinct-api/database';
import {RPRankRepository} from '../database/role/role.repository';
import {TWENTY_MINUTES_IN_MS} from '../time.const';

@Controller('rp-ranks')
@HasSession()
export class RankController {
  constructor(
    private readonly rankRepo: RPRankRepository,
    private readonly rankService: RankService
  ) {}

  @Get('staff')
  @CacheTTL(TWENTY_MINUTES_IN_MS)
  async getStaffRanks(): Promise<RPRank[]> {
    const staffRanks = await this.rankRepo.find({
      websiteShowStaff: PermissionStatus.Enabled,
    });

    const staffWires: RPRank[] = [];

    for (const staffRank of staffRanks) {
      const wire = await this.rankService.getWireForRank(staffRank);
      staffWires.push(wire);
    }

    return staffWires.reverse();
  }
}
