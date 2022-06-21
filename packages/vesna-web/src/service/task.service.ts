import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {
  CreateTaskDTOWire,
  UpdateTaskDTOWire,
  CreateTaskTimeSpentDTOWire,
  TaskWire,
  TaskTimeSpentWire,
} from '@vesna-task-manager/types';

export class TaskService {
  async getTasks(): Promise<TaskWire[]> {
    const tasksResponse: AxiosResponse<TaskWire[]> = await backendAPI.get(
      'tasks'
    );
    return tasksResponse.data;
  }

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

  async recordTimeSpentByID(
    taskID: number,
    createTaskTimeSpentDTO: CreateTaskTimeSpentDTOWire
  ): Promise<TaskTimeSpentWire> {
    const newTaskTimeSpentResponse: AxiosResponse<TaskTimeSpentWire> =
      await backendAPI.post(
        `/tasks/${taskID}/time-spent`,
        createTaskTimeSpentDTO
      );
    return newTaskTimeSpentResponse.data;
  }
}

export const taskService: TaskService = new TaskService();
