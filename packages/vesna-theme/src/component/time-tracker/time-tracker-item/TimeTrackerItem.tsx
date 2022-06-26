import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {Typography, TextField} from '@mui/material';
import {TimeTrackerItemProps} from './TimeTrackerItem.types';
import {taskService, useTimer} from '@vesna-task-manager/web';
import {TaskSelector} from '../../task-selector/TaskSelector';

export function TimeTrackerItem({onFinish}: TimeTrackerItemProps) {
  const [note, setNote] = useState('');
  const [task, setTask] = useState<number>();
  const [timerStartedAt, setTimerStartedAt] = useState<string>();

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
    if (task !== undefined) {
      toast.error('You must select a task before starting the timer!');
      return;
    }

    setTimerStartedAt(new Date().toISOString());
    handleStart();
  };

  const onStop = async () => {
    try {
      handlePause();
      const taskTimeSpent = await taskService.recordTimeSpentByID(task!, {
        startedAt: timerStartedAt,
        endedAt: new Date().toISOString(),
        notes: note,
      });
      onFinish(taskTimeSpent);
    } catch (e: any) {
      toast.error("Your time couldn't be saved due to an unexpected error");
      throw e;
    }
  };

  const getControlButton = () => {
    const icon = isActive ? 'stop-circle' : 'play-circle';
    const action = isActive ? onStop : onStart;
    return (
      <>
        <i
          className={`fas fa-${icon}`}
          onClick={action}
          style={{cursor: task ? 'pointer' : 'disabled'}}
        />
      </>
    );
  };

  return (
    <div
      style={{
        background: '#6573c3',
        padding: 8,
        overflow: 'hidden',
        borderRadius: 8,
        width: '95%',
        margin: '0 auto',
        marginBottom: 10,
      }}
    >
      <TaskSelector onChange={setTask} taskID={task} />
      <TextField
        label="Notes"
        fullWidth
        value={note}
        multiline
        rows={2}
        onChange={(e: any) => setNote(e?.target?.value ?? '')}
      />
      <Typography>
        {getControlButton()}
        <span style={{marginLeft: 4}}>{timer}s</span>
      </Typography>
    </div>
  );
}
