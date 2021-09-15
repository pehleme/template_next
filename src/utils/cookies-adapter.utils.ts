import { NextApiResponse, NextPageContext } from 'next';

import { Response } from 'express';
import { destroyCookie, parseCookies, setCookie as setNookies } from 'nookies';

export enum CookieItemEnum {
  Auth = '@App:auth',
  Token = '@App:token',
}

type CookieCtxOptions =
  | Pick<NextPageContext, 'res'>
  | {
      res: NextApiResponse;
    }
  | {
      res: Response;
    }
  | null
  | undefined;

type CookieSerializeOptions = {
  domain?: string | undefined;
  encode?(value: string): string;
  expires?: Date | undefined;
  httpOnly?: boolean | undefined;
  maxAge?: number | undefined;
  path?: string | undefined;
  sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
  secure?: boolean | undefined;
};

const get = <T>(name: CookieItemEnum): T | undefined => {
  const item = parseCookies()[name];
  return item ? (JSON.parse(item) as T) : undefined;
};

const set = <T>(
  name: CookieItemEnum,
  value: T,
  ctx: CookieCtxOptions = undefined,
  options: CookieSerializeOptions = {
    maxAge: 60 * 60 * 24 * 30,
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
