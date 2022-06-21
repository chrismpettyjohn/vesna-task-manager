import React, {useContext} from 'react';
import {Grid, Typography} from '@mui/material';
import {TaskList} from '../../component/task-list/TaskList';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {sessionContext, taskContext} from '@vesna-task-manager/web';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';

export function DashboardScreen() {
  const {session} = useContext(sessionContext);
  const {addTask, tasks} = useContext(taskContext);

  return (
    <UserLayout>
      <Grid container spacing={4}>
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
          <TaskList tasks={tasks!} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
