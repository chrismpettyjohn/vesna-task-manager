import Select from 'react-select';
import React, {useContext} from 'react';
import {taskContext} from '@vesna-task-manager/web';
import {TaskLabelSelectorProps} from './TaskLabelSelector.types';

export function TaskLabelSelector({
  taskLabelID,
  onChange,
}: TaskLabelSelectorProps) {
  const {taskLabels} = useContext(taskContext);
  const taskLabelOptions = taskLabels?.map(_ => ({
    label: _.name,
    value: _.id as any,
  }));
  return (
    <Select
      options={taskLabelOptions}
      value={taskLabelOptions?.find(_ => _.value === taskLabelID)}
      onChange={onChange as any}
    />
  );
}
