import React from 'react';
import {toast} from 'react-toastify';
import {taskService} from '@vesna-task-manager/web';
import {CreateTaskDTOWire} from '@vesna-task-manager/types';
import {CreateTaskDialogProps} from './CreateTaskDialog.types';
import {TaskDialogEditor} from '../task-dialog-editor/TaskDialogEditor';

export function CreateTaskDialog({
  taskLabelID,
  onCreation,
}: CreateTaskDialogProps) {
  const onCreateTask = async (newTaskDTO: CreateTaskDTOWire) => {
    const newTask = await taskService.create(newTaskDTO);
    onCreation(newTask);
    toast.success(`You have successfully created a new task #${newTask.id}`);
  };

  return (
    <TaskDialogEditor
      defaultTask={{labelID: taskLabelID} as any}
      onSave={onCreateTask}
      hideTaskLabel={!!taskLabelID}
    >
      <i className="fa fa-plus-circle" style={{paddingRight: 4}} />
    </TaskDialogEditor>
  );
}
