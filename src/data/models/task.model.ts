import { TaskStatusEnum } from '../enums';
import { BaseModel } from './base.model';

export type TaskModel = BaseModel & {
  name?: string;
  description?: string;
  status?: TaskStatusEnum;
};
