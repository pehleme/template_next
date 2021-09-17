import { Model } from 'miragejs';

import { TaskModel } from '~/data/models';

export const models = {
  task: Model.extend<TaskModel>({}),
};
