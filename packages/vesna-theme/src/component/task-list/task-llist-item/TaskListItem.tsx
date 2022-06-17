import React, {useContext, useState} from 'react';
import {taskContext, taskService} from '@vesna-task-manager/web';
import {TaskListItemProps} from './TaskListItem.types';
import {Badge, Checkbox, IconButton, TableRow, TableCell} from '@mui/material';
import {TaskDialogEditor} from '../../task-dialog/task-dialog-editor/TaskDialogEditor';

export function TaskListItem({task}: TaskListItemProps) {
  const {updateTaskByID, deleteTaskByID, taskLabels} = useContext(taskContext);
  const [showDeletionWarning, setShowDeletionWarning] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const taskLabel = taskLabels!.find(_ => _.id === task.labelID);

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
    <TableRow key={`task_${task.id}`} hover role="checkbox" tabIndex={-1}>
      <TableCell key="endedAt">
        <Checkbox
          edge="start"
          checked={!!task.closedAt}
          tabIndex={-1}
          disableRipple
        />
      </TableCell>
      <TableCell key="task">{task.name}</TableCell>
      <TableCell key="taskGroup">
        <Badge style={{background: taskLabel!.color}}>{taskLabel!.name}</Badge>
      </TableCell>
      <TableCell key="taskActions">
        <TaskDialogEditor onSave={onCreateTask}>
          <i className="fa fa-plus-circle" style={{paddingRight: 4}} />
          Add Task
        </TaskDialogEditor>
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={onDeleteTaskListItem}
          disabled={isDeleting}
        >
          {getDeletionIcon()}
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
