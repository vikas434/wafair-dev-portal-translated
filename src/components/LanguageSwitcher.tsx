import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  onLanguageChange: (language: string) => void;
}

export default function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onLanguageChange(lng);
  };

  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-2">
      <div className="flex items-center gap-2 px-3 py-2">
        <Languages className="w-5 h-5 text-indigo-600" />
        <span className="text-sm font-medium text-gray-700">
          {t('language.select')}
        </span>
      </div>
      <div className="border-t border-gray-100">
        {['en', 'zh', 'de'].map((lng) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-indigo-50 transition-colors
              ${i18n.language === lng ? 'text-indigo-600 font-medium' : 'text-gray-700'}`}
          >
            {t(`language.${lng}`)}
          </button>
        ))}
      </div>
    </div>
  );
}