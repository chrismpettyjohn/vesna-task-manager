import React from 'react';
import {useModalHook} from '@vesna-task-manager/web';
import {dialogMaxWidth} from '../../utility/theme.const';
import {ToggleableDialogProps} from './ToggleableDialog.types';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';

export function ToggleableDialog({
  button,
  children,
  header,
}: ToggleableDialogProps) {
  const {isOpen, onToggle} = useModalHook();

  return (
    <>
      <div onClick={onToggle} style={{cursor: 'pointer'}}>
        {button}
      </div>
      {isOpen && (
        <Dialog open onClose={onToggle} maxWidth="lg">
          <DialogTitle>{header}</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            {children}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
