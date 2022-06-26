export interface CreateTeamDTOWire {
  name: string;
  desc: string;
  icon: string;
}

export type UpdateTeamDTOWire = Partial<CreateTeamDTOWire>;
