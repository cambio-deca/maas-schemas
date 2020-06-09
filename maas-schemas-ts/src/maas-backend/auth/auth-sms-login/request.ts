/*

undefined
Request schema for auth-sms-login

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../../core/components/common';
import * as ApiCommon_ from '../../../core/components/api-common';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/auth/auth-sms-login/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: {
      phone?: Common_.RawPhone;
      code?: string;
    } & {
      phone: Defined;
      code: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          phone: Common_.RawPhone,
          code: t.string,
        }),
        t.type({
          phone: Defined,
          code: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        phone?: Common_.RawPhone;
        code?: string;
      } & {
        phone: Defined;
        code: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
