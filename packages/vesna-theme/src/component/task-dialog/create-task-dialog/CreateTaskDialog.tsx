import React from 'react';
import {taskService} from '@vesna-task-manager/web';
import {CreateTaskDTOWire} from '@vesna-task-manager/types';
import {CreateTaskDialogProps} from './CreateTaskDialog.types';
import {TaskDialogEditor} from '../task-dialog-editor/TaskDialogEditor';

export function CreateTaskDialog({
  taskLabelID,
  onCreation,
}: CreateTaskDialogProps) {
  const onCreateTask = async (newTask: CreateTaskDTOWire) => {
    const newTaskLabel = await taskService.create(newTask);
    onCreation(newTaskLabel);
  };

  return (
    <TaskDialogEditor
      defaultTask={{taskLabelID} as any}
      onSave={onCreateTask}
      hideTaskLabel={!!taskLabelID}
    >
      <i className="fa fa-plus-circle" style={{paddingRight: 4}} />
      Add Task
    </TaskDialogEditor>
  );
}
