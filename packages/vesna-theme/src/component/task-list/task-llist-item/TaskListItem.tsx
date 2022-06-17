import React, {useContext} from 'react';
import {TaskWire} from '@vesna-task-manager/types';
import {taskContext} from '@vesna-task-manager/web';
import {TaskListItemProps} from './TaskListItem.types';
import {Badge, Checkbox, TableRow, TableCell} from '@mui/material';
import {EditTaskDialog} from '../../task-dialog/edit-task-dialog/EditTaskDialog';
import {DeleteTaskButton} from '../../delete-task-button/DeleteTaskButton';

export function TaskListItem({task}: TaskListItemProps) {
  const {updateTaskByID, deleteTaskByID, taskLabels} = useContext(taskContext);

  const taskLabel = taskLabels!.find(_ => _.id === task.labelID);

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
        />
      </TableCell>
      <TableCell key="task">{task.name}</TableCell>
      <TableCell key="taskGroup">
        <Badge
          className="p-2"
          style={{background: taskLabel!.color, color: 'white'}}
        >
          {taskLabel!.name}
        </Badge>
      </TableCell>
      <TableCell key="taskActions">
        <div className="d-flex">
          <div style={{marginRight: 10}}>
            <EditTaskDialog task={task} onSave={onUpdateTask} />
          </div>
          <div style={{marginRight: 10}}>
            <DeleteTaskButton
              task={task}
              onDeletion={() => deleteTaskByID(task.id)}
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
