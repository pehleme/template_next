import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { UserModel } from '~/data/models';
import { environments } from '~/environments';
import { cookie, CookieItemEnum } from '~/utils';

const axiosConfig: AxiosRequestConfig = { baseURL: environments.apiURL };
const api: AxiosInstance = axios.create(axiosConfig);

const authInterceptor = (config: AxiosRequestConfig) => {
  const { refreshToken } = cookie.get<UserModel>(CookieItemEnum.Auth) ?? {};
  const isApiUrl = config.url?.startsWith(environments.apiURL ?? '');

  if (refreshToken && isApiUrl) {
    config.headers.Authorization = `Baerer ${refreshToken}`;
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
