import {toast} from 'react-toastify';
import {Grid, Typography} from '@mui/material';
import {ActivityWire} from '@vesna-task-manager/types';
import React, {useContext, useEffect, useState} from 'react';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {activityService, sessionContext} from '@vesna-task-manager/web';
import {ActivityTable} from '../../component/activity-table/ActivityTable';

export function ActivityOverviewScreen() {
  const {session} = useContext(sessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userActivity, setUserActivity] = useState<ActivityWire[]>([]);

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        setUserActivity([]);
        setIsLoading(true);

        if (!session) {
          return;
        }

        const activity = await activityService.getActivity();
        setUserActivity(activity);
      } catch {
        toast.error(
          'Activity could not be loaded at this time due to an unexpected error'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserActivity();
  }, []);

  return (
    <UserLayout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">User Activity</Typography>
        </Grid>
        <Grid item xs={12}>
          {!isLoading ? (
            <ActivityTable activity={userActivity} />
          ) : (
            <>
              <i className="fa fa-spinner fa-spin" style={{marginRight: 4}} />{' '}
              Loading Activity...
            </>
          )}
        </Grid>
      </Grid>
    </UserLayout>
  );
}
