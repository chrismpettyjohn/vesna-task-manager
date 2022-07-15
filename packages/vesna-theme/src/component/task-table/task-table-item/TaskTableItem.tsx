import {Link} from 'wouter';
import {toast} from 'react-toastify';
import React, {useContext} from 'react';
import {TaskWire} from '@vesna-task-manager/types';
import {TaskTableItemProps} from './TaskTableItem.types';
import {taskContext, taskService} from '@vesna-task-manager/web';
import {Chip, Checkbox, TableRow, TableCell} from '@mui/material';
import {formatTimestamp} from '../../../utility/format-timestamp';
import {EditTaskDialog} from '../../task-dialog/edit-task-dialog/EditTaskDialog';
import {TaskTimeSpentDialog} from '../../task-dialog/task-time-spent-dialog/TaskTimeSpentDialog';

export function TaskTableItem({task}: TaskTableItemProps) {
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
          sx={{'& .MuiSvgIcon-root': {color: 'red'}}}
        />
      </TableCell>
      <TableCell key="task">{task.name}</TableCell>
      <Link to={`/tasks-list/${taskLabel.id}`}>
        <TableCell key="taskGroup">
          <Chip
            avatar={
              <i
                className={taskLabel.icon}
                style={{color: 'white', fontSize: '1.2rem', marginTop: 4}}
              />
            }
            style={{
              background: taskLabel!.color,
              cursor: 'pointer',
              color: 'white',
            }}
            label={taskLabel.name}
          />
        </TableCell>
      </Link>
      <TableCell key="timeSpent">
        <TaskTimeSpentDialog task={task} />
      </TableCell>
      <TableCell key="createdAt">{formatTimestamp(task.createdAt)}</TableCell>
      <TableCell key="taskActions">
        <EditTaskDialog task={task} onSave={onUpdateTask} />
      </TableCell>
    </TableRow>
  );
}
