import React, {useContext} from 'react';
import {sessionContext, taskContext} from '@vesna-task-manager/web';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {SiteHeader} from '../../component/site-header/SiteHeader';
import {CreateTaskDialog} from '../../component/create-task-dialog/CreateTaskDialog';

export function DashboardScreen() {
  const {session} = useContext(sessionContext);
  const {addTask} = useContext(taskContext);

  return (
    <UserLayout>
      <div className="row">
        <div className="col-6">
          <h1>Hey {session?.privateUser?.firstName}!</h1>
        </div>
        <div className="col-6 text-right">
          <CreateTaskDialog onCreation={addTask} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <SiteHeader />
        </div>
      </div>
    </UserLayout>
  );
}
