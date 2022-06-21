import {Link} from 'wouter';
import {toast} from 'react-toastify';
import React, {useContext} from 'react';
import {TaskWire} from '@vesna-task-manager/types';
import {taskContext, taskService} from '@vesna-task-manager/web';
import {TaskListItemProps} from './TaskListItem.types';
import {Chip, Checkbox, TableRow, TableCell} from '@mui/material';
import {EditTaskDialog} from '../../task-dialog/edit-task-dialog/EditTaskDialog';
import {DeleteTaskDialog} from '../../task-dialog/delete-task-dialog/DeleteTaskDialog';

export function TaskListItem({task}: TaskListItemProps) {
  const {updateTaskByID, deleteTaskByID, taskLabels} = useContext(taskContext);

  const taskLabel = taskLabels!.find(_ => _.id === task.labelID);

  if (!taskLabel) {
    return null;
  }

  const onUpdateTaskClosed = async () => {
    const closedAt = task.closedAt ? null : new Date().toISOString();
    await taskService.updateByID(task.id, {closedAt} as any);
    updateTaskByID(task.id, {closedAt});

    return closedAt
      ? toast.success(`Task #${task.id} has been marked as completed`)
      : toast.warning(`Task #${task.id} has been marked as pending`);
  };

  const onUpdateTask = (updatedTask: TaskWire) => {
    updateTaskByID(task.id, updatedTask);
  };

  return (
    <TableRow key={`task_${task.id}`} hover role="checkbox" tabIndex={-1}>
      <TableCell key="endedAt">
        <Checkbox
          edge="start"
          checked={!!task.closedAt}
          tabIndex={-1}
          disableRipple
          onClick={onUpdateTaskClosed}
        />
      </TableCell>
      <TableCell key="task">{task.name}</TableCell>
      <Link to={`/tasks-list/${taskLabel.id}`}>
        <TableCell key="taskGroup">
          <Chip
            style={{
              background: taskLabel!.color,
              cursor: 'pointer',
              color: 'white',
            }}
            label={taskLabel.name}
          />
        </TableCell>
      </Link>
      <TableCell key="taskActions">
        <div style={{display: 'flex'}}>
          <div style={{marginRight: 10}}>
            <EditTaskDialog task={task} onSave={onUpdateTask} />
          </div>
          <div style={{marginRight: 10}}>
            <DeleteTaskDialog
              task={task}
              onDeletion={() => deleteTaskByID(task.id)}
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
