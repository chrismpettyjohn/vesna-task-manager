import React, {useState} from 'react';
import {formatTimestamp} from '../../../utility/format-timestamp';
import {ActivityTableResourceViewProps} from './ActivityTableResourceView.types';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

export function ActivityTableResourceView({
  activity,
}: ActivityTableResourceViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleResourceViewDialog = () => {
    setIsOpen(_ => !_);
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
            Viewing {activity.resource} #{activity.resourceID}
          </DialogTitle>
          <DialogContent style={{width: 500}}>
            <div style={{marginBottom: 10}}>
              <Typography variant="h5">Action</Typography>
              <Typography>{activity.action}</Typography>
            </div>
            {activity.changes && (
              <div style={{marginBottom: 10}}>
                <Typography variant="h5">Changes</Typography>
                <Box
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    padding: 4,
                  }}
                >
                  <Typography>
                    <pre>
                      <code>
                        {activity.changes
                          ? JSON.stringify(activity.changes, null, 4)
                          : ''}
                      </code>
                    </pre>
                  </Typography>
                </Box>
              </div>
            )}
            <div style={{marginBottom: 10}}>
              <Typography variant="h5">Timestamp</Typography>
              <Typography>{formatTimestamp(activity.createdAt)}</Typography>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
