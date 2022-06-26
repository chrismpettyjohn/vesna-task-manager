import React from 'react';
import {toast} from 'react-toastify';
import {Button} from '@mui/material';
import {taskService} from '@vesna-task-manager/web';
import {EditTaskDialogProps} from './EditTaskDialog.types';
import {CreateTaskDTOWire} from '@vesna-task-manager/types';
import {TaskDialogEditor} from '../task-dialog-editor/TaskDialogEditor';

export function EditTaskDialog({task, onSave}: EditTaskDialogProps) {
  const onUpdateTask = async (taskChanges: CreateTaskDTOWire) => {
    await taskService.updateByID(task.id, taskChanges);
    onSave(task);
    toast.success(
      `Your changes to task #${task.id} have been saved successfully!`
    );
  };

  return (
    <TaskDialogEditor defaultTask={task} onSave={onUpdateTask}>
      <Button>
        <i className="fa fa-pencil" style={{marginRight: 4}} />
        Edit
      </Button>
    </TaskDialogEditor>
  );
}
