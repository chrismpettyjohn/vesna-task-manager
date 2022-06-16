import {Box, Tab, Tabs} from '@mui/material';
import React, {useContext, useState} from 'react';
import {taskContext} from '@vesna-task-manager/web';

export function TaskLabelTabs() {
  const {taskLabels} = useContext(taskContext);
  const [activeTab, setActiveTab] = useState(taskLabels?.[0]?.id);

  return (
    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        aria-label="active task label"
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
        />
      </Tabs>
    </Box>
  );
}
