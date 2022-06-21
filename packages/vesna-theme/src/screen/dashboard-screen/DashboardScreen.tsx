import {Grid} from '@mui/material';
import React, {useContext} from 'react';
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
              <h1>Hey {session?.privateUser?.firstName}!</h1>
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
