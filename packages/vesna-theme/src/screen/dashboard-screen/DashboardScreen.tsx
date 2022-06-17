import React, {useContext} from 'react';
import {TaskList} from '../../component/task-list/TaskList';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {SiteHeader} from '../../component/site-header/SiteHeader';
import {sessionContext, taskContext} from '@vesna-task-manager/web';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';

export function DashboardScreen() {
  const {session} = useContext(sessionContext);
  const {addTask, tasks} = useContext(taskContext);

  return (
    <UserLayout>
      <div className="row">
        <div className="col-6">
          <h1>Hey {session?.privateUser?.firstName}!</h1>
        </div>
        <div className="col-6">
          <div style={{float: 'right'}}>
            <CreateTaskDialog onCreation={addTask} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <SiteHeader />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <TaskList tasks={tasks!} />
        </div>
      </div>
    </UserLayout>
  );
}
