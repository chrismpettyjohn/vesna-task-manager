export interface CreateMediaDTOWire {
  fileLabel: string;
  fileName: string;
  fileDesc: string;
}

export type UpdateMediaDTOWire = Partial<CreateMediaDTOWire>;
