import {sumBy} from 'lodash';
import React, {useContext} from 'react';
import {Grid, Typography} from '@mui/material';
import {taskContext} from '@vesna-task-manager/web';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {TimeSpentTable} from '../../component/time-spent-table/TimeSpentTable';
import {convertSecondsToHhMmSS} from '../../utility/convert-seconds-to-hh-mm-ss';
import {AnalyticalHighlights} from '../../component/analytical-highlights/AnalyticalHighlights';

export function TimeOverviewScreen() {
  const {tasks} = useContext(taskContext);

  const allTimeSpent = tasks?.map(_ => _.timeSpent)?.flat() ?? [];
  const currentTime = convertSecondsToHhMmSS(
    sumBy(allTimeSpent, 'durationInSeconds')
  );

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
          <AnalyticalHighlights
            highlights={[
              {
                label: 'Time Spent',
                value: (
                  <>
                    {' '}
                    {currentTime.hours}:{currentTime.minutes}:
                    {currentTime.seconds}
                  </>
                ),
              },
              {
                label: 'Completed Tasks',
                value: tasks?.filter(_ => _.closedAt)?.length ?? 0,
              },
              {
                label: 'Total Tasks',
                value: tasks?.length ?? 0,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <TimeSpentTable color="black" timeSpent={allTimeSpent.reverse()} />
        </Grid>
      </Grid>
    </UserLayout>
  );
}
