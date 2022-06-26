import React from 'react';
import {Grid, Typography} from '@mui/material';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {teamService, useFetchHook} from '@vesna-task-manager/web';
import {TeamsTable} from '../../component/teams-table/TeamsTable';
import {LoadingBackdrop} from '../../component/loading-backdrop/LoadingBackdrop';

export function TeamsOverviewScreen() {
  const teams = useFetchHook(teamService.getAll);

  return (
    <UserLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4">
            <i className="fa users" style={{marginRight: 4}} />
            My Teams
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {teams !== undefined ? (
            <TeamsTable teams={teams} />
          ) : (
            <LoadingBackdrop>Fetching Teams...</LoadingBackdrop>
          )}
        </Grid>
      </Grid>
    </UserLayout>
  );
}
