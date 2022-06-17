import React from 'react';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDTOWire} from '@vesna-task-manager/types';
import {EditTaskLabelDialogProps} from './EditTaskLabelDialog.types';
import {TaskLabelDialogEditor} from '../task-label-dialog-editor/TaskLabelDialogEditor';

export function EditTaskLabelDialog({
  taskLabel,
  onCreation,
}: EditTaskLabelDialogProps) {
  const onCreateTaskLabel = async (
    createTaskLabelDTO: CreateTaskLabelDTOWire
  ) => {
    const newTaskLabel = await taskLabelService.create(createTaskLabelDTO);
    onCreation(newTaskLabel);
  };
  return (
    <TaskLabelDialogEditor
      defaultTaskLabel={taskLabel}
      onSave={onCreateTaskLabel}
    >
      <i className="fa fa-pencil" />
    </TaskLabelDialogEditor>
  );
}
