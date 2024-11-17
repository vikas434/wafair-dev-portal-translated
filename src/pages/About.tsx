import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Shield, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Lightbulb, value: t('about.valuesList.innovation') },
    { icon: Shield, value: t('about.valuesList.quality') },
    { icon: Users, value: t('about.valuesList.inclusion') },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {t('about.title')}
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        {t('about.description')}
      </p>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('about.mission')}
        </h2>
        <p className="text-gray-600">
          {t('about.missionText')}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {t('about.values')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, value }, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-gray-700 font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}