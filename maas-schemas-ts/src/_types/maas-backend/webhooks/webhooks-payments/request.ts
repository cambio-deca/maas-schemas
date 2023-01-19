/*

undefined
MaaS webhook to receive payment status updates from payment gateways.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Avainpay_ from './gateway/avainpay';
import * as Stripe_ from './gateway/stripe';
import * as Yaband_ from './gateway/yaband';

export const schemaId =
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-payments/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  Avainpay_.Request | Stripe_.Request | Yaband_.Request,
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.UnionC<[typeof Avainpay_.Request, typeof Stripe_.Request, typeof Yaband_.Request]>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.union([Avainpay_.Request, Stripe_.Request, Yaband_.Request]),
  (
    x,
  ): x is t.Branded<
    Avainpay_.Request | Stripe_.Request | Yaband_.Request,
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success