export interface CreateTaskDTOWire {
  taskLabelID: number;
  name: string;
  content: string;
}

export type UpdateTaskDTOWire = Partial<CreateTaskDTOWire>;
