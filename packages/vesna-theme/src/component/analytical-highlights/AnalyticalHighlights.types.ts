import {ReactNode} from 'react';

export interface AnalyticalHighlight {
  label: ReactNode;
  value: ReactNode;
}

export interface AnalyticalHighlightsProps {
  highlights: AnalyticalHighlight[];
}
