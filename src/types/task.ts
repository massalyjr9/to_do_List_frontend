export type TaskStatus = 'to do' | 'in progress' | 'done';

export interface Task {
  _id?: string;
  title: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  duration?: number;
  responsible?: string;
  status: TaskStatus;
}
