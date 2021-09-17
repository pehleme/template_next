import faker from 'faker';
import { Factory } from 'miragejs';

import { TaskStatusEnum } from '~/data/enums';

export const task = Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  cratedAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  name: faker.name.findName(),
  description: faker.random.words(4),
  status() {
    return faker.random.arrayElement(Object.values(TaskStatusEnum));
  },
});
