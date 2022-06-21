import React from 'react';
import {toast} from 'react-toastify';
import {taskLabelService} from '@vesna-task-manager/web';
import {DeleteButton} from '../../delete-button/DeleteButton';
import {DeleteTaskLabelButtonProps} from './DeleteTaskLabelButton.types';

export function DeleteTaskLabelButton({
  taskLabel,
  onDeletion,
}: DeleteTaskLabelButtonProps) {
  const onDeleteTaskLabel = async (taskLabelID: number) => {
    try {
      await taskLabelService.deleteByID(taskLabel.id);
      toast.warn(
        `Task label ${taskLabel.name} and its tasks have been deleted`
      );
      onDeletion(taskLabelID);
    } catch {
      toast.error(
        `Failed to delete Task Label ${taskLabel.name} due to an unexpected error`
      );
    }
  };

  return <DeleteButton onDeletion={() => onDeleteTaskLabel(taskLabel.id)} />;
}
