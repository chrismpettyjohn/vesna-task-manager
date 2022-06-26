export interface CreateMediaDTOWire {
  fileLabel: string;
  fileDesc: string;
}

export type UpdateMediaDTOWire = Partial<CreateMediaDTOWire>;
