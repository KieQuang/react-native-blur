import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import dayjs from 'dayjs';
import 'dayjs/locale/ms';

import intro from 'i18n/language/en/intro.json';
import home from 'i18n/language/en/home.json';
import common from 'i18n/language/en/common.json';
import popup from 'i18n/language/en/popup.json';
import explore from 'i18n/language/en/explore.json';
import profile from 'i18n/language/en/profile.json';
import notification from 'i18n/language/en/notification.json';
import trending from 'i18n/language/en/trending.json';
import collection from 'i18n/language/en/collection.json';

export const defaultNS = 'common';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      intro: typeof intro;
      common: typeof common;
      home: typeof home;
      popup: typeof popup;
      notification: typeof notification;
      explore: typeof explore;
      profile: typeof profile;
      trending: typeof trending;
      collection: typeof collection;
    };
  }
}

export const resources = {
  en: {
    intro,
    common,
    home,
    popup,
    notification,
    explore,
    profile,
    trending,
    collection,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  compatibilityJSON: 'v3',
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

i18n.on('languageChanged', lng => {
  dayjs.locale(lng);
});
