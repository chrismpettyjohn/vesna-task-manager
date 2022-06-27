import React, {useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {teamService, useFetchHook} from '@vesna-task-manager/web';
import {TeamsTable} from '../../component/teams-table/TeamsTable';
import {LoadingBackdrop} from '../../component/loading-backdrop/LoadingBackdrop';
import {CreateTeamDialog} from '../../component/team-dialog/create-team-dialog/CreateTeamDialog';

export function TeamsOverviewScreen() {
  const [refresh, setRefresh] = useState(0);
  const teams = useFetchHook(teamService.getAll, refresh);

  const onChanges = () => {
    setRefresh(_ => _ + 1);
  };

  return (
    <UserLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h4">
                <i className="fa users" style={{marginRight: 4}} />
                My Teams
              </Typography>
            </Grid>
            <Grid item xs={6} style={{textAlign: 'right'}}>
              <CreateTeamDialog onCreated={onChanges} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {teams !== undefined ? (
            <TeamsTable teams={teams} onChanges={onChanges} />
          ) : (
            <LoadingBackdrop>Fetching Teams...</LoadingBackdrop>
          )}
        </Grid>
      </Grid>
    </UserLayout>
  );
}
