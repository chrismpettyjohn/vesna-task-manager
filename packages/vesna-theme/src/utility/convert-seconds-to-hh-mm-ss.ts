export function convertSecondsToHhMmSS(seconds: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: Math.floor((seconds % 3600) % 60),
  };
}
