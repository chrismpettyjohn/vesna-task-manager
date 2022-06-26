import {ReactNode} from 'react';
import {CreateTeamDTOWire, TeamWire} from '@vesna-task-manager/types';

export interface TeamDialogEditorProps {
  children: ReactNode;
  defaultTeam?: TeamWire;
  onSave(teamDTO: CreateTeamDTOWire): Promise<void>;
  onDelete?(): void;
}
