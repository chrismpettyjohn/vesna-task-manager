import React from 'react';
import {toast} from 'react-toastify';
import {taskService} from '@vesna-task-manager/web';
import {DeleteButton} from '../../delete-button/DeleteButton';
import {DeleteTaskButtonProps} from './DeleteTaskButton.types';

export function DeleteTaskButton({task, onDeletion}: DeleteTaskButtonProps) {
  const onDeleteTask = async () => {
    try {
      await taskService.deleteByID(task.id);
      onDeletion();
      toast.warn(`Task #${task.id} has been deleted successfully`);
    } catch {
      toast.error(
        `Task #${task.id} couldn't be deleted due to an unexpected error`
      );
    }
  };

  return <DeleteButton onDeletion={onDeleteTask} />;
}
