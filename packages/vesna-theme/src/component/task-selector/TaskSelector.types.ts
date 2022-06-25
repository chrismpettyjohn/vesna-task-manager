export interface TaskSelectorProps {
  taskID?: number;
  onChange(newTaskID?: number): void;
}
