import { Model } from 'miragejs';

import { TaskModel, UserModel } from '~/data/models';

export const models = {
  task: Model.extend<TaskModel>({}),
  user: Model.extend<UserModel>({}),
};
