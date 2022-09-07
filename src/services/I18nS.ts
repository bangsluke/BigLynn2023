/* eslint-disable camelcase */

const EN: Record<TranslationKey, string> = {
  yes: 'Yes',
  no: 'No',
  cancel: 'Cancel',
  provideInputWithXAsParam: 'Please provide at least {fieldCount} fields for description.' // Use this with tWithParams Method, to provide dynamic values in translation.
};

const DE: Record<TranslationKey, string> = {
  yes: 'Ja',
  no: 'Nein',
  cancel: 'Abbrechen',
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

type TranslationKey = 'yes' | 'no' | 'cancel' | 'provideInputWithXAsParam';

const I18nS: any = {
  t,
  tWithParams
};

export default I18nS;
