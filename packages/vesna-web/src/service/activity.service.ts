import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {ActivityWire} from '@vesna-task-manager/types';

export class ActivityService {
  async getActivity(): Promise<ActivityWire[]> {
    const userActivity: AxiosResponse<ActivityWire[]> = await backendAPI.get(
      'activity'
    );
    return userActivity.data;
  }
}

export const activityService: ActivityService = new ActivityService();
