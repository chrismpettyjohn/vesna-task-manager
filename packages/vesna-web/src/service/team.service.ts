import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {
  CreateTeamDTOWire,
  CreateTeamUserDTOWire,
  TeamUserWire,
  TeamWire,
  UpdateTeamDTOWire,
  UpdateTeamUserDTOWire,
} from '@vesna-task-manager/types';

export class TeamService {
  async create(createTeamDTO: CreateTeamDTOWire): Promise<TeamWire> {
    const response: AxiosResponse<TeamWire> = await backendAPI.post(
      'teams',
      createTeamDTO
    );
    return response.data;
  }

  async getByID(teamID: number): Promise<TeamWire> {
    const response: AxiosResponse<TeamWire> = await backendAPI.get(
      `teams/${teamID}`
    );
    return response.data;
  }

  async updateByID(teamID: number, updateTeamDTO: UpdateTeamDTOWire) {
    await backendAPI.post(`teams/${teamID}`, updateTeamDTO);
  }

  async deleteByID(teamID: number) {
    await backendAPI.delete(`teams/${teamID}`);
  }

  async addTeamMember(
    teamID: number,
    userID: number,
    createTeamUserDTO: CreateTeamUserDTOWire
  ): Promise<TeamUserWire> {
    const response: AxiosResponse<TeamUserWire> = await backendAPI.post(
      `teams/${teamID}/users/${userID}`,
      createTeamUserDTO
    );
    return response.data;
  }

  async updateTeamMemberByID(
    teamID: number,
    userID: number,
    updateTeamUserDTO: UpdateTeamUserDTOWire
  ) {
    await backendAPI.patch(
      `teams/${teamID}/users/${userID}`,
      updateTeamUserDTO
    );
  }

  async removeTeamMember(teamID: number, userID: number) {
    await backendAPI.delete(`teams/${teamID}/users/${userID}`);
  }
}

export const teamService: TeamService = new TeamService();
