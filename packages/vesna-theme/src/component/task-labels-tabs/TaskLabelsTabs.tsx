import React, {useContext} from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import {taskContext} from '@vesna-task-manager/web';

export function TaskLabelTabs() {
  const {taskLabels} = useContext(taskContext);

  return (
    <Tabs id="task-labels" className="mb-3">
      {taskLabels?.map(_ => (
        <Tab key={`tab_${_.id}`} eventKey={`tab_${_.id}`} title={_.name}>
          {_.name}
        </Tab>
      ))}
    </Tabs>
  );
}
