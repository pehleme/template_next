import { Server } from 'miragejs';

export function seeds(server: Server): void {
  server.create('user');
  server.createList('task', 10);
}
