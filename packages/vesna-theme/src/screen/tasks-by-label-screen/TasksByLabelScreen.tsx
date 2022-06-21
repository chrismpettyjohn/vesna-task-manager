import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {useRoute, useLocation, Redirect} from 'wouter';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {TaskList} from '../../component/task-list/TaskList';
import {SiteHeader} from '../../component/site-header/SiteHeader';
import {UserLayout} from '../../component/user-layout/UserLayout';
import {CreateTaskDialog} from '../../component/task-dialog/create-task-dialog/CreateTaskDialog';
import {EditTaskLabelDialog} from '../../component/task-label-dialog/edit-task-label-dialog/EditTaskLabelDialog';

export function TasksByLabelScreen() {
  const [location, setLocation] = useLocation();
  const [match, params] = useRoute<{taskLabelID: string}>(
    '/tasks-list/:taskLabelID'
  );
  const {addTask, tasks, taskLabels, updateTaskLabelByID, deleteTaskLabelByID} =
    useContext(taskContext);

  if (!match) {
    return <Redirect to="/dashboard" />;
  }

  const taskLabel = taskLabels?.find(_ => _.id === Number(params!.taskLabelID));

  const tasksUnderTaskLabel = tasks?.filter(
    _ => _.labelID === Number(params!.taskLabelID)
  );

  const onUpdateTaskLabel = (updatedTaskLabel: TaskLabelWire) => {
    updateTaskLabelByID(taskLabel?.id!, updatedTaskLabel);
  };

  const onDeleteTaskLabel = (taskLabelID: number) => {
    deleteTaskLabelByID(taskLabelID);
    setLocation('/dashboard');
  };

  if (!taskLabel) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <UserLayout>
      <div className="row">
        <div className="col-6">
          <h1>
            <i
              className={taskLabel.icon}
              style={{color: taskLabel?.color, marginRight: 10}}
            />
            {taskLabel.name}
            <EditTaskLabelDialog
              taskLabel={taskLabel}
              onUpdate={onUpdateTaskLabel}
              onDelete={onDeleteTaskLabel}
            />
          </h1>
        </div>
        <div className="col-6">
          <div style={{float: 'right'}}>
            <CreateTaskDialog
              onCreation={addTask}
              taskLabelID={taskLabel.id!}
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
