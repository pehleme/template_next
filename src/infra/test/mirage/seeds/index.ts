import { Server } from 'miragejs';

export function seeds(server: Server): void {
  server.createList('task', 200);
}
