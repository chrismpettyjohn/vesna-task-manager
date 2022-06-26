import {toast} from 'react-toastify';
import React, {useContext} from 'react';
import {DeleteButton} from '../../delete-button/DeleteButton';
import {DeleteTaskButtonProps} from './DeleteTaskButton.types';
import {taskContext, taskService} from '@vesna-task-manager/web';

export function DeleteTaskButton({task}: DeleteTaskButtonProps) {
  const {deleteTaskByID} = useContext(taskContext);

  const onDeleteTask = async () => {
    try {
      await taskService.deleteByID(task.id);
      deleteTaskByID(task.id);
      toast.warn(`Task #${task.id} has been deleted successfully`);
    } catch {
      toast.error(
        `Task #${task.id} couldn't be deleted due to an unexpected error`
      );
    }
  };

  return <DeleteButton onDeletion={onDeleteTask} />;
}
