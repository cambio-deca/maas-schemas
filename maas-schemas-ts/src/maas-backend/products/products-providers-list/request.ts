/*

undefined
Request schema for products-providers-list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as ApiCommon_ from '../../../core/components/api-common';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/products/products-providers-list/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    lat?: UnitsGeo_.RelaxedLatitude;
    lon?: UnitsGeo_.RelaxedLongitude;
    region?: string &
      ('AT' | 'BE' | 'CH' | 'DE' | 'FI' | 'GB' | 'JP' | 'LU' | 'NL' | 'SG');
  },
  PayloadBrand
>;
export type PayloadC = t.BrandC<
  t.PartialC<{
    lat: typeof UnitsGeo_.RelaxedLatitude;
    lon: typeof UnitsGeo_.RelaxedLongitude;
    region: t.IntersectionC<
      [
        t.StringC,
        t.UnionC<
          [
            t.LiteralC<'AT'>,
            t.LiteralC<'BE'>,
            t.LiteralC<'CH'>,
            t.LiteralC<'DE'>,
            t.LiteralC<'FI'>,
            t.LiteralC<'GB'>,
            t.LiteralC<'JP'>,
            t.LiteralC<'LU'>,
            t.LiteralC<'NL'>,
            t.LiteralC<'SG'>,
          ]
        >,
      ]
    >;
  }>,
  PayloadBrand
>;
export const Payload: PayloadC = t.brand(
  t.partial({
    lat: UnitsGeo_.RelaxedLatitude,
    lon: UnitsGeo_.RelaxedLongitude,
    region: t.intersection([
      t.string,
      t.union([
        t.literal('AT'),
        t.literal('BE'),
        t.literal('CH'),
        t.literal('DE'),
        t.literal('FI'),
        t.literal('GB'),
        t.literal('JP'),
        t.literal('LU'),
        t.literal('NL'),
        t.literal('SG'),
      ]),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      region?: string &
        ('AT' | 'BE' | 'CH' | 'DE' | 'FI' | 'GB' | 'JP' | 'LU' | 'NL' | 'SG');
    },
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        payload: typeof Payload;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      payload: Payload,
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
      payload?: Payload;
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
