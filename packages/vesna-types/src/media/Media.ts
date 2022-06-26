import {Timestamp} from '../utility/Timestamp';

export enum MediaType {
  Photo = 'photo',
  Video = 'video',
}

export interface MediaWire {
  id: number;
  userID: number;
  fileLabel: string;
  fileName: string;
  fileDesc: string;
  fileType: MediaType;
  fileURL: string;
  createdAt: Timestamp;
}

export const exampleMediaWire: MediaWire = {
  id: 1,
  userID: 1,
  fileLabel: 'Profile Picture',
  fileName: 'profile_pic_123.png',
  fileDesc: 'profile pic for test user',
  fileType: MediaType.Photo,
  fileURL: 'https://awss3bucket/photo.png?signed',
  createdAt: '',
};
