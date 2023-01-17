/*

undefined
MaaS common components that are used consistently within our own objects

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'https://schemas.maas.global/core/components/common.json';

// AgencyId
// The purpose of this remains a mystery
export type AgencyId = t.Branded<string, AgencyIdBrand>;
export type AgencyIdC = t.BrandC<t.StringC, AgencyIdBrand>;
export const AgencyId: AgencyIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, AgencyIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) && (typeof x !== 'string' || x.length <= 64),
  'AgencyId',
);
export type AgencyIdBrand = {
  readonly AgencyId: unique symbol;
};

// DeviceToken
// The purpose of this remains a mystery
export type DeviceToken = t.Branded<string, DeviceTokenBrand>;
export type DeviceTokenC = t.BrandC<t.StringC, DeviceTokenBrand>;
export const DeviceToken: DeviceTokenC = t.brand(
  t.string,
  (x): x is t.Branded<string, DeviceTokenBrand> =>
    typeof x !== 'string' || x.match(RegExp('^([A-Fa-f0-9]{2}){8,64}$', 'u')) !== null,
  'DeviceToken',
);
export type DeviceTokenBrand = {
  readonly DeviceToken: unique symbol;
};

// Signature
// Signature of a signed object
export type Signature = t.Branded<string, SignatureBrand>;
export type SignatureC = t.BrandC<t.StringC, SignatureBrand>;
export const Signature: SignatureC = t.brand(
  t.string,
  (x): x is t.Branded<string, SignatureBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 1024),
  'Signature',
);
export type SignatureBrand = {
  readonly Signature: unique symbol;
};

// HtmlBlock
// HTML string of block level content
export type HtmlBlock = t.Branded<string, HtmlBlockBrand>;
export type HtmlBlockC = t.BrandC<t.StringC, HtmlBlockBrand>;
export const HtmlBlock: HtmlBlockC = t.brand(
  t.string,
  (x): x is t.Branded<string, HtmlBlockBrand> => true,
  'HtmlBlock',
);
export type HtmlBlockBrand = {
  readonly HtmlBlock: unique symbol;
};

// JsonParam
// JSON encoded object or array
export type JsonParam = t.Branded<string, JsonParamBrand>;
export type JsonParamC = t.BrandC<t.StringC, JsonParamBrand>;
export const JsonParam: JsonParamC = t.brand(
  t.string,
  (x): x is t.Branded<string, JsonParamBrand> => typeof x !== 'string' || x.length >= 2,
  'JsonParam',
);
export type JsonParamBrand = {
  readonly JsonParam: unique symbol;
};

// MetaCurrency
// The purpose of this remains a mystery
export type MetaCurrency = t.Branded<string & ('WMP' | 'TOKEN'), MetaCurrencyBrand>;
export type MetaCurrencyC = t.BrandC<
  t.IntersectionC<[t.StringC, t.UnionC<[t.LiteralC<'WMP'>, t.LiteralC<'TOKEN'>]>]>,
  MetaCurrencyBrand
>;
export const MetaCurrency: MetaCurrencyC = t.brand(
  t.intersection([t.string, t.union([t.literal('WMP'), t.literal('TOKEN')])]),
  (x): x is t.Branded<string & ('WMP' | 'TOKEN'), MetaCurrencyBrand> => true,
  'MetaCurrency',
);
export type MetaCurrencyBrand = {
  readonly MetaCurrency: unique symbol;
};

// MetaCurrencyWMP
// The purpose of this remains a mystery
export type MetaCurrencyWMP = t.Branded<MetaCurrency & 'WMP', MetaCurrencyWMPBrand>;
export type MetaCurrencyWMPC = t.BrandC<
  t.IntersectionC<[typeof MetaCurrency, t.LiteralC<'WMP'>]>,
  MetaCurrencyWMPBrand
>;
export const MetaCurrencyWMP: MetaCurrencyWMPC = t.brand(
  t.intersection([MetaCurrency, t.literal('WMP')]),
  (x): x is t.Branded<MetaCurrency & 'WMP', MetaCurrencyWMPBrand> => true,
  'MetaCurrencyWMP',
);
export type MetaCurrencyWMPBrand = {
  readonly MetaCurrencyWMP: unique symbol;
};
/** require('io-ts-validator').validator(MetaCurrencyWMP).decodeSync(defaultMetaCurrencyWMP) // => defaultMetaCurrencyWMP */
export const defaultMetaCurrencyWMP: MetaCurrencyWMP =
  'WMP' as unknown as MetaCurrencyWMP;

// MetaCurrencyTOKEN
// The purpose of this remains a mystery
export type MetaCurrencyTOKEN = t.Branded<MetaCurrency & 'TOKEN', MetaCurrencyTOKENBrand>;
export type MetaCurrencyTOKENC = t.BrandC<
  t.IntersectionC<[typeof MetaCurrency, t.LiteralC<'TOKEN'>]>,
  MetaCurrencyTOKENBrand
