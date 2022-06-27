import React, {useState} from 'react';
import {dialogMaxWidth} from '../../utility/theme.const';
import {ToggleableDialogProps} from './ToggleableDialog.types';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';

export function ToggleableDialog({
  button,
  children,
  header,
}: ToggleableDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(_ => !_);
  };

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
