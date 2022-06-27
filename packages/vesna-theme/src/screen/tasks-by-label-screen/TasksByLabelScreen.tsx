import React, {useContext} from 'react';
import {Grid, Typography} from '@mui/material';
import {taskContext} from '@vesna-task-manager/web';
import {useRoute, useLocation, Redirect} from 'wouter';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {TaskTable} from '../../component/task-table/TaskTable';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';
import {EditTaskLabelDialog} from '../../component/task-label-dialog/edit-task-label-dialog/EditTaskLabelDialog';

export function TasksByLabelScreen() {
  const [location, setLocation] = useLocation();
  const [match, params] = useRoute<{taskLabelID: string}>(
    '/tasks-list/:taskLabelID'
  );
  const {addTask, tasks, taskLabels, updateTaskLabelByID, deleteTaskLabelByID} =
    useContext(taskContext);

  if (!match) {
    return <Redirect to="/dashboard" />;
  }

  const taskLabel = taskLabels?.find(_ => _.id === Number(params!.taskLabelID));

  const tasksUnderTaskLabel = tasks?.filter(
    _ => _.labelID === Number(params!.taskLabelID)
  );

  const onUpdateTaskLabel = (updatedTaskLabel: TaskLabelWire) => {
    updateTaskLabelByID(taskLabel!.id, updatedTaskLabel);
  };

  const onDeleteTaskLabel = (taskLabelID: number) => {
    deleteTaskLabelByID(taskLabelID);
    setLocation('/dashboard');
  };

  if (!taskLabel) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <UserLayout>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4">
              <i
                className={taskLabel.icon}
                style={{color: taskLabel?.color, marginRight: 10}}
              />
              {taskLabel.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div style={{float: 'right'}}>
              <EditTaskLabelDialog
                taskLabel={taskLabel}
                onUpdate={onUpdateTaskLabel}
                onDelete={onDeleteTaskLabel}
              />
              <CreateTaskDialog
                onCreation={addTask}
                taskLabelID={taskLabel.id!}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TaskTable tasks={tasksUnderTaskLabel ?? []} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
