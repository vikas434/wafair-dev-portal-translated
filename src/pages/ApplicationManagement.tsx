import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, ToggleLeft, Key, RefreshCw, Save } from 'lucide-react';

export default function ApplicationManagement() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('applicationManagement.steps.sandbox.title'),
      description: t('applicationManagement.steps.sandbox.description'),
      icon: Plus
    },
    {
      title: t('applicationManagement.steps.production.title'),
      description: t('applicationManagement.steps.production.description'),
      icon: ToggleLeft
    },
    {
      title: t('applicationManagement.steps.credentials.title'),
      description: t('applicationManagement.steps.credentials.description'),
      icon: Key
    }
  ];

  const creationSteps = [
    { icon: Plus, text: t('applicationManagement.creation.steps.newApp.text') },
    { icon: ToggleLeft, text: t('applicationManagement.creation.steps.environment.text') },
    { icon: Save, text: t('applicationManagement.creation.steps.details.text') }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('applicationManagement.title')}
      </h1>

      {/* Overview */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <p className="text-gray-600">
          {t('applicationManagement.overview.description')}
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <step.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Creation Process */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t('applicationManagement.creation.title')}
        </h2>

        <div className="space-y-6">
          {creationSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <step.icon className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-700">{step.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Client Credentials Section */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t('applicationManagement.credentials.title')}
        </h2>

        <div className="space-y-6">
          <p className="text-gray-600">
            {t('applicationManagement.credentials.description')}
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <RefreshCw className="w-5 h-5 text-yellow-600 mt-0.5" />
              <p className="text-yellow-800">
                {t('applicationManagement.credentials.warning')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}