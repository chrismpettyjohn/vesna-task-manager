import {toast} from 'react-toastify';
import React, {useContext} from 'react';
import {TimeTrackerItemProps} from './TimeTrackerItem.types';
import {TaskSelector} from '../../task-selector/TaskSelector';
import {Button, Grid, Typography, TextField} from '@mui/material';
import {getDurationInSeconds} from '@vesna-task-manager/web/src/utility/get-duration-in-seconds';
import {
  taskContext,
  taskService,
  taskTimeSpentContext,
  useTimer,
} from '@vesna-task-manager/web';

export function TimeTrackerItem({timeSpentIndex}: TimeTrackerItemProps) {
  const {addTimeSpentByID} = useContext(taskContext);
  const {taskTimeSpent, updateTaskTimeSpent, deleteTaskTimeSpent} =
    useContext(taskTimeSpentContext);

  const taskTimeSpentRecord = taskTimeSpent[timeSpentIndex];

  const startedAt = taskTimeSpentRecord?.startedAt ?? new Date().toISOString();
  const endedAt = new Date().toISOString();
  const defaultStartTime = getDurationInSeconds(startedAt, endedAt);

  const {timer, isActive, handleStart, handlePause} = useTimer(
    defaultStartTime,
    !!taskTimeSpentRecord?.startedAt
  );

  if (!taskTimeSpentRecord) {
    return null;
  }

  const onStart = () => {
    if (taskTimeSpentRecord.taskID === undefined) {
      toast.error('You must select a task before starting the timer!');
      return;
    }

    updateTaskTimeSpent(timeSpentIndex, {startedAt: new Date().toISOString()});
    handleStart();
  };

  const onStop = async () => {
    try {
      handlePause();
      const taskTimeSpentEndedAt = new Date().toISOString();
      const taskTimeSpentWire = await taskService.recordTimeSpentByID(
        taskTimeSpentRecord.taskID!,
        {
          startedAt: taskTimeSpentRecord.startedAt!,
          endedAt: taskTimeSpentEndedAt,
          durationInSeconds: getDurationInSeconds(
            taskTimeSpentRecord.startedAt!,
            taskTimeSpentEndedAt
          ),
          notes: taskTimeSpentRecord.notes!,
        }
      );
      toast.success(
        `Your time spent working on task #${taskTimeSpentRecord.taskID!} has been saved successfully`
      );
      deleteTaskTimeSpent(timeSpentIndex);
      addTimeSpentByID(taskTimeSpentRecord.taskID!, taskTimeSpentWire);
    } catch (e: any) {
      toast.error("Your time couldn't be saved due to an unexpected error");
      throw e;
    }
  };

  const onCancel = () => {
    toast.success('Timer canceled');
    deleteTaskTimeSpent(timeSpentIndex);
  };

  const getControlButton = () => {
    const icon = isActive ? 'stop-circle' : 'play-circle';
    const action = isActive ? onStop : onStart;
    return (
      <Grid container>
        <Grid item xs={6}>
          <Typography>
            <i
              className={`fas fa-${icon}`}
              onClick={action}
              style={{
                cursor: taskTimeSpentRecord?.taskID ? 'pointer' : 'disabled',
              }}
            />

            <span style={{marginLeft: 4}}>{timer}s</span>
          </Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          {taskTimeSpentRecord.startedAt ? (
            <Button onClick={onCancel}>Cancel</Button>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
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
      <TaskSelector
        onChange={taskID => updateTaskTimeSpent(timeSpentIndex, {taskID})}
        taskID={taskTimeSpentRecord.taskID}
      />
      <TextField
        label="Notes"
        fullWidth
        value={taskTimeSpentRecord.notes}
        multiline
        rows={2}
        onChange={(e: any) =>
          updateTaskTimeSpent(timeSpentIndex, {notes: e?.target?.value ?? ''})
        }
      />
      {getControlButton()}
    </div>
  );
}
