import * as mjsv from 'maasglobal-json-schema-validator';

export const registry: mjsv.Registry = {
  schemas: [
    require('../../schemas/core/balances.json'),
    require('../../schemas/core/booking-meta.json'),
    require('../../schemas/core/booking-option.json'),
    require('../../schemas/core/booking.json'),
    require('../../schemas/core/card.json'),
    require('../../schemas/core/components/ACRISS.json'),
    require('../../schemas/core/components/address.json'),
    require('../../schemas/core/components/agencyOptions.json'),
    require('../../schemas/core/components/ajv.json'),
    require('../../schemas/core/components/api-common.json'),
    require('../../schemas/core/components/authorization.json'),
    require('../../schemas/core/components/benefit-provider.json'),
    require('../../schemas/core/components/bike-station.json'),
    require('../../schemas/core/components/car-rental.json'),
    require('../../schemas/core/components/common.json'),
    require('../../schemas/core/components/configurator.json'),
    require('../../schemas/core/components/configuratorCommon.json'),
    require('../../schemas/core/components/configuratorV1.json'),
    require('../../schemas/core/components/configuratorV2.json'),
    require('../../schemas/core/components/cost.json'),
    require('../../schemas/core/components/costBreakDown.json'),
    require('../../schemas/core/components/customerSelection.json'),
    require('../../schemas/core/components/customerSelectionCommon.json'),
    require('../../schemas/core/components/customerSelectionV1.json'),
    require('../../schemas/core/components/customerSelectionV2.json'),
    require('../../schemas/core/components/fare.json'),
    require('../../schemas/core/components/geolocation.json'),
    require('../../schemas/core/components/geometry.json'),
    require('../../schemas/core/components/i18n.json'),
    require('../../schemas/core/components/message.json'),
    require('../../schemas/core/components/payment-parameters.json'),
    require('../../schemas/core/components/personalDataAllowItem.json'),
    require('../../schemas/core/components/personalDataValidation.json'),
    require('../../schemas/core/components/personalDocumentRequiredItem.json'),
    require('../../schemas/core/components/place.json'),
    require('../../schemas/core/components/point-cost.json'),
    require('../../schemas/core/components/spaceDemand.json'),
    require('../../schemas/core/components/state-log.json'),
    require('../../schemas/core/components/state.json'),
    require('../../schemas/core/components/station.json'),
    require('../../schemas/core/components/subscriptionChangeState.json'),
    require('../../schemas/core/components/system.json'),
    require('../../schemas/core/components/terms.json'),
    require('../../schemas/core/components/travel-mode.json'),
    require('../../schemas/core/components/units-geo.json'),
    require('../../schemas/core/components/units.json'),
    require('../../schemas/core/components/vehicle.json'),
    require('../../schemas/core/customer.json'),
    require('../../schemas/core/error.json'),
    require('../../schemas/core/iot-thing-shadow.json'),
    require('../../schemas/core/itinerary.json'),
    require('../../schemas/core/itineraryV2.json'),
    require('../../schemas/core/kyc-service.json'),
    require('../../schemas/core/leg.json'),
    require('../../schemas/core/legV2.json'),
    require('../../schemas/core/modes/MODE_BICYCLE.json'),
    require('../../schemas/core/modes/MODE_BUS.json'),
    require('../../schemas/core/modes/MODE_BUSISH.json'),
    require('../../schemas/core/modes/MODE_CABLE_CAR.json'),
    require('../../schemas/core/modes/MODE_CAR.json'),
    require('../../schemas/core/modes/MODE_FERRY.json'),
    require('../../schemas/core/modes/MODE_FUNICULAR.json'),
    require('../../schemas/core/modes/MODE_GONDOLA.json'),
    require('../../schemas/core/modes/MODE_RAIL.json'),
    require('../../schemas/core/modes/MODE_SCOOTER.json'),
    require('../../schemas/core/modes/MODE_SHARED_BICYCLE.json'),
    require('../../schemas/core/modes/MODE_SHARED_CAR.json'),
    require('../../schemas/core/modes/MODE_SHARED_E_BICYCLE.json'),
    require('../../schemas/core/modes/MODE_SUBWAY.json'),
    require('../../schemas/core/modes/MODE_TAXI.json'),
    require('../../schemas/core/modes/MODE_TRAIN.json'),
    require('../../schemas/core/modes/MODE_TRAINISH.json'),
    require('../../schemas/core/modes/MODE_TRAM.json'),
    require('../../schemas/core/modes/MODE_TRANSIT.json'),
    require('../../schemas/core/modes/MODE_WALK.json'),
    require('../../schemas/core/multimodal-plan.json'),
    require('../../schemas/core/multimodal-routes-metadata.json'),
    require('../../schemas/core/package-option.json'),
    require('../../schemas/core/partialFavoriteLocation.json'),
    require('../../schemas/core/paymentSource.json'),
    require('../../schemas/core/personal-document.json'),
    require('../../schemas/core/plan.json'),
    require('../../schemas/core/product-option.json'),
    require('../../schemas/core/product-optionV2.json'),
    require('../../schemas/core/product.json'),
    require('../../schemas/core/profile.json'),
    require('../../schemas/core/region.json'),
    require('../../schemas/core/stop.json'),
    require('../../schemas/environments/accounts.json'),
    require('../../schemas/environments/apis.json'),
    require('../../schemas/environments/environments.json'),
    require('../../schemas/environments/synopses.json'),
    require('../../schemas/environments/synopsis.json'),
    require('../../schemas/geojson/geometry.json'),
    require('../../schemas/maas-backend/auth/auth-sms-login/request.json'),
    require('../../schemas/maas-backend/auth/auth-sms-request-code/request.json'),
    require('../../schemas/maas-backend/autocomplete/autocomplete-query/request.json'),
    require('../../schemas/maas-backend/autocomplete/autocomplete-query/response.json'),
    require('../../schemas/maas-backend/autocomplete/autocomplete-query/suggestion.json'),
    require('../../schemas/maas-backend/booking-option-create/request.json'),
    require('../../schemas/maas-backend/booking-option-create/response.json'),
    require('../../schemas/maas-backend/booking-virtual-create/request.json'),
    require('../../schemas/maas-backend/booking-virtual-create/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-agency-options/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-agency-options/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-agency-products/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-agency-products/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-cancel/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-cancel/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-create/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-create/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-list/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-list/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-options/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-options/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-retrieve/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-retrieve/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-update/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-update/response.json'),
    require('../../schemas/maas-backend/bookings/bookings-upload/request.json'),
    require('../../schemas/maas-backend/bookings/bookings-upload/response.json'),
    require('../../schemas/maas-backend/bookings/v2/bookings-create/request.json'),
    require('../../schemas/maas-backend/bookings/v2/bookings-create/response.json'),
    require('../../schemas/maas-backend/coupons/code.json'),
    require('../../schemas/maas-backend/coupons/coupons-validate/request.json'),
    require('../../schemas/maas-backend/coupons/coupons-validate/response.json'),
    require('../../schemas/maas-backend/coupons/v2/coupons-redeem/request.json'),
    require('../../schemas/maas-backend/coupons/v2/coupons-redeem/response.json'),
    require('../../schemas/maas-backend/customers/benefits/initiate/request.json'),
    require('../../schemas/maas-backend/customers/benefits/initiate/response.json'),
    require('../../schemas/maas-backend/customers/customer.json'),
    require('../../schemas/maas-backend/customers/delete/request.json'),
    require('../../schemas/maas-backend/customers/delete/response.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/add/request.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/add/response.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/delete/request.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/list/request.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/list/response.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/update/request.json'),
    require('../../schemas/maas-backend/customers/favorite-locations/update/response.json'),
    require('../../schemas/maas-backend/customers/payment-sources/create/request.json'),
    require('../../schemas/maas-backend/customers/payment-sources/delete/request.json'),
    require('../../schemas/maas-backend/customers/payment-sources/paymentSource.json'),
    require('../../schemas/maas-backend/customers/payment-sources/setup-intent/request.json'),
    require('../../schemas/maas-backend/customers/payment-sources/setup-intent/response.json'),
    require('../../schemas/maas-backend/customers/payment-sources/update/request.json'),
    require('../../schemas/maas-backend/customers/payment-sources/update/response.json'),
    require('../../schemas/maas-backend/customers/personal-data-delete/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/consent/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/consent/response.json'),
    require('../../schemas/maas-backend/customers/personal-documents/create/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/create/response.json'),
    require('../../schemas/maas-backend/customers/personal-documents/initiate/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/initiate/response.json'),
    require('../../schemas/maas-backend/customers/personal-documents/remove/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/remove/response.json'),
    require('../../schemas/maas-backend/customers/personal-documents/revoke-consent/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/revoke-consent/response.json'),
    require('../../schemas/maas-backend/customers/personal-documents/update/request.json'),
    require('../../schemas/maas-backend/customers/personal-documents/update/response.json'),
    require('../../schemas/maas-backend/customers/personalData.json'),
    require('../../schemas/maas-backend/customers/retrieve/request.json'),
    require('../../schemas/maas-backend/customers/retrieve/response.json'),
    require('../../schemas/maas-backend/customers/stats/request.json'),
    require('../../schemas/maas-backend/customers/stats/response.json'),
    require('../../schemas/maas-backend/customers/update/request.json'),
    require('../../schemas/maas-backend/customers/update/response.json'),
    require('../../schemas/maas-backend/customers/verification/initiate/request.json'),
    require('../../schemas/maas-backend/customers/verification/initiate/response.json'),
    require('../../schemas/maas-backend/customers/verification/media/get/request.json'),
    require('../../schemas/maas-backend/customers/verification/media/list/request.json'),
    require('../../schemas/maas-backend/customers/verification/register/request.json'),
    require('../../schemas/maas-backend/customers/verification/register/response.json'),
    require('../../schemas/maas-backend/customers/verification/status/response.json'),
    require('../../schemas/maas-backend/customers/verification/verification-object.json'),
    require('../../schemas/maas-backend/customers/verification/webhooks/decision/request.json'),
    require('../../schemas/maas-backend/customers/verification/webhooks/event/request.json'),
    require('../../schemas/maas-backend/customers/virtual-card-issue/request.json'),
    require('../../schemas/maas-backend/customers/virtual-card-issue/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/add-token-reference/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/add-token-reference/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/create/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/create/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/get-token-reference/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/get-token-reference/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/import-transactions/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/import-transactions/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/list-transactions/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/list-transactions/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/provision/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/provision/response.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/remove/request.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/virtualCard.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/virtualCardAccountPosting.json'),
    require('../../schemas/maas-backend/customers/virtual-cards/virtualCardTokenReference.json'),
    require('../../schemas/maas-backend/geocoding/geocoding-query/request.json'),
    require('../../schemas/maas-backend/geocoding/geocoding-query/response.json'),
    require('../../schemas/maas-backend/geocoding/geocoding-reverse/request.json'),
    require('../../schemas/maas-backend/geocoding/geocoding-reverse/response.json'),
    require('../../schemas/maas-backend/invoices/invoice.json'),
    require('../../schemas/maas-backend/invoices/invoiceLineItem.json'),
    require('../../schemas/maas-backend/invoices/invoiceUnits.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-cancel/request.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-cancel/response.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-create/request-v1.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-create/request-v2.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-create/request.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-create/response.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-estimate/request.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-estimate/response.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-list/request.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-list/response.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-retrieve/request.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-retrieve/response.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-update/request.json'),
    require('../../schemas/maas-backend/itineraries/itinerary-update/response.json'),
    require('../../schemas/maas-backend/products/products-providers-list/request.json'),
    require('../../schemas/maas-backend/products/products-providers-list/response.json'),
    require('../../schemas/maas-backend/products/products-providers-options/request.json'),
    require('../../schemas/maas-backend/products/products-providers-options/response.json'),
    require('../../schemas/maas-backend/products/products-providers-retrieve/request.json'),
    require('../../schemas/maas-backend/products/products-providers-retrieve/response.json'),
    require('../../schemas/maas-backend/products/provider.json'),
    require('../../schemas/maas-backend/profile/profile-devices-put/request.json'),
    require('../../schemas/maas-backend/profile/profile-devices-put/response.json'),
    require('../../schemas/maas-backend/profile/profile-edit/request.json'),
    require('../../schemas/maas-backend/profile/profile-edit/response.json'),
    require('../../schemas/maas-backend/profile/profile-favoriteLocations-add/request.json'),
    require('../../schemas/maas-backend/profile/profile-favoriteLocations-add/response.json'),
    require('../../schemas/maas-backend/profile/profile-favoriteLocations-delete/request.json'),
    require('../../schemas/maas-backend/profile/profile-favoriteLocations-delete/response.json'),
    require('../../schemas/maas-backend/profile/profile-info/request.json'),
    require('../../schemas/maas-backend/profile/profile-info/response.json'),
    require('../../schemas/maas-backend/profile/profile-webhook/request.json'),
    require('../../schemas/maas-backend/profile/profile-webhook/response.json'),
    require('../../schemas/maas-backend/provider/autocomplete/request.json'),
    require('../../schemas/maas-backend/provider/autocomplete/response.json'),
    require('../../schemas/maas-backend/provider/geocoding-reverse/request.json'),
    require('../../schemas/maas-backend/provider/geocoding-reverse/response.json'),
    require('../../schemas/maas-backend/provider/geocoding/request.json'),
    require('../../schemas/maas-backend/provider/geocoding/response.json'),
    require('../../schemas/maas-backend/provider/routes/request.json'),
    require('../../schemas/maas-backend/provider/routes/response.json'),
    require('../../schemas/maas-backend/provider/sms/request.json'),
    require('../../schemas/maas-backend/provider/sms/response.json'),
    require('../../schemas/maas-backend/push-notification/request.json'),
    require('../../schemas/maas-backend/push-notification/response.json'),
    require('../../schemas/maas-backend/regions/regions-options/request.json'),
    require('../../schemas/maas-backend/regions/regions-options/response.json'),
    require('../../schemas/maas-backend/routes/routes-query-v4/request.json'),
    require('../../schemas/maas-backend/routes/routes-query-v4/response.json'),
    require('../../schemas/maas-backend/routes/routes-query/request.json'),
    require('../../schemas/maas-backend/routes/routes-query/response.json'),
    require('../../schemas/maas-backend/stations/stations-list/request.json'),
    require('../../schemas/maas-backend/stations/stations-list/response.json'),
    require('../../schemas/maas-backend/stations/stations-retrieve/request.json'),
    require('../../schemas/maas-backend/stations/stations-retrieve/response.json'),
    require('../../schemas/maas-backend/subscriptions/contact.json'),
    require('../../schemas/maas-backend/subscriptions/pricing.json'),
    require('../../schemas/maas-backend/subscriptions/subscription-intent.json'),
    require('../../schemas/maas-backend/subscriptions/subscription.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptionAddress.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptionOption.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-change-state/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-change-state/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-create/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-create/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-estimate/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-estimate/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-create/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-create/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-list/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-list/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-retrieve/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-retrieve/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-update-state/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-update-state/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-update/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-intents-update/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-options/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-options/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-package/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-package/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-retrieve/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-retrieve/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-scheduled-change-delete/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-scheduled-change-delete/response.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-update/request.json'),
    require('../../schemas/maas-backend/subscriptions/subscriptions-update/response.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-itinerary-get/request.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-itinerary-get/response.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-itinerary-set/request.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-itinerary-set/response.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-leg-get/request.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-leg-get/response.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-leg-set/request.json'),
    require('../../schemas/maas-backend/tracking/tracking-active-leg-set/response.json'),
    require('../../schemas/maas-backend/tracking/tracking-cancel-active-itinerary/request.json'),
    require('../../schemas/maas-backend/tracking/tracking-cancel-active-itinerary/response.json'),
    require('../../schemas/maas-backend/tracking/tracking-update-user-location/request.json'),
    require('../../schemas/maas-backend/tracking/tracking-update-user-location/response.json'),
    require('../../schemas/maas-backend/tsp-auth/expire/request.json'),
    require('../../schemas/maas-backend/tsp-auth/init/request.json'),
    require('../../schemas/maas-backend/tsp-auth/init/response.json'),
    require('../../schemas/maas-backend/tsp-auth/set/request.json'),
    require('../../schemas/maas-backend/tsp-auth/validate/request.json'),
    require('../../schemas/maas-backend/tsp-auth/validate/response.json'),
    require('../../schemas/maas-backend/tsp-auth/verify/definitions.json'),
    require('../../schemas/maas-backend/tsp-auth/verify/request.json'),
    require('../../schemas/maas-backend/tsp-auth/verify/response.json'),
    require('../../schemas/maas-backend/vehicle/vehicle-alert/request.json'),
    require('../../schemas/maas-backend/vehicle/vehicle-alert/response.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-bookings-create/request.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-bookings-create/response.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-bookings-update/request.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-bookings-update/response.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-message-to-user/request.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-message-to-user/response.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-payments/gateway/stripe.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-payments/gateway/yaband.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-payments/request.json'),
    require('../../schemas/maas-backend/webhooks/webhooks-payments/response.json'),
    require('../../schemas/maas-backend/webhooks/zendesk-push-notification/request.json'),
    require('../../schemas/maas-backend/webhooks/zendesk-push-notification/response.json'),
    require('../../schemas/tsp/booking-cancel/request.json'),
    require('../../schemas/tsp/booking-cancel/response.json'),
    require('../../schemas/tsp/booking-create/request.json'),
    require('../../schemas/tsp/booking-create/response.json'),
    require('../../schemas/tsp/booking-options-list/request.json'),
    require('../../schemas/tsp/booking-options-list/response.json'),
    require('../../schemas/tsp/booking-read-by-id/request.json'),
    require('../../schemas/tsp/booking-read-by-id/response.json'),
    require('../../schemas/tsp/booking-receipt/request.json'),
    require('../../schemas/tsp/booking-receipt/response.json'),
    require('../../schemas/tsp/booking-ticket/request.json'),
    require('../../schemas/tsp/booking-ticket/response.json'),
    require('../../schemas/tsp/booking-update/request.json'),
    require('../../schemas/tsp/booking-update/response.json'),
    require('../../schemas/tsp/booking-upload/request.json'),
    require('../../schemas/tsp/booking-upload/response.json'),
    require('../../schemas/tsp/customer-auth-validate/request.json'),
    require('../../schemas/tsp/customer-auth-validate/response.json'),
    require('../../schemas/tsp/customer-auth/request.json'),
    require('../../schemas/tsp/customer-auth/response.json'),
    require('../../schemas/tsp/customer-registration/request.json'),
    require('../../schemas/tsp/customer-registration/response.json'),
    require('../../schemas/tsp/estimate/request.json'),
    require('../../schemas/tsp/estimate/response.json'),
    require('../../schemas/tsp/journey-planner/request.json'),
    require('../../schemas/tsp/journey-planner/response.json'),
    require('../../schemas/tsp/manage/request.json'),
    require('../../schemas/tsp/manage/response.json'),
    require('../../schemas/tsp/package-create/request.json'),
    require('../../schemas/tsp/package-create/response.json'),
    require('../../schemas/tsp/post-kyc-verification-update/request.json'),
    require('../../schemas/tsp/post-kyc-verification-update/response.json'),
    require('../../schemas/tsp/stations-list/request.json'),
    require('../../schemas/tsp/stations-list/response.json'),
    require('../../schemas/tsp/stations-retrieve/request.json'),
    require('../../schemas/tsp/stations-retrieve/response.json'),
    require('../../schemas/tsp/vehicle-alert/request.json'),
    require('../../schemas/tsp/vehicle-alert/response.json'),
    require('../../schemas/tsp/webhooks-bookings-update/remote-request.json'),
    require('../../schemas/tsp/webhooks-bookings-update/remote-response.json'),
  ],
};

module.exports = registry;
