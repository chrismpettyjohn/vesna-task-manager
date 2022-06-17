import React from 'react';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDTOWire} from '@vesna-task-manager/types';
import {CreateTaskLabelDialogProps} from './CreateTaskLabelDialog.types';
import {TaskLabelDialogEditor} from '../task-label-dialog-editor/TaskLabelDialogEditor';

export function CreateTaskLabelDialog({
  onCreation,
}: CreateTaskLabelDialogProps) {
  const onCreateTaskLabel = async (
    createTaskLabelDTO: CreateTaskLabelDTOWire
  ) => {
    const newTaskLabel = await taskLabelService.create(createTaskLabelDTO);
    onCreation(newTaskLabel);
  };
  return (
    <TaskLabelDialogEditor onSave={onCreateTaskLabel}>
      <i className="fa fa-plus-circle" style={{marginRight: 10}} />
      Add Group
    </TaskLabelDialogEditor>
  );
}
