import InterfaceI18n from '../models/i18n/InterfaceI18n';
import i18nEnglish from './english/i18nEnglish';
import i18nSpanish from './spanish/i18nSpanish';

let languageState = 'english';
let i18n: InterfaceI18n;
if (languageState === 'english') {
    i18n = i18nEnglish;
} else {
    i18n = i18nSpanish;
}

export default i18n;
