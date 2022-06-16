import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {
  CreateTaskDTOWire,
  UpdateTaskDTOWire,
  TaskWire,
} from '@vesna-task-manager/types';

export class TaskService {
  async create(createTaskDTO: CreateTaskDTOWire): Promise<TaskWire> {
    const newTaskResponse: AxiosResponse<TaskWire> = await backendAPI.post(
      'tasks',
      createTaskDTO
    );
    return newTaskResponse.data;
  }

  async updateByID(
    taskID: number,
    updateTaskDTO: UpdateTaskDTOWire
  ): Promise<void> {
    await backendAPI.patch(`tasks/${taskID}`, updateTaskDTO);
  }

  async deleteByID(taskID: number): Promise<void> {
    await backendAPI.delete(`tasks/${taskID}`);
  }
}

export const taskService: TaskService = new TaskService();
