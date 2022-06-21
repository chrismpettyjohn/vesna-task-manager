import React, {ReactNode, useState} from 'react';
import {ActivityResource} from '@vesna-task-manager/types';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {ActivityTableResourceViewProps} from './ActivityTableResourceView.types';
import {UserActivityResourceView} from './resource-views/UserActivityResourceView';
import {RoleActivityResourceView} from './resource-views/RoleActivityResourceView';
import {TaskActivityResourceView} from './resource-views/TaskActivityResourceView';
import {SessionActivityResourceView} from './resource-views/SessionActivityResourceView';
import {TaskLabelActivityResourceView} from './resource-views/TaskLabelActivityResourceView';

export function ActivityTableResourceView({
  activity,
}: ActivityTableResourceViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleResourceViewDialog = () => {
    setIsOpen(_ => !_);
  };

  const resourceTypeToViewMap: Record<ActivityResource, () => ReactNode> = {
    [ActivityResource.User]: () => (
      <UserActivityResourceView activity={activity} />
    ),
    [ActivityResource.Role]: () => (
      <RoleActivityResourceView activity={activity} />
    ),
    [ActivityResource.Session]: () => (
      <SessionActivityResourceView activity={activity} />
    ),
    [ActivityResource.Task]: () => (
      <TaskActivityResourceView activity={activity} />
    ),
    [ActivityResource.TaskLabel]: () => (
      <TaskLabelActivityResourceView activity={activity} />
    ),
  };

  return (
    <>
      <i
        className="fa fa-search"
        style={{cursor: 'pointer'}}
        onClick={toggleResourceViewDialog}
      />
      {isOpen && (
        <Dialog open onClose={toggleResourceViewDialog}>
          <DialogTitle>
            Viewing {activity.resource.toUpperCase()} #{activity.resourceID}
          </DialogTitle>
          <DialogContent style={{width: 500}}>
            {resourceTypeToViewMap[activity.resource]()}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
