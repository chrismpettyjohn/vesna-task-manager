import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {useTimer} from '@vesna-task-manager/web';
import {TaskWire} from '@vesna-task-manager/types';
import {TimeTrackerItemProps} from './TimeTrackerItem.types';
import {TaskSelector} from '../../task-selector/TaskSelector';

export function TimeTrackerItem({onFinish}: TimeTrackerItemProps) {
  const [task, setTask] = useState<number>();
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const onStart = () => {
    if (!task?.id) {
      toast.error('You must select a task before starting the timer!');
    }
  };

  const onStop = () => {};

  const getControlButton = () => {
    const icon = isActive ? 'stop-circle' : 'play-circle';
    const action = isActive ? onStop : handleStart;
    return (
      <i
        className={icon}
        onClick={action}
        style={{cursor: task?.id ? 'pointer' : 'disabled'}}
      />
    );
  };

  return (
    <>
      <TaskSelector onChange={setTask} taskID={task?.id} />
      {getControlButton()}
    </>
  );
}
