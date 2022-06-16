export interface CreateTaskLabelDTOWire {
  name: string;
  desc: string;
}

export type UpdateTaskLabelDTOWire = Partial<CreateTaskLabelDTOWire>;
