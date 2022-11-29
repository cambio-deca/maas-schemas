/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../core/components/units';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'https://schemas.maas.global/environments/apis.json';

// ApiUrl
// has to be url, has to start https://, has to end with slash
export type ApiUrl = t.Branded<string & Units_.Url, ApiUrlBrand>;
export type ApiUrlC = t.BrandC<
  t.IntersectionC<[t.StringC, typeof Units_.Url]>,
  ApiUrlBrand
>;
export const ApiUrl: ApiUrlC = t.brand(
  t.intersection([t.string, Units_.Url]),
  (x): x is t.Branded<string & Units_.Url, ApiUrlBrand> =>
    typeof x !== 'string' || x.match(RegExp('^https://[^\\s]+/$')) !== null,
  'ApiUrl',
);
export interface ApiUrlBrand {
  readonly ApiUrl: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiUrl)).decodeSync(examplesApiUrl) // => examplesApiUrl */
export const examplesApiUrl: NonEmptyArray<ApiUrl> = ([
  'https://production.example.com/api/',
  'https://testing.example.com/api/',
  'https://environment13.example.com/api/',
  'https://fantasy-toppign.example.com/api/',
] as unknown) as NonEmptyArray<ApiUrl>;

// Apis
// The default export. More information at the top.
export type Apis = t.Branded<unknown, ApisBrand>;
export type ApisC = t.BrandC<t.UnknownC, ApisBrand>;
export const Apis: ApisC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ApisBrand> => true,
  'Apis',
);
export interface ApisBrand {
  readonly Apis: unique symbol;
}

export default Apis;

// Success
