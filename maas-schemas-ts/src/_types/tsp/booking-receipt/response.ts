/*

undefined
Response schema for getting a receipt for specific booking

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../core/booking';
import * as Terms_ from '../../core/components/terms';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'https://schemas.maas.global/tsp/booking-receipt/response.json';

// TspReceipt
// Receipt as received from TSP
export type TspReceipt = t.Branded<
  {
    cost?: Booking_.Cost;
    terms?: Terms_.Terms;
  } & {
    cost: Defined;
    terms: Defined;
  },
  TspReceiptBrand
>;
export type TspReceiptC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        cost: typeof Booking_.Cost;
        terms: typeof Terms_.Terms;
      }>,
      t.TypeC<{
        cost: typeof Defined;
        terms: typeof Defined;
      }>,
    ]
  >,
  TspReceiptBrand
>;
export const TspReceipt: TspReceiptC = t.brand(
  t.intersection([
    t.partial({
      cost: Booking_.Cost,
      terms: Terms_.Terms,
    }),
    t.type({
      cost: Defined,
      terms: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      cost?: Booking_.Cost;
      terms?: Terms_.Terms;
    } & {
      cost: Defined;
      terms: Defined;
    },
    TspReceiptBrand
  > => true,
  'TspReceipt',
);
export interface TspReceiptBrand {
  readonly TspReceipt: unique symbol;
}

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    receipt?: TspReceipt;
  } & {
    tspId: Defined;
    receipt: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        tspId: typeof Booking_.TspId;
        cost: typeof Booking_.Cost;
        receipt: typeof TspReceipt;
      }>,
      t.TypeC<{
        tspId: typeof Defined;
        receipt: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      receipt: TspReceipt,
    }),
    t.type({
      tspId: Defined,
      receipt: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      receipt?: TspReceipt;
    } & {
      tspId: Defined;
      receipt: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Response)).decodeSync(examplesResponse) // => examplesResponse */
export const examplesResponse: NonEmptyArray<Response> = ([
  {
    tspId: 'abc123',
    receipt: {
      cost: { amount: 23.45, currency: 'EUR' },
      terms: { validity: { endTime: 1658177898859, startTime: 1658177898859 } },
    },
  },
  {
    tspId: 'abc123',
    cost: { amount: 23.45, currency: 'EUR' },
    receipt: {
      cost: { amount: 23.45, currency: 'EUR' },
      terms: { validity: { endTime: 1658177898859, startTime: 1658177898859 } },
    },
  },
] as unknown) as NonEmptyArray<Response>;

export default Response;

// Success
