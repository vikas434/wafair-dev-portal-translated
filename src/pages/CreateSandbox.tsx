import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Key, Lock, RefreshCw, Server, Terminal } from 'lucide-react';

export default function CreateSandbox() {
  const { t } = useTranslation();

  const endpoints = [
    {
      env: t('createSandbox.endpoints.sandbox.name'),
      url: t('createSandbox.endpoints.sandbox.url'),
      description: t('createSandbox.endpoints.sandbox.description')
    },
    {
      env: t('createSandbox.endpoints.production.name'),
      url: t('createSandbox.endpoints.production.url'),
      description: t('createSandbox.endpoints.production.description')
    }
  ];

  const steps = [
    {
      icon: Terminal,
      title: t('createSandbox.steps.access.title'),
      content: t('createSandbox.steps.access.content')
    },
    {
      icon: Server,
      title: t('createSandbox.steps.environment.title'),
      content: t('createSandbox.steps.environment.content')
    },
    {
      icon: Box,
      title: t('createSandbox.steps.testData.title'),
      content: t('createSandbox.steps.testData.content')
    },
    {
      icon: Key,
      title: t('createSandbox.steps.credentials.title'),
      content: t('createSandbox.steps.credentials.content')
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('createSandbox.title')}
      </h1>

      {/* Introduction */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <p className="text-gray-600 mb-6">
          {t('createSandbox.introduction')}
        </p>

        {/* Key Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <step.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Endpoints */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('createSandbox.endpoints.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {endpoints.map((endpoint, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {endpoint.env}
              </h3>
              <code className="block bg-gray-50 p-2 rounded text-sm text-indigo-600 mb-2">
                {endpoint.url}
              </code>
              <p className="text-sm text-gray-600">
                {endpoint.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Creation Process */}
      <div className="space-y-8">
        {/* Sandbox Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('createSandbox.sandboxCreation.title')}
          </h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              To start testing the API integration, create a Sandbox application first:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              {t('createSandbox.sandboxCreation.steps', { returnObjects: true }).map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Production Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('createSandbox.productionCreation.title')}
          </h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              After creating a Sandbox application, create a Production application:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              {t('createSandbox.productionCreation.steps', { returnObjects: true }).map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {t('createSandbox.credentials.title')}
              </h2>
              <p className="text-gray-600">
                {t('createSandbox.credentials.description')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <RefreshCw className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-sm text-yellow-800">
              {t('createSandbox.credentials.warning')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}