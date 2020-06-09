/*

undefined
Request schema for tsp-auth verify

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../../core/components/common';
import * as Units_ from '../../../core/components/units';
import * as Definitions_ from './definitions';
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

export const schemaId = 'http://maasglobal.com/maas-backend/tsp-auth/verify/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    agencyId?: Common_.AgencyId;
    identityId?: Units_.IdentityId;
    payload?: {
      products?: Definitions_.ProductsNeededVerification;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    agencyId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      agencyId: Common_.AgencyId,
      identityId: Units_.IdentityId,
      payload: t.partial({
        products: Definitions_.ProductsNeededVerification,
      }),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      agencyId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_.AgencyId;
      identityId?: Units_.IdentityId;
      payload?: {
        products?: Definitions_.ProductsNeededVerification;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      agencyId: Defined;
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
