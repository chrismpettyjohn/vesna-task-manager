import Axios, {AxiosInstance} from 'axios';
import {localStorageService} from '../service/local-storage.service';

export const backendAPI: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API ?? '/api',
});

export function setAPIToken(bearerToken?: string): void {
  // @ts-ignore - Authorization is a custom header we define
  backendAPI.defaults.headers.Authorization = `Bearer ${bearerToken}`;
  localStorageService.set('SESSION', bearerToken);
}
