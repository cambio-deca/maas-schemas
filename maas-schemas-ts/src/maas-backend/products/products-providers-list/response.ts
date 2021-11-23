/*

undefined
Response schema for products-providers-list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Provider_ from '../provider';

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
  'http://maasglobal.com/maas-backend/products/products-providers-list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    providers?: Array<Provider_.Provider>;
  } & {
    providers: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        providers: t.ArrayC<typeof Provider_.Provider>;
      }>,
      t.TypeC<{
        providers: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      providers: t.array(Provider_.Provider),
    }),
    t.type({
      providers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      providers?: Array<Provider_.Provider>;
    } & {
      providers: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
