import React, {useContext} from 'react';
import {useRoute, Redirect} from 'wouter';
import {TaskList} from '../../component/task-list/TaskList';
import {SiteHeader} from '../../component/site-header/SiteHeader';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {sessionContext, taskContext} from '@vesna-task-manager/web';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';

export function TasksByLabelScreen() {
  const [match, params] = useRoute<{taskLabelID: string}>(
    '/tasks-list/:taskLabelID'
  );
  const {session} = useContext(sessionContext);
  const {addTask, tasks, taskLabels} = useContext(taskContext);

  if (!match) {
    return <Redirect to="/dashboard" />;
  }

  const taskLabel = taskLabels?.find(_ => _.id === Number(params!.taskLabelID));

  const tasksUnderTaskLabel = tasks?.filter(
    _ => _.labelID === Number(params!.taskLabelID)
  );

  return (
    <UserLayout>
      <div className="row">
        <div className="col-6">
          <h1>{taskLabel?.name}</h1>
        </div>
        <div className="col-6">
          <div style={{float: 'right'}}>
            <CreateTaskDialog
              onCreation={addTask}
              taskLabelID={taskLabel?.id!}
            />
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
          <TaskList tasks={tasksUnderTaskLabel ?? []} />
        </div>
      </div>
    </UserLayout>
  );
}
