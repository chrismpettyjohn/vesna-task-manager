import React, {useContext} from 'react';
import {Grid, Typography} from '@mui/material';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {activityService, taskContext} from '@vesna-task-manager/web';

export function TimeOverviewScreen() {
  const {tasks} = useContext(taskContext);

  return (
    <UserLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">
            <i className="fa fa-clock" style={{marginRight: 4}} />
            Time Overview
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </UserLayout>
  );
}
