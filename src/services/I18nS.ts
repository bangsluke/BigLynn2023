/* eslint-disable camelcase */

const EN: Record<TranslationKey, string> = {
  yes: 'Yes',
  no: 'No',
  cancel: 'Cancel',
  HOME_description: 'Homepage containing summary information for the tool',
  HOME_title: 'DVP Home Page',
  LANDING_description: 'The starting page of the app',
  LANDING_title: 'DVP Landing Page',
  INPUTS_description: 'The page for the user to enter their project details',
  INPUTS_title: 'DVP Inputs Page',
  RESULTS_description: 'The page for the user to enter their project details',
  RESULTS_title: 'DVP Inputs Page',
  PALS_description: 'The page for defining the vehicles attributes against competitors',
  PALS_definition: 'Product Attribute Leadership Strategy',
  PALS_title: 'PALS',
  VTS_description: 'The page for defining all VTSs',
  VTS_definition: 'Vehicle Testing Specification',
  VTS_title: 'VTS',
  SSTS_description: 'The page for defining all SSTSs',
  SSTS_definition: 'Sub-System Testing Specification',
  SSTS_title: 'SSTS',
  DVP_description: 'The page outputting all calculated DVP tests',
  DVP_definition: 'Design Verification Plan',
  DVP_title: 'DVP',
  PFM_description: 'The page providing details on the required prototype vehicles to test all DVP line items',
  PFM_definition: 'Prototype Fleet Management',
  PFM_title: 'PFM',
  PROTOTYPEBOM_description: 'The required bill of materials for the defined prototype vehicle fleet',
  PROTOTYPEBOM_definition: 'Prototype Bill of Materials',
  PROTOTYPEBOM_title: 'Prototype BoM',
  provideInputWithXAsParam: 'Please provide at least {fieldCount} fields for description.' // Use this with tWithParams Method, to provide dynamic values in translation.
};

const DE: Record<TranslationKey, string> = {
  yes: 'Ja',
  no: 'Nein',
  cancel: 'Abbrechen',
  HOME_description: 'TBC Homepage containing summary information for the tool',
  HOME_title: 'TBC DVP Home Page',
  LANDING_description: 'TBC The starting page of the app',
  LANDING_title: 'TBC DVP Landing Page',
  INPUTS_description: 'TBC The page for the user to enter their project details',
  INPUTS_title: 'TBC DVP Inputs Page',
  RESULTS_description: 'TBC The page for the user to enter their project details',
  RESULTS_title: 'TBC DVP Inputs Page',
  PALS_description: 'TBC The page for defining the vehicles attributes against competitors',
  PALS_definition: 'TBC Product Attribute Leadership Strategy',
  PALS_title: 'PALS',
  VTS_description: 'TBC The page for defining all VTSs',
  VTS_definition: 'TBC Vehicle Testing Specification',
  VTS_title: 'VTS',
  SSTS_description: 'TBC The page for defining all SSTSs',
  SSTS_definition: 'TBC Sub-System Testing Specification',
  SSTS_title: 'SSTS',
  DVP_description: 'TBC The page outputting all calculated DVP tests',
  DVP_definition: 'TBC Design Verification Plan',
  DVP_title: 'DVP',
  PFM_description: 'TBC The page providing details on the required prototype vehicles to test all DVP line items',
  PFM_definition: 'TBC Prototype Fleet Management',
  PFM_title: 'PFM',
  PROTOTYPEBOM_description: 'TBC The required bill of materials for the defined prototype vehicle fleet',
  PROTOTYPEBOM_definition: 'TBC Prototype Bill of Materials',
  PROTOTYPEBOM_title: 'TBC Prototype BoM',
  provideInputWithXAsParam: 'Bitte geben Sie mindestens {fieldCount} Felder zur Beschreibung an.'
};

const translationsForLocale = (locale: 'en' | 'de') => {
  if (locale === 'de') {
    return DE;
  }

  return EN;
};

// Use this method only for testing purposes! never use it in production code.
export const fullTranslate = (key: TranslationKey): string => {
  return translationsForLocale('en')[key] || key;
};

const isTest: boolean = process.env.NODE_ENV === 'test';

const t = (key: TranslationKey): string => {
  if (isTest) {
    return key;
  }
  return fullTranslate(key);
};

const tWithParams = (key: TranslationKey, params: Record<string, string> = {}): string => {
  const template = t(key);
  return template ? Object.keys(params).reduce((result, attr) => result.replace(`{${attr}}`, params[attr]), template) : '';
};

type TranslationKey =
  | 'yes'
  | 'no'
  | 'cancel'
  | 'HOME_description'
  | 'HOME_title'
  | 'LANDING_description'
  | 'LANDING_title'
  | 'INPUTS_description'
  | 'INPUTS_title'
  | 'RESULTS_description'
  | 'RESULTS_title'
  | 'PALS_description'
  | 'PALS_definition'
  | 'PALS_title'
  | 'VTS_description'
  | 'VTS_definition'
  | 'VTS_title'
  | 'SSTS_description'
  | 'SSTS_definition'
  | 'SSTS_title'
  | 'DVP_description'
  | 'DVP_definition'
  | 'DVP_title'
  | 'PFM_description'
  | 'PFM_definition'
  | 'PFM_title'
  | 'PROTOTYPEBOM_description'
  | 'PROTOTYPEBOM_definition'
  | 'PROTOTYPEBOM_title'
  | 'provideInputWithXAsParam';

const I18nS: any = {
  t,
  tWithParams
};

export default I18nS;
