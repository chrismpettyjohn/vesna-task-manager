import React from 'react';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {TaskLabelTabs} from '../../component/task-labels-tabs/TaskLabelsTabs';

export function DashboardScreen() {
  return (
    <UserLayout>
      <div className="row">
        <div className="col-12">
          <h1>Today's Tasks</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <TaskLabelTabs />
        </div>
      </div>
    </UserLayout>
  );
}
