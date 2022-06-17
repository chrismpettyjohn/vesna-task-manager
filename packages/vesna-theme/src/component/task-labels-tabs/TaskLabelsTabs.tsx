import {Box, Tab, Tabs} from '@mui/material';
import React, {useContext, useState} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {CreateTaskLabelDialog} from '../create-task-label-dialog/CreateTaskLabelDialog';

export function TaskLabelTabs() {
  const [isCreateTaskLabelDialogOpen, setIsCreateTaskLabelDialogOpen] =
    useState(false);
  const {taskLabels, addTaskLabel} = useContext(taskContext);
  const [activeTab, setActiveTab] = useState(taskLabels?.[0]?.id);

  const toggleCreateTaskLabelDialog = () => {
    setIsCreateTaskLabelDialogOpen(_ => !_);
  };

  return (
    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        aria-label="active task label"
        textColor="secondary"
        indicatorColor="secondary"
        variant="fullWidth"
        centered
      >
        {taskLabels?.map(_ => (
          <Tab key={`tab_${_.id}`} label={_.name} value={_.id} />
        ))}
        <Tab
          label={
            <div className="d-flex">
              <i
                className="fa fa-plus-circle"
                style={{marginRight: 4, marginTop: 2}}
              />{' '}
              Create
            </div>
          }
          value="create_label"
          onClick={toggleCreateTaskLabelDialog}
        />
      </Tabs>
      <CreateTaskLabelDialog
        onCreation={addTaskLabel}
        isOpen={isCreateTaskLabelDialogOpen}
        onClose={toggleCreateTaskLabelDialog}
      />
    </Box>
  );
}
