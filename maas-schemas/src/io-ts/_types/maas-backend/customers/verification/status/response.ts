/*

undefined
MaaS customer verification status

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as VerificationObject_7f82_ from '../verification-object';

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
  'https://schemas.maas.global/maas-backend/customers/verification/status/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    customer?: ({
      verification?: Array<VerificationObject_7f82_.Verification>;
    } & Record<string, unknown>) & {
      verification: Defined;
    };
  } & {
    customer: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        customer: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  verification: t.ArrayC<typeof VerificationObject_7f82_.Verification>;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              verification: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        customer: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      customer: t.intersection([
        t.intersection([
          t.partial({
            verification: t.array(VerificationObject_7f82_.Verification),
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          verification: Defined,
        }),
      ]),
    }),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: ({
        verification?: Array<VerificationObject_7f82_.Verification>;
      } & Record<string, unknown>) & {
        verification: Defined;
      };
    } & {
      customer: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success