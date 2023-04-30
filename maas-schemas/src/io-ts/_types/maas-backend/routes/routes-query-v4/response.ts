/*

undefined
Response schema for routes-query v4

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Error_b620_ from '../../../core/error';
import * as MultimodalPlan_758c_ from '../../../core/multimodal-plan';
import * as MultimodalRoutesMetadata_478d_ from '../../../core/multimodal-routes-metadata';

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
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/routes/routes-query-v4/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    plan?: MultimodalPlan_758c_.MultimodalPlan;
    metadata?: MultimodalRoutesMetadata_478d_.MultimodalRoutesMetadata;
    reasons?: Array<Error_b620_.Reason>;
    debug?: Record<string, unknown> & Record<string, unknown>;
  } & {
    plan: Defined;
    metadata: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        plan: typeof MultimodalPlan_758c_.MultimodalPlan;
        metadata: typeof MultimodalRoutesMetadata_478d_.MultimodalRoutesMetadata;
        reasons: t.ArrayC<typeof Error_b620_.Reason>;
        debug: t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>;
      }>,
      t.TypeC<{
        plan: typeof Defined;
        metadata: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      plan: MultimodalPlan_758c_.MultimodalPlan,
      metadata: MultimodalRoutesMetadata_478d_.MultimodalRoutesMetadata,
      reasons: t.array(Error_b620_.Reason),
      debug: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
    }),
    t.type({
      plan: Defined,
      metadata: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      plan?: MultimodalPlan_758c_.MultimodalPlan;
      metadata?: MultimodalRoutesMetadata_478d_.MultimodalRoutesMetadata;
      reasons?: Array<Error_b620_.Reason>;
      debug?: Record<string, unknown> & Record<string, unknown>;
    } & {
      plan: Defined;
      metadata: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Response)).decodeSync(examplesResponse) // => examplesResponse */
export const examplesResponse: NonEmptyArray<Response> = [
  {
    plan: {
      from: { lat: 35.5907257, lon: 139.6791986 },
      outwards: [],
      returns: [],
      planId: 'd2ac1de0-5edd-11ea-a5fd-b5d2f648464c',
      requestParams: {
        from: { lat: 35.5907257, lon: 139.6791986 },
        to: { lat: 35.5907257, lon: 139.6791986 },
        modeId: 'PUBLIC_TRANSIT',
        accessibilityFilter: false,
      },
    },
    metadata: {
      location: { lat: 35.5907257, lon: 139.6791986 },
      availableAccessibilityFilter: true,
      availableModes: [
        { modeId: 'PUBLIC_TRANSIT', modes: ['PUBLIC_TRANSIT'] },
        {
          modeId: 'PUBLIC_TRANSIT__SCOOTER_RENT',
          modes: ['PUBLIC_TRANSIT', 'SCOOTER_RENT'],
        },
        {
          modeId: 'PUBLIC_TRANSIT__BICYCLE_RENT',
          modes: ['PUBLIC_TRANSIT', 'BICYCLE_RENT'],
        },
        { modeId: 'TAXI', modes: ['TAXI'] },
      ],
    },
    reasons: [{ errorCode: 'ERROR_TSP_UNSUPPORTED_AREA' }],
  },
] as unknown as NonEmptyArray<Response>;

export default Response;

// Success
