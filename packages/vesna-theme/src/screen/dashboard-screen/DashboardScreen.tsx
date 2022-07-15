import {Grid, Typography} from '@mui/material';
import React, {useContext, useState} from 'react';
import {TaskWire} from '@vesna-task-manager/types';
import {TaskTable} from '../../component/task-table/TaskTable';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {sessionContext, taskContext} from '@vesna-task-manager/web';
import {TaskFilters} from '../../component/task-filters/TaskFilters';
import {TaskFilter} from '../../component/task-filters/TaskFilters.types';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';

export function DashboardScreen() {
  const {session} = useContext(sessionContext);
  const {addTask, tasks} = useContext(taskContext);
  const [taskFilter, setTaskFilter] = useState<TaskFilter | undefined>({
    label: 'Pending',
    value: (task: TaskWire) => task.closedAt === null,
  });

  const filteredTasks =
    tasks?.filter(task => (taskFilter ? taskFilter.value(task) : true)) ?? [];

  console.log(taskFilter);

  return (
    <UserLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TaskFilters filter={taskFilter} onChange={setTaskFilter} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h4">
                Hey {session?.privateUser?.firstName}!
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <div style={{float: 'right'}}>
                <CreateTaskDialog onCreation={addTask} />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TaskTable tasks={filteredTasks} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
