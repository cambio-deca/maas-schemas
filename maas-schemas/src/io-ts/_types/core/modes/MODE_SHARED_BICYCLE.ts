/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Vehicle_52ac_ from '../components/vehicle';

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

export const schemaId = 'https://schemas.maas.global/core/modes/MODE_SHARED_BICYCLE.json';

// MODE_SHARED_BICYCLE
// The default export. More information at the top.
export type MODE_SHARED_BICYCLE = t.Branded<
  {
    bike?: ({
      id?: Vehicle_52ac_.VehicleId;
      type?: string;
    } & Record<string, unknown>) & {
      id: Defined;
    };
  } & Record<string, unknown>,
  MODE_SHARED_BICYCLEBrand
>;
export type MODE_SHARED_BICYCLEC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        bike: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  id: typeof Vehicle_52ac_.VehicleId;
                  type: t.StringC;
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
  MODE_SHARED_BICYCLEBrand
>;
export const MODE_SHARED_BICYCLE: MODE_SHARED_BICYCLEC = t.brand(
  t.intersection([
    t.partial({
      bike: t.intersection([
        t.intersection([
          t.partial({
            id: Vehicle_52ac_.VehicleId,
            type: t.string,
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
      bike?: ({
        id?: Vehicle_52ac_.VehicleId;
        type?: string;
      } & Record<string, unknown>) & {
        id: Defined;
      };
    } & Record<string, unknown>,
    MODE_SHARED_BICYCLEBrand
  > => true,
  'MODE_SHARED_BICYCLE',
);
export type MODE_SHARED_BICYCLEBrand = {
  readonly MODE_SHARED_BICYCLE: unique symbol;
};

export default MODE_SHARED_BICYCLE;

// Success
