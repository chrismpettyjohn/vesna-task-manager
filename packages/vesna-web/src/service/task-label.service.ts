import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {
  CreateTaskLabelDTOWire,
  UpdateTaskLabelDTOWire,
  TaskLabelWire,
} from '@vesna-task-manager/types';

export class TaskLabelService {
  async create(
    createTaskLabelDTO: CreateTaskLabelDTOWire
  ): Promise<TaskLabelWire> {
    const newTaskResponse: AxiosResponse<TaskLabelWire> = await backendAPI.post(
      'task-labels',
      createTaskLabelDTO
    );
    return newTaskResponse.data;
  }

  async updateByID(
    taskLabelID: number,
    updateTaskDTO: UpdateTaskLabelDTOWire
  ): Promise<void> {
    await backendAPI.patch(`task-labels/${taskLabelID}`, updateTaskDTO);
  }

  async deleteByID(taskLabelID: number): Promise<void> {
    await backendAPI.delete(`task-labels/${taskLabelID}`);
  }
}

export const taskLabelService: TaskLabelService = new TaskLabelService();
