export interface CreateTaskLabelDTOWire {
  icon: string;
  name: string;
  desc: string;
  color: string;
}

export type UpdateTaskLabelDTOWire = Partial<CreateTaskLabelDTOWire>;
