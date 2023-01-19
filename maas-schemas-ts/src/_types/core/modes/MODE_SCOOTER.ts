/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_SCOOTER.json';

// MODE_SCOOTER
// The default export. More information at the top.
export type MODE_SCOOTER = t.Branded<
  {
    scooter?: ({
      id?: string;
    } & Record<string, unknown>) & {
      id: Defined;
    };
  } & Record<string, unknown>,
  MODE_SCOOTERBrand
>;
export type MODE_SCOOTERC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        scooter: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  id: t.StringC;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              id: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  MODE_SCOOTERBrand
>;
export const MODE_SCOOTER: MODE_SCOOTERC = t.brand(
  t.intersection([
    t.partial({
      scooter: t.intersection([
        t.intersection([
          t.partial({
            id: t.string,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          id: Defined,
        }),
      ]),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      scooter?: ({
        id?: string;
      } & Record<string, unknown>) & {
        id: Defined;
      };
    } & Record<string, unknown>,
    MODE_SCOOTERBrand
  > => true,
  'MODE_SCOOTER',
);
export type MODE_SCOOTERBrand = {
  readonly MODE_SCOOTER: unique symbol;
};

export default MODE_SCOOTER;

// Success