import React, {useContext} from 'react';
import {List, Divider} from '@mui/material';
import {TaskLabelWire} from '@vesna-task-manager/types';
import {taskContext, UserGuard} from '@vesna-task-manager/web';
import {SidebarMenuItem} from '../sidebar-menu-item/SidebarMenuItem';
import {CreateTaskLabelDialog} from '../../task-label-dialog/create-task-label-dialog/CreateTaskLabelDialog';

export function SidebarTaskLabels() {
  const {taskLabels, addTaskLabel} = useContext(taskContext);

  const onCreateTaskLabel = (newTaskLabel: TaskLabelWire) => {
    addTaskLabel(newTaskLabel);
  };

  return (
    <UserGuard redirect={false}>
      <List dense={true} subheader={<Divider style={{background: 'white'}} />}>
        {taskLabels?.map(label => (
          <SidebarMenuItem
            key={`task_labels_link_${label.id}`}
            link={`/tasks-list/${label.id}`}
            icon={label.icon}
            iconColor={label.color}
          >
            {label.name}
          </SidebarMenuItem>
        ))}
        <CreateTaskLabelDialog onCreation={onCreateTaskLabel} />
      </List>
    </UserGuard>
  );
}
