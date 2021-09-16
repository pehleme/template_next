import { NextApiResponse, NextPageContext } from 'next';

export type CookieCtxOptions =
  | Pick<NextPageContext, 'res'>
  | {
      res: NextApiResponse;
    }
  | null
  | undefined;

export type CookieSerializeOptions = {
  domain?: string | undefined;
  encode?(value: string): string;
  expires?: Date | undefined;
  httpOnly?: boolean | undefined;
  maxAge?: number | undefined;
  path?: string | undefined;
  sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
  secure?: boolean | undefined;
};
