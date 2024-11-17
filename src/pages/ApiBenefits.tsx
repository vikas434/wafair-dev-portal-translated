import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Lock, DollarSign, Code, Settings, Clock, BarChart, Database } from 'lucide-react';

export default function ApiBenefits() {
  const { t } = useTranslation();

  const benefits = [
    { icon: Zap, title: t('apiBenefits.benefits.speed.title'), description: t('apiBenefits.benefits.speed.description') },
    { icon: Lock, title: t('apiBenefits.benefits.flexibility.title'), description: t('apiBenefits.benefits.flexibility.description') },
    { icon: DollarSign, title: t('apiBenefits.benefits.cost.title'), description: t('apiBenefits.benefits.cost.description') },
    { icon: Code, title: t('apiBenefits.benefits.compatibility.title'), description: t('apiBenefits.benefits.compatibility.description') },
    { icon: Settings, title: t('apiBenefits.benefits.customization.title'), description: t('apiBenefits.benefits.customization.description') },
    { icon: Clock, title: t('apiBenefits.benefits.availability.title'), description: t('apiBenefits.benefits.availability.description') },
    { icon: BarChart, title: t('apiBenefits.benefits.realtime.title'), description: t('apiBenefits.benefits.realtime.description') },
    { icon: Database, title: t('apiBenefits.benefits.integration.title'), description: t('apiBenefits.benefits.integration.description') }
  ];

  const metrics = t('metrics', { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('apiBenefits.title')}
      </h1>

      {/* Overview Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('apiBenefits.overview.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('apiBenefits.overview.description')}
        </p>

        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {t('apiBenefits.overview.examples.title')}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {[1, 2, 3].map((num) => (
            <li key={num}>
              {t(`apiBenefits.overview.examples.example${num}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Grid */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {t('apiBenefits.benefits.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Supporting Metrics */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Supporting Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1a4b8c] text-white">
                <th className="px-6 py-3 text-left">Vertical</th>
                <th className="px-6 py-3 text-left">OOSBO% Pre-API</th>
                <th className="px-6 py-3 text-left">OOSBO% Post-API</th>
                <th className="px-6 py-3 text-left">% Reduction of OOSBO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(metrics) && metrics.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{row.vertical}</td>
                  <td className="px-6 py-4">{row.preApi}</td>
                  <td className="px-6 py-4">{row.postApi}</td>
                  <td className="px-6 py-4 bg-green-100">{row.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}