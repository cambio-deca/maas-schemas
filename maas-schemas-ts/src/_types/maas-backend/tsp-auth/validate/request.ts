/*

undefined
Request schema for tsp-auth validate. Leaving as much flexibility as possible to be resilient for different TSPs

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Common_ from '../../../core/components/common';

export const schemaId =
  'https://schemas.maas.global/maas-backend/tsp-auth/validate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    agencyId?: Common_.AgencyId;
    payload?: {
      token?: Common_.EncodedQueryParam;
      encodedData?: Common_.EncodedQueryParam;
      state?: Common_.EncodedQueryParam;
      error?: Common_.ErrorKey;
    } & Record<string, unknown>;
    headers?: Record<string, unknown>;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    agencyId: typeof Common_.AgencyId;
    payload: t.IntersectionC<
      [
        t.PartialC<{
          token: typeof Common_.EncodedQueryParam;
          encodedData: typeof Common_.EncodedQueryParam;
          state: typeof Common_.EncodedQueryParam;
          error: typeof Common_.ErrorKey;
        }>,
        t.RecordC<t.StringC, t.UnknownC>,
      ]
    >;
    headers: t.RecordC<t.StringC, t.UnknownC>;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    agencyId: Common_.AgencyId,
    payload: t.intersection([
      t.partial({
        token: Common_.EncodedQueryParam,
        encodedData: Common_.EncodedQueryParam,
        state: Common_.EncodedQueryParam,
        error: Common_.ErrorKey,
      }),
      t.record(t.string, t.unknown),
    ]),
    headers: t.record(t.string, t.unknown),
  }),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_.AgencyId;
      payload?: {
        token?: Common_.EncodedQueryParam;
        encodedData?: Common_.EncodedQueryParam;
        state?: Common_.EncodedQueryParam;
        error?: Common_.ErrorKey;
      } & Record<string, unknown>;
      headers?: Record<string, unknown>;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success