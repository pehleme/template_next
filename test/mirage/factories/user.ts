import faker from 'faker';
import { Factory } from 'miragejs';

export const user = Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  cratedAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: 'admin@admin.com',
  password: 'admin123',
});
