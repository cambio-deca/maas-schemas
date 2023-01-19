/*

undefined
Response schema for tsp-auth verify -> verification failure keys

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Booking_ from '../../../core/booking';
import * as CustomerSelection_ from '../../../core/components/customerSelection';

export const schemaId =
  'https://schemas.maas.global/maas-backend/tsp-auth/verify/definitions.json';

// VerificationFailureKey
// Failure key enum, identifying reason for the verification failure
export type VerificationFailureKey = t.Branded<
  string &
    (
      | 'UNKNOWN_ERROR'
      | 'NO_TOKEN_FOR_THE_USER'
      | 'INVALID_USER_TOKEN'
      | 'INVALID_USER'
      | 'EMPTY_PRODUCTS'
      | 'VERIFICATION_FAILURE'
    ),
  VerificationFailureKeyBrand
>;
export type VerificationFailureKeyC = t.BrandC<
  t.IntersectionC<
    [
      t.StringC,
      t.UnionC<
        [
          t.LiteralC<'UNKNOWN_ERROR'>,
          t.LiteralC<'NO_TOKEN_FOR_THE_USER'>,
          t.LiteralC<'INVALID_USER_TOKEN'>,
          t.LiteralC<'INVALID_USER'>,
          t.LiteralC<'EMPTY_PRODUCTS'>,
          t.LiteralC<'VERIFICATION_FAILURE'>,
        ]
      >,
    ]
  >,
  VerificationFailureKeyBrand
>;
export const VerificationFailureKey: VerificationFailureKeyC = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('UNKNOWN_ERROR'),
      t.literal('NO_TOKEN_FOR_THE_USER'),
      t.literal('INVALID_USER_TOKEN'),
      t.literal('INVALID_USER'),
      t.literal('EMPTY_PRODUCTS'),
      t.literal('VERIFICATION_FAILURE'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'UNKNOWN_ERROR'
        | 'NO_TOKEN_FOR_THE_USER'
        | 'INVALID_USER_TOKEN'
        | 'INVALID_USER'
        | 'EMPTY_PRODUCTS'
        | 'VERIFICATION_FAILURE'
      ),
    VerificationFailureKeyBrand
  > => true,
  'VerificationFailureKey',
);
export type VerificationFailureKeyBrand = {
  readonly VerificationFailureKey: unique symbol;
};

// VerifiedProducts
// The list of verified products
export type VerifiedProducts = t.Branded<
  Array<
    {
      id?: Booking_.TspId;
      verified?: boolean;
    } & Record<string, unknown>
  >,
  VerifiedProductsBrand
>;
export type VerifiedProductsC = t.BrandC<
  t.ArrayC<
    t.IntersectionC<
      [
        t.PartialC<{
          id: typeof Booking_.TspId;
          verified: t.BooleanC;
        }>,
        t.RecordC<t.StringC, t.UnknownC>,
      ]
    >
  >,
  VerifiedProductsBrand
>;
export const VerifiedProducts: VerifiedProductsC = t.brand(
  t.array(
    t.intersection([
      t.partial({
        id: Booking_.TspId,
        verified: t.boolean,
      }),
      t.record(t.string, t.unknown),
    ]),
  ),
  (
    x,
  ): x is t.Branded<
    Array<
      {
        id?: Booking_.TspId;
        verified?: boolean;
      } & Record<string, unknown>
    >,
    VerifiedProductsBrand
  > => true,
  'VerifiedProducts',
);
export type VerifiedProductsBrand = {
  readonly VerifiedProducts: unique symbol;
};

// ProductsNeededVerification
// The list of products to verify
export type ProductsNeededVerification = t.Branded<
  Array<
    {
      id?: Booking_.TspId;
      customerSelection?: CustomerSelection_.CustomerSelection;
    } & Record<string, unknown>
  >,
  ProductsNeededVerificationBrand
>;
export type ProductsNeededVerificationC = t.BrandC<
  t.ArrayC<
    t.IntersectionC<
      [
        t.PartialC<{
          id: typeof Booking_.TspId;
          customerSelection: typeof CustomerSelection_.CustomerSelection;
        }>,
        t.RecordC<t.StringC, t.UnknownC>,
      ]
    >
  >,
  ProductsNeededVerificationBrand
>;
export const ProductsNeededVerification: ProductsNeededVerificationC = t.brand(
  t.array(
    t.intersection([
      t.partial({
        id: Booking_.TspId,
        customerSelection: CustomerSelection_.CustomerSelection,
      }),
      t.record(t.string, t.unknown),
    ]),
  ),
  (
    x,
  ): x is t.Branded<
    Array<
      {
        id?: Booking_.TspId;
        customerSelection?: CustomerSelection_.CustomerSelection;
      } & Record<string, unknown>
    >,
    ProductsNeededVerificationBrand
  > => true,
  'ProductsNeededVerification',
);
export type ProductsNeededVerificationBrand = {
  readonly ProductsNeededVerification: unique symbol;
};

// Definitions
// The default export. More information at the top.
export type Definitions = t.Branded<unknown, DefinitionsBrand>;
export type DefinitionsC = t.BrandC<t.UnknownC, DefinitionsBrand>;
export const Definitions: DefinitionsC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefinitionsBrand> => true,
  'Definitions',
);
export type DefinitionsBrand = {
  readonly Definitions: unique symbol;
};

export default Definitions;

// Success