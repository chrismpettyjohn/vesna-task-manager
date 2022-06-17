export interface CreateTaskLabelDTOWire {
  icon: string;
  name: string;
  desc: string;
}

export type UpdateTaskLabelDTOWire = Partial<CreateTaskLabelDTOWire>;
