import React from 'react';
import {Grid, Typography} from '@mui/material';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {activityService, useFetchHook} from '@vesna-task-manager/web';
import {ActivityTable} from '../../component/activity-table/ActivityTable';
import {LoadingBackdrop} from '../../component/loading-backdrop/LoadingBackdrop';
import {AnalyticalHighlights} from '../../component/analytical-highlights/AnalyticalHighlights';

export function ActivityOverviewScreen() {
  const userActivity = useFetchHook(activityService.getActivity);

  return (
    <UserLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">User Activity</Typography>
        </Grid>
        <Grid item xs={12}>
          <AnalyticalHighlights
            highlights={[
              {
                label: 'Total Actions',
                value: userActivity?.length ?? 0,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          {userActivity !== undefined ? (
            <ActivityTable activity={userActivity} />
          ) : (
            <LoadingBackdrop>Fetching Activity...</LoadingBackdrop>
          )}
        </Grid>
      </Grid>
    </UserLayout>
  );
}
