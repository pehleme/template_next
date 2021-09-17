import { createServer, Server } from 'miragejs';

import { factories } from './factories';
import { models } from './models';
import { routes } from './routes';
import { seeds } from './seeds';

export function makeServer(environment = 'development'): Server {
  const server = createServer({
    environment,
    models,
    factories,
    seeds,
    routes,
  });

  return server;
}
