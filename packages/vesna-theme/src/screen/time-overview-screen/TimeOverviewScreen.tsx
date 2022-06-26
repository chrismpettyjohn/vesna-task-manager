import {sumBy} from 'lodash';
import React, {useContext} from 'react';
import {Grid, Typography} from '@mui/material';
import {taskContext} from '@vesna-task-manager/web';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {TimeSpentTable} from '../../component/time-spent-table/TimeSpentTable';

export function TimeOverviewScreen() {
  const {tasks} = useContext(taskContext);

  const allTimeSpent = tasks?.map(_ => _.timeSpent)?.flat() ?? [];

  return (
    <UserLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">
            <i className="fa fa-clock" style={{marginRight: 4}} />
            Time Overview
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <div
                style={{
                  padding: 4,
                  border: '1px solid black',
                  borderRadius: 4,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4">
                  {sumBy(allTimeSpent, 'durationInSeconds')}s
                </Typography>
                <Typography variant="subtitle1">Time Spent</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  padding: 4,
                  border: '1px solid black',
                  borderRadius: 4,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4">
                  {tasks?.filter(_ => _.closedAt)?.length}
                </Typography>
                <Typography variant="subtitle1">Completed Tasks</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  padding: 4,
                  border: '1px solid black',
                  borderRadius: 4,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4">{tasks?.length}</Typography>
                <Typography variant="subtitle1">Total Tasks</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TimeSpentTable color="black" timeSpent={allTimeSpent} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
