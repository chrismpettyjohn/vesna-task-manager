import React from 'react';
import {ToggleableDialog} from '../../togglable-dialog/ToggleableDialog';
import {UpdateProfilePictureDialogProps} from './UpdateProfilePictureDialog.types';

export function UpdateProfilePictureDialog({
  children,
}: UpdateProfilePictureDialogProps) {
  return (
    <ToggleableDialog button={children} header="Update Profile Picture">
      REEEE
    </ToggleableDialog>
  );
}
