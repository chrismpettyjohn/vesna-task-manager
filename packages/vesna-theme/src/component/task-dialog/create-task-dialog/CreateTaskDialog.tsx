import React from 'react';
import {Button} from '@mui/material';
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
      key={`task_creator_${taskLabelID}`}
      defaultTask={{labelID: taskLabelID} as any}
      onSave={onCreateTask}
      hideTaskLabel={!!taskLabelID}
    >
      <Button>
        <i className="fa fa-plus-circle" style={{marginRight: 4}} />
        New Task
      </Button>
    </TaskDialogEditor>
  );
}
