import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {dialogMaxWidth} from '../../../utility/theme.const';
import {IconSelector} from '../../icon-selector/IconSelector';
import {TeamDialogEditorProps} from './TeamDialogEditor.types';
import {DeleteTeamButton} from '../delete-team-button/DeleteTeamButton';
import {
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';
import {useModalHook} from '@vesna-task-manager/web';

export function TeamDialogEditor({
  children,
  defaultTeam,
  onSave,
  onDelete = () => {},
}: TeamDialogEditorProps) {
  const {isOpen, onToggle} = useModalHook();
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState(defaultTeam?.name ?? '');
  const [teamDesc, setTeamDesc] = useState(defaultTeam?.desc ?? '');
  const [teamIcon, setTeamIcon] = useState(defaultTeam?.icon ?? '');

  const resetState = () => {
    onToggle();
    setIsLoading(false);
    setTeamName(defaultTeam?.name ?? '');
    setTeamDesc(defaultTeam?.desc ?? '');
    setTeamIcon(defaultTeam?.icon ?? '');
  };

  const checkTaskLabelInput = (): boolean => {
    const dataErrors: string[] = [];

    if (!teamName) {
      dataErrors.push("Name can't be empty");
    }

    if (!teamDesc) {
      dataErrors.push("Description can't be empty");
    }

    if (!teamIcon) {
      dataErrors.push('You have to select an icon');
    }

    for (const dataError of dataErrors) {
      toast.error(dataError);
    }

    return dataErrors.length === 0;
  };

  const onSaveTeam = async () => {
    setIsLoading(true);
    try {
      const isInputValid = checkTaskLabelInput();

      if (!isInputValid) {
        return;
      }

      await onSave({
        name: teamName,
        desc: teamDesc,
        icon: teamIcon,
      });
      resetState();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <span onClick={onToggle}> {children}</span>
      {isOpen && (
        <Dialog open onClose={onToggle} maxWidth="lg">
          <DialogTitle>Team</DialogTitle>
          <DialogContent style={{width: dialogMaxWidth}}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  type="text"
                  fullWidth
                  margin="dense"
                  variant="standard"
                  InputLabelProps={{shrink: true}}
                  value={teamName}
                  onChange={e => setTeamName(e?.target?.value ?? '')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Desc"
                  multiline
                  rows={4}
                  fullWidth
                  margin="dense"
                  variant="standard"
                  value={teamDesc}
                  InputLabelProps={{shrink: true}}
                  onChange={e => setTeamDesc(e?.target?.value ?? '')}
                />
              </Grid>
              <Grid item xs={12}>
                <b>Icon</b>
                <IconSelector icon={teamIcon} onChange={setTeamIcon} />
              </Grid>
            </Grid>
            <Grid container style={{marginTop: '5%'}}>
              <Grid item xs={12}>
                <hr />
              </Grid>
              <Grid item xs={6}>
                <div style={{float: 'left'}}>
                  {defaultTeam?.id && (
                    <DeleteTeamButton
                      team={defaultTeam}
                      onDeletion={onDelete}
                    />
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{float: 'right'}}>
                  <Button
                    color="success"
                    onClick={onSaveTeam}
                    variant="contained"
                    type="submit"
                  >
                    {isLoading ? (
                      <>
                        <i
                          className="fa fa-spinner fa-spin"
                          style={{marginRight: 4}}
                        />{' '}
                        Saving...
                      </>
                    ) : (
                      'Save'
                    )}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
