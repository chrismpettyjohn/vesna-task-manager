import React from 'react';
import {Grid, Typography} from '@mui/material';
import {AnalyticalHighlightsProps} from './AnalyticalHighlights.types';

export function AnalyticalHighlights({highlights}: AnalyticalHighlightsProps) {
  return (
    <Grid container spacing={4}>
      {highlights.map((highlight, highlightIndex) => (
        <Grid key={`highlight_${highlightIndex}`} item xs={4}>
          <div
            style={{
              padding: 4,
              border: '1px solid black',
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4">{highlight.value}</Typography>
            <Typography variant="subtitle1">{highlight.label}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