>;
export const MetaCurrencyTOKEN: MetaCurrencyTOKENC = t.brand(
  t.intersection([MetaCurrency, t.literal('TOKEN')]),
  (x): x is t.Branded<MetaCurrency & 'TOKEN', MetaCurrencyTOKENBrand> => true,
  'MetaCurrencyTOKEN',
);
export type MetaCurrencyTOKENBrand = {
  readonly MetaCurrencyTOKEN: unique symbol;
};
/** require('io-ts-validator').validator(MetaCurrencyTOKEN).decodeSync(defaultMetaCurrencyTOKEN) // => defaultMetaCurrencyTOKEN */
export const defaultMetaCurrencyTOKEN: MetaCurrencyTOKEN =
  'TOKEN' as unknown as MetaCurrencyTOKEN;

// PersonalName
// First or last name of a customer (e.g. John)
export type PersonalName = t.Branded<string, PersonalNameBrand>;
export type PersonalNameC = t.BrandC<t.StringC, PersonalNameBrand>;
export const PersonalName: PersonalNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, PersonalNameBrand> =>
    (typeof x !== 'string' ||
      x.match(RegExp("^[\\p{L}\\s`'´\\-\\.,]+$", 'u')) !== null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'PersonalName',
);
export type PersonalNameBrand = {
  readonly PersonalName: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(PersonalName)).decodeSync(examplesPersonalName) // => examplesPersonalName */
export const examplesPersonalName: NonEmptyArray<PersonalName> = [
  'Lauri',
  '姚 明',
  'ADÉLAÏDE',
  'Hans V.',
  'じぇいむず',
  'Hiếu Nguyễn',
  'سيارة',
  '차',
  'Jędruś',
  'Svan',
  "O'Neill",
  'Sören-sön',
  'Dot. d`Tester',
  'ぐえん',
] as unknown as NonEmptyArray<PersonalName>;
// NEGATIVE Test Case: number
/** require('io-ts-validator').validator(PersonalName).decodeEither(123123)._tag // => 'Left' */
// NEGATIVE Test Case: stringified number
/** require('io-ts-validator').validator(PersonalName).decodeEither("123123")._tag // => 'Left' */
// NEGATIVE Test Case: phonenumber prefix
/** require('io-ts-validator').validator(PersonalName).decodeEither("+123123")._tag // => 'Left' */
// NEGATIVE Test Case: string with special characters
/** require('io-ts-validator').validator(PersonalName).decodeEither("\"#\"€\"€#\"")._tag // => 'Left' */
// NEGATIVE Test Case: empty string
/** require('io-ts-validator').validator(PersonalName).decodeEither("")._tag // => 'Left' */
// NEGATIVE Test Case: emoji
/** require('io-ts-validator').validator(PersonalName).decodeEither("💩")._tag // => 'Left' */

// Phone
// ITU-T E.164 phone number, see https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
export type Phone = t.Branded<string, PhoneBrand>;
export type PhoneC = t.BrandC<t.StringC, PhoneBrand>;
export const Phone: PhoneC = t.brand(
  t.string,
  (x): x is t.Branded<string, PhoneBrand> =>
    typeof x !== 'string' || x.match(RegExp('^\\+(?:\\d){6,14}\\d$', 'u')) !== null,
  'Phone',
);
export type PhoneBrand = {
  readonly Phone: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Phone)).decodeSync(examplesPhone) // => examplesPhone */
export const examplesPhone: NonEmptyArray<Phone> = [
  '+358401234567',
  '+35850123456',
  '+855979301811',
] as unknown as NonEmptyArray<Phone>;
// NEGATIVE Test Case: phone number without plus
/** require('io-ts-validator').validator(Phone).decodeEither("358401234567")._tag // => 'Left' */
// NEGATIVE Test Case: emoji
/** require('io-ts-validator').validator(Phone).decodeEither("💩")._tag // => 'Left' */
// NEGATIVE Test Case: empty string
/** require('io-ts-validator').validator(Phone).decodeEither("")._tag // => 'Left' */
// NEGATIVE Test Case: text
/** require('io-ts-validator').validator(Phone).decodeEither("sdfdsf")._tag // => 'Left' */
// NEGATIVE Test Case: extremely long phone number
/** require('io-ts-validator').validator(Phone).decodeEither("+358123456789012345678")._tag // => 'Left' */

