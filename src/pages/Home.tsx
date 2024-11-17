import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, FileText, ShieldCheck, Terminal, TestTube } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const integrationSteps = [
    { icon: FileText, title: t('steps.benefits') },
    { icon: Terminal, title: t('steps.createApp') },
    { icon: ShieldCheck, title: t('steps.auth') },
    { icon: TestTube, title: t('steps.testing') }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t('welcome.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {t('welcome.description')}
        </p>
        <p className="text-gray-600">
          {t('welcome.subDescription')}
        </p>
      </div>

      {/* Current Suppliers Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('suppliers.current.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('suppliers.current.description')}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          {t('links.submitTicket')} <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      {/* Prospective Suppliers Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('suppliers.prospective.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('suppliers.prospective.description')}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          {t('links.sellOnWayfair')} <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      {/* Auth Info */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <p className="text-gray-700">
          {t('auth.description')}
        </p>
      </div>

      {/* Integration Steps */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('integration.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('integration.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {integrationSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="p-2 bg-indigo-100 rounded-lg">
                <step.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-gray-700 font-medium">{step.title}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-600 italic">
          {t('integration.note')}
        </p>
      </div>
    </div>
  );
}