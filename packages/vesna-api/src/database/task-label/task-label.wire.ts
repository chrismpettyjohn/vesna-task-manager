import {TaskLabelEntity} from './task-label.entity';
import {TaskLabelWire} from '@vesna-task-manager/types';

export function taskLabelWire(taskLabelEntity: TaskLabelEntity): TaskLabelWire {
  return {
    id: taskLabelEntity.id!,
    icon: taskLabelEntity.icon,
    name: taskLabelEntity.name,
    desc: taskLabelEntity.desc,
    color: taskLabelEntity.color,
  };
}
