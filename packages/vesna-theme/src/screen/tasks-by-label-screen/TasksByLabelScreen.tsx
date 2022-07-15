import {Grid, Typography} from '@mui/material';
import React, {useContext, useState} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {useRoute, useLocation, Redirect} from 'wouter';
import {TaskTable} from '../../component/task-table/TaskTable';
import {TaskLabelWire, TaskWire} from '@vesna-task-manager/types';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {TaskFilters} from '../../component/task-filters/TaskFilters';
import {TaskFilter} from '../../component/task-filters/TaskFilters.types';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';
import {EditTaskLabelDialog} from '../../component/task-label-dialog/edit-task-label-dialog/EditTaskLabelDialog';

export function TasksByLabelScreen() {
  const [location, setLocation] = useLocation();
  const [match, params] = useRoute<{taskLabelID: string}>(
    '/tasks-list/:taskLabelID'
  );
  const {addTask, tasks, taskLabels, updateTaskLabelByID, deleteTaskLabelByID} =
    useContext(taskContext);

  const [taskFilter, setTaskFilter] = useState<TaskFilter | undefined>({
    label: 'Pending',
    value: (task: TaskWire) => task.closedAt === null,
  });

  if (!match) {
    return <Redirect to="/dashboard" />;
  }

  const taskLabel = taskLabels?.find(_ => _.id === Number(params!.taskLabelID));

  const tasksUnderTaskLabel = tasks?.filter(
    _ => _.labelID === Number(params!.taskLabelID)
  );

  const filteredTasks =
    tasksUnderTaskLabel?.filter(task =>
      taskFilter ? taskFilter.value(task) : true
    ) ?? [];

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
          <Grid item xs={12}>
            <TaskFilters filter={taskFilter} onChange={setTaskFilter} />
          </Grid>
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
          <TaskTable tasks={filteredTasks ?? []} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
