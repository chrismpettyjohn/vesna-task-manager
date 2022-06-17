import React from 'react';
import {taskService} from '@vesna-task-manager/web';
import {EditTaskDialogProps} from './EditTaskDialog.types';
import {CreateTaskDTOWire} from '@vesna-task-manager/types';
import {TaskDialogEditor} from '../task-dialog-editor/TaskDialogEditor';

export function EditTaskDialog({task, onSave}: EditTaskDialogProps) {
  const onUpdateTask = async (taskChanges: CreateTaskDTOWire) => {
    await taskService.updateByID(task.id, taskChanges);
    onSave(task);
  };

  return (
    <TaskDialogEditor defaultTask={task} onSave={onUpdateTask}>
      <i className="fa fa-pencil" /> {task.name}
    </TaskDialogEditor>
  );
}
