import { destroyCookie, parseCookies, setCookie as setNookies } from 'nookies';

import { CookieCtxOptions, CookieSerializeOptions } from '~/types';

export enum CookieItemEnum {
  Auth = '@App:auth',
  Token = '@App:token',
}

const THIRTY_DAYS = 60 * 60 * 24 * 30;

const get = <T>(name: CookieItemEnum): T | undefined => {
  const item = parseCookies()[name];
  return item ? (JSON.parse(item) as T) : undefined;
};

const set = <T>(
  name: CookieItemEnum,
  value: T,
  ctx: CookieCtxOptions = undefined,
  options: CookieSerializeOptions = {
    maxAge: THIRTY_DAYS,
  }
): void => {
  setNookies(ctx, name, JSON.stringify(value), options);
};

const remove = (
  name: CookieItemEnum,
  ctx: CookieCtxOptions = undefined,
  options?: CookieSerializeOptions
): void => {
  destroyCookie(ctx, name, options);
};

export const cookie = { get, set, remove };
