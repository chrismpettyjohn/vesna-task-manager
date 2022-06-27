import {AxiosResponse} from 'axios';
import {backendAPI} from '../utility/api.axios';
import {
  CreateMediaDTOWire,
  MediaWire,
  UpdateMediaDTOWire,
} from '@vesna-task-manager/types';

export class MediaService {
  async getAll(): Promise<MediaWire[]> {
    const response: AxiosResponse<MediaWire[]> = await backendAPI.get('media');
    return response.data;
  }

  async createNewMedia(
    file: File,
    createNewMediaDTO: CreateMediaDTOWire
  ): Promise<MediaWire> {
    const formData = new FormData();
    formData.append('fileLabel', createNewMediaDTO.fileLabel);
    formData.append('fileDesc', createNewMediaDTO.fileDesc);
    formData.append('file', file);

    const response: AxiosResponse<MediaWire> = await backendAPI.post(
      'media',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  }

  async getByID(mediaID: number): Promise<MediaWire> {
    const response: AxiosResponse<MediaWire> = await backendAPI.get(
      `media/${mediaID}`
    );
    return response.data;
  }

  async updateByID(mediaID: number, updateMediaDTO: UpdateMediaDTOWire) {
    await backendAPI.patch(`media/${mediaID}`, updateMediaDTO);
  }

  async deleteByID(mediaID: number) {
    await backendAPI.delete(`media/${mediaID}`);
  }
}

export const mediaService: MediaService = new MediaService();
