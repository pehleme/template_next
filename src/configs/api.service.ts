import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { environments } from '~/environments';
import { cookie, CookieItemEnum } from '~/utils';

const axiosConfig: AxiosRequestConfig = { baseURL: environments.apiURL };
const api: AxiosInstance = axios.create(axiosConfig);

const authInterceptor = (config: AxiosRequestConfig) => {
  const token = cookie.get<string>(CookieItemEnum.Token);
  const isApiURL = config.url?.startsWith(environments.apiURL ?? '');

  console.log(config);

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
