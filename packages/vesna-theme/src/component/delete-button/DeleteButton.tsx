import React, {useState} from 'react';
import {Button} from '@mui/material';
import {DeleteButtonProps} from './DeleteButton.types';

export function DeleteButton({onDeletion}: DeleteButtonProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const onConfirmDelete = async () => {
    if (showLoading || !showConfirmation) {
      return;
    }

    setShowConfirmation(false);
    setShowLoading(true);

    try {
      await onDeletion();
    } catch {
      // Handled by prop
    }

    setShowLoading(false);
  };

  const onDeleteFirstClick = () => {
    setShowConfirmation(true);
  };

  const getButtonLabel = () => {
    if (showConfirmation) {
      return (
        <>
          <i className="fa fa-exclamation-triangle" style={{marginRight: 4}} />
          Are you sure?
        </>
      );
    }

    if (showLoading) {
      return (
        <>
          <i className="fa fa-spinner fa-spin" style={{marginRight: 4}} />
          Deleting
        </>
      );
    }

    return (
      <>
        <i className="fa fa-trash" style={{marginRight: 4}} />
        Delete
      </>
    );
  };

  return (
    <Button
      variant="contained"
      color="error"
      disabled={showLoading}
      onClick={showConfirmation ? onConfirmDelete : onDeleteFirstClick}
    >
      {getButtonLabel()}
    </Button>
  );
}
