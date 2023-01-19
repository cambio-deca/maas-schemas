/*

undefined
Request schema for regions-options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../core/components/api-common';

export const schemaId =
  'https://schemas.maas.global/maas-backend/regions/regions-options/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    headers?: ApiCommon_.Headers;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    headers: typeof ApiCommon_.Headers;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    headers: ApiCommon_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      headers?: ApiCommon_.Headers;
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