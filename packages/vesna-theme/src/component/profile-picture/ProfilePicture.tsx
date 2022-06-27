import {sessionContext} from '@vesna-task-manager/web';
import {Avatar, Box, Menu, MenuItem} from '@mui/material';
import React, {useContext, useState, MouseEvent} from 'react';
import {UpdateProfilePictureDialog} from './update-profile-picture-dialog/UpdateProfilePictureDialog';

export function ProfilePicture() {
  const {session} = useContext(sessionContext);
  const [profilePictureActionsAnchor, setProfilePictureActionsAnchor] =
    useState<HTMLElement>();
  const [showProfilePictureActions, setShowProfilePictureActions] =
    useState(false);

  const onToggleProfilePictureActions = (event: MouseEvent<HTMLElement>) => {
    setShowProfilePictureActions(_ => {
      const isOpen = !_;

      setProfilePictureActionsAnchor(isOpen ? event.currentTarget : undefined);

      return isOpen;
    });
  };

  return (
    <>
      <Box
        id="profile-picture"
        aria-controls={
          showProfilePictureActions ? 'profile-picture-actions' : undefined
        }
        aria-haspopup={true}
        aria-expanded={showProfilePictureActions ? true : undefined}
        onClick={onToggleProfilePictureActions}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          marginRight: '18px',
          paddingLeft: '0px',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Avatar src="https://cdn.devbest.com/data/avatars/o/37/37998.jpg?1655773183" />
      </Box>
      {showProfilePictureActions && (
        <Menu
          id="profile-picture-actions"
          aria-labelledby="profile-picture"
          open
          anchorEl={profilePictureActionsAnchor}
          onClose={onToggleProfilePictureActions}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <UpdateProfilePictureDialog>
            <MenuItem>Update Profile Picture</MenuItem>
          </UpdateProfilePictureDialog>
        </Menu>
      )}
    </>
  );
}
