import { Response } from 'miragejs';
import { Server } from 'miragejs/server';

export function routes(this: Server): void {
  this.namespace = 'api';

  // Task
  this.get(`/tasks`, (schema) => {
    return schema.db.tasks;
  });

  this.get(`/tasks/:id`, (schema, request) => {
    return schema.db.tasks.find(request.params.id);
  });

  this.post(`/tasks`, (schema, request) => {
    schema.db.tasks.insert(JSON.parse(request.requestBody));
    return new Response(200);
  });

  this.put(`/tasks/:id`, (schema, request) => {
    schema.db.tasks.update(request.params.id, JSON.parse(request.requestBody));
    return new Response(200);
  });

  this.delete(`/tasks/:id`, (schema, request) => {
    schema.db.tasks.remove(request.params.id);
    return new Response(200);
  });

  this.namespace = '';
  this.passthrough();
}
