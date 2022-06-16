import {ReactNode} from 'react';
import {SessionWire} from '@vesna-task-manager/types';

export interface SessionContext {
  session?: SessionWire;
  setSession(newSession?: SessionWire): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession?: SessionWire) {},
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