// RawPhone
// Slightly looser definition of phone number
export type RawPhone = t.Branded<string, RawPhoneBrand>;
export type RawPhoneC = t.BrandC<t.StringC, RawPhoneBrand>;
export const RawPhone: RawPhoneC = t.brand(
  t.string,
  (x): x is t.Branded<string, RawPhoneBrand> =>
    typeof x !== 'string' || x.match(RegExp('^\\+?(?:\\d){6,14}\\d$', 'u')) !== null,
  'RawPhone',
);
export type RawPhoneBrand = {
  readonly RawPhone: unique symbol;
};

// Email
// Rough validation of a valid e-mail address, see https://davidcel.is/posts/stop-validating-email-addresses-with-regex/
export type Email = t.Branded<string, EmailBrand>;
export type EmailC = t.BrandC<t.StringC, EmailBrand>;
export const Email: EmailC = t.brand(
  t.string,
  (x): x is t.Branded<string, EmailBrand> =>
    (typeof x !== 'string' || x.match(RegExp('^.+@.+\\..+$', 'u')) !== null) &&
    (typeof x !== 'string' || x.length <= 64),
  'Email',
);
export type EmailBrand = {
  readonly Email: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Email)).decodeSync(examplesEmail) // => examplesEmail */
export const examplesEmail: NonEmptyArray<Email> = [
  'joe.customer@example.com',
  'info@maas.global',
  '#"€"€#"@gmail.com',
  'very@very@unsual.com',
] as unknown as NonEmptyArray<Email>;

// PaymentSourceId
// The purpose of this remains a mystery
export type PaymentSourceId = t.Branded<string, PaymentSourceIdBrand>;
export type PaymentSourceIdC = t.BrandC<t.StringC, PaymentSourceIdBrand>;
export const PaymentSourceId: PaymentSourceIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, PaymentSourceIdBrand> =>
    (typeof x !== 'string' || x.length >= 3) &&
    (typeof x !== 'string' || x.length <= 255),
  'PaymentSourceId',
);
export type PaymentSourceIdBrand = {
  readonly PaymentSourceId: unique symbol;
};

// AppInstanceId
// An id specific to a user device
export type AppInstanceId = t.Branded<string, AppInstanceIdBrand>;
export type AppInstanceIdC = t.BrandC<t.StringC, AppInstanceIdBrand>;
export const AppInstanceId: AppInstanceIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, AppInstanceIdBrand> =>
    typeof x !== 'string' || x.length >= 6,
  'AppInstanceId',
);
export type AppInstanceIdBrand = {
  readonly AppInstanceId: unique symbol;
};

// OpaqueId
// Typically the hash of the identityId
export type OpaqueId = t.Branded<string, OpaqueIdBrand>;
export type OpaqueIdC = t.BrandC<t.StringC, OpaqueIdBrand>;
export const OpaqueId: OpaqueIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, OpaqueIdBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[0-9abcdefABCDEF]+$', 'u')) !== null,
  'OpaqueId',
);
export type OpaqueIdBrand = {
  readonly OpaqueId: unique symbol;
};

// OpaqueIdShort
// Typically the MD5  hash of the identityId
export type OpaqueIdShort = t.Branded<string, OpaqueIdShortBrand>;
export type OpaqueIdShortC = t.BrandC<t.StringC, OpaqueIdShortBrand>;
export const OpaqueIdShort: OpaqueIdShortC = t.brand(
  t.string,
  (x): x is t.Branded<string, OpaqueIdShortBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[0-9abcdefABCDEF]{32}$', 'u')) !== null,
  'OpaqueIdShort',
);
export type OpaqueIdShortBrand = {
  readonly OpaqueIdShort: unique symbol;
};

// ClientId
// An id indicating the source of the client
export type ClientId = t.Branded<string & ('whim' | 'wechat'), ClientIdBrand>;
export type ClientIdC = t.BrandC<
  t.IntersectionC<[t.StringC, t.UnionC<[t.LiteralC<'whim'>, t.LiteralC<'wechat'>]>]>,
  ClientIdBrand
>;
export const ClientId: ClientIdC = t.brand(
  t.intersection([t.string, t.union([t.literal('whim'), t.literal('wechat')])]),
  (x): x is t.Branded<string & ('whim' | 'wechat'), ClientIdBrand> => true,
  'ClientId',
);
export type ClientIdBrand = {
  readonly ClientId: unique symbol;
};

// ClientIdWHIM
// The purpose of this remains a mystery
export type ClientIdWHIM = t.Branded<ClientId & 'whim', ClientIdWHIMBrand>;
export type ClientIdWHIMC = t.BrandC<
  t.IntersectionC<[typeof ClientId, t.LiteralC<'whim'>]>,
  ClientIdWHIMBrand
