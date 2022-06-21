import React from 'react';
import {Button} from '@mui/material';
import {toast} from 'react-toastify';
import {taskLabelService} from '@vesna-task-manager/web';
import {CreateTaskLabelDTOWire} from '@vesna-task-manager/types';
import {EditTaskLabelDialogProps} from './EditTaskLabelDialog.types';
import {TaskLabelDialogEditor} from '../task-label-dialog-editor/TaskLabelDialogEditor';

export function EditTaskLabelDialog({
  taskLabel,
  onUpdate,
  onDelete,
}: EditTaskLabelDialogProps) {
  const onEditTaskLabel = async (
    createTaskLabelDTO: CreateTaskLabelDTOWire
  ) => {
    await taskLabelService.updateByID(taskLabel.id, createTaskLabelDTO);
    onUpdate({...taskLabel, ...createTaskLabelDTO});
    toast.success(
      `Your changes to task label #${taskLabel.name} have been saved succesfully!`
    );
  };
  return (
    <TaskLabelDialogEditor
      defaultTaskLabel={taskLabel}
      onSave={onEditTaskLabel}
      onDelete={onDelete}
    >
      <Button color="secondary" size="large">
        <i className="fa fa-pencil" />
      </Button>
    </TaskLabelDialogEditor>
  );
}
