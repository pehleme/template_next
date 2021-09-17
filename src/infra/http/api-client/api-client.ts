import axios, { AxiosRequestConfig } from 'axios';

import { environments } from '~/environments';
import { cookie, CookieItemEnum } from '~/infra/cache';

const api = axios.create({ baseURL: environments.apiURL });

const authInterceptor = (config: AxiosRequestConfig) => {
  const token = cookie.get<string>(CookieItemEnum.Token);
  const isApiURL = config.baseURL?.startsWith(environments.apiURL ?? '');

  if (token && isApiURL) {
    config.headers.Authorization = `Baerer ${token}`;
  }

  return config;
};
const loggerInterceptor = (config: AxiosRequestConfig) => config;

api.interceptors.request.use(authInterceptor);
api.interceptors.request.use(loggerInterceptor);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export { api };