>;
export const ClientIdWHIM: ClientIdWHIMC = t.brand(
  t.intersection([ClientId, t.literal('whim')]),
  (x): x is t.Branded<ClientId & 'whim', ClientIdWHIMBrand> => true,
  'ClientIdWHIM',
);
export type ClientIdWHIMBrand = {
  readonly ClientIdWHIM: unique symbol;
};
/** require('io-ts-validator').validator(ClientIdWHIM).decodeSync(defaultClientIdWHIM) // => defaultClientIdWHIM */
export const defaultClientIdWHIM: ClientIdWHIM = 'whim' as unknown as ClientIdWHIM;

// ClientIdWECHAT
// The purpose of this remains a mystery
export type ClientIdWECHAT = t.Branded<ClientId & 'wechat', ClientIdWECHATBrand>;
export type ClientIdWECHATC = t.BrandC<
  t.IntersectionC<[typeof ClientId, t.LiteralC<'wechat'>]>,
  ClientIdWECHATBrand
>;
export const ClientIdWECHAT: ClientIdWECHATC = t.brand(
  t.intersection([ClientId, t.literal('wechat')]),
  (x): x is t.Branded<ClientId & 'wechat', ClientIdWECHATBrand> => true,
  'ClientIdWECHAT',
);
export type ClientIdWECHATBrand = {
  readonly ClientIdWECHAT: unique symbol;
};
/** require('io-ts-validator').validator(ClientIdWECHAT).decodeSync(defaultClientIdWECHAT) // => defaultClientIdWECHAT */
export const defaultClientIdWECHAT: ClientIdWECHAT =
  'wechat' as unknown as ClientIdWECHAT;

// Ssid
// Social Security ID
export type Ssid = t.Branded<string, SsidBrand>;
export type SsidC = t.BrandC<t.StringC, SsidBrand>;
export const Ssid: SsidC = t.brand(
  t.string,
  (x): x is t.Branded<string, SsidBrand> => typeof x !== 'string' || x.length >= 4,
  'Ssid',
);
export type SsidBrand = {
  readonly Ssid: unique symbol;
};

// SsidFI
// Finnish Social Security ID
export type SsidFI = t.Branded<string, SsidFIBrand>;
export type SsidFIC = t.BrandC<t.StringC, SsidFIBrand>;
export const SsidFI: SsidFIC = t.brand(
  t.string,
  (x): x is t.Branded<string, SsidFIBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$', 'u')) !== null,
  'SsidFI',
);
export type SsidFIBrand = {
  readonly SsidFI: unique symbol;
};

// EncodedQueryParam
// Encoded Query Params
export type EncodedQueryParam = t.Branded<string, EncodedQueryParamBrand>;
export type EncodedQueryParamC = t.BrandC<t.StringC, EncodedQueryParamBrand>;
export const EncodedQueryParam: EncodedQueryParamC = t.brand(
  t.string,
  (x): x is t.Branded<string, EncodedQueryParamBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 8192),
  'EncodedQueryParam',
);
export type EncodedQueryParamBrand = {
  readonly EncodedQueryParam: unique symbol;
};

// ErrorKey
// Error key
export type ErrorKey = t.Branded<string, ErrorKeyBrand>;
export type ErrorKeyC = t.BrandC<t.StringC, ErrorKeyBrand>;
export const ErrorKey: ErrorKeyC = t.brand(
  t.string,
  (x): x is t.Branded<string, ErrorKeyBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'ErrorKey',
);
export type ErrorKeyBrand = {
  readonly ErrorKey: unique symbol;
};

// WhimDeepLink
// Whim only deep link to localhost and freely defined view - not a complete URI validation
export type WhimDeepLink = t.Branded<string, WhimDeepLinkBrand>;
export type WhimDeepLinkC = t.BrandC<t.StringC, WhimDeepLinkBrand>;
export const WhimDeepLink: WhimDeepLinkC = t.brand(
  t.string,
  (x): x is t.Branded<string, WhimDeepLinkBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^(whim):\\/\\/\\/[^\\s/$.?#].[^\\s]*$', 'u')) !== null,
  'WhimDeepLink',
);
export type WhimDeepLinkBrand = {
  readonly WhimDeepLink: unique symbol;
};

// EmptyObject
// The purpose of this remains a mystery
export type EmptyObject = t.Branded<{}, EmptyObjectBrand>;
export type EmptyObjectC = t.BrandC<t.PartialC<{}>, EmptyObjectBrand>;
export const EmptyObject: EmptyObjectC = t.brand(
  t.partial({}),
  (x): x is t.Branded<{}, EmptyObjectBrand> => true,
  'EmptyObject',
);
export type EmptyObjectBrand = {
  readonly EmptyObject: unique symbol;
};

// Common
// The default export. More information at the top.
export type Common = t.Branded<unknown, CommonBrand>;
export type CommonC = t.BrandC<t.UnknownC, CommonBrand>;
export const Common: CommonC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, CommonBrand> => true,
  'Common',
);
export type CommonBrand = {
  readonly Common: unique symbol;
};

export default Common;

// Success
