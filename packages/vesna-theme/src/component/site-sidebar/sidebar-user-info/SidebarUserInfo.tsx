import {Link} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext} from '@vesna-task-manager/web';
import {Avatar, Box, IconButton, Typography} from '@mui/material';

export function SidebarUserInfo() {
  const {session} = useContext(sessionContext);

  if (!session) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContents: 'center',
        margin: '14px 14px',
        padding: '12px 4px',
        borderTop: '1px solid lightgray',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginRight: '18px',
          paddingLeft: '0px',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Avatar src="https://cdn.devbest.com/data/avatars/o/37/37998.jpg?1655773183" />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
        <Typography
          component="span"
          variant="body2"
          sx={{
            fontFamily: 'inherit',
            display: 'block',
            whiteSpace: 'nowrap',
            lineHeight: 'inherit',
            fontWeight: 500,
            color: 'lightgray',
          }}
        >
          {session.privateUser.firstName}{' '}
          {session.privateUser.lastName.charAt(0)}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          sx={{
            display: 'block',
            whiteSpace: 'nowrap',
            lineHeight: 'inherit',
            color: 'lightgray',
          }}
        >
          @{session.privateUser.username}
        </Typography>
      </Box>
      <Link to="/sign-out">
        <IconButton sx={{color: 'lightGray'}}>
          <i className="fa fa-sign-out-alt" />
        </IconButton>
      </Link>
    </Box>
  );
}
