import React, {useContext, useState} from 'react';
import {taskContext, taskService} from '@vesna-task-manager/web';
import {TaskListItemProps} from './TaskListItem.types';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
} from '@mui/material';

export function TaskListItem({task}: TaskListItemProps) {
  const {updateTaskByID, deleteTaskByID} = useContext(taskContext);
  const [showDeletionWarning, setShowDeletionWarning] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onCheckTaskListItem = async () => {
    updateTaskByID(task.id, {closedAt: '-'});
  };

  const onDeleteTaskListItem = async () => {
    if (!showDeletionWarning) {
      setShowDeletionWarning(true);
      return;
    }

    if (isDeleting) {
      return;
    }

    setShowDeletionWarning(false);
    setIsDeleting(true);

    try {
      await taskService.deleteByID(task.id);
      deleteTaskByID(task.id);
    } catch {
      alert('Failed to delete task');
    }

    setIsDeleting(false);
  };

  const getDeletionIcon = () => {
    if (showDeletionWarning) {
      return (
        <>
          <i className="fa fa-question-circle" style={{paddingRight: 10}} /> Are
          you sure?
        </>
      );
    }

    if (isDeleting) {
      return <i className="fa fa-spinner fa-spin" />;
    }

    return <i className="fa fa-trash" />;
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={onDeleteTaskListItem}
          disabled={isDeleting}
        >
          {getDeletionIcon()}
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={onCheckTaskListItem} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={!!task.closedAt}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={`task_${task.id}`} primary={task.name} />
      </ListItemButton>
    </ListItem>
  );
}
