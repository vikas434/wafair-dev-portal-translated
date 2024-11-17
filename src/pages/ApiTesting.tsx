import React from 'react';
import { useTranslation } from 'react-i18next';
import { TestTube, Code, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ApiTesting() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('apiTesting.title')}
      </h1>

      {/* Introduction Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <TestTube className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('apiTesting.introduction.title')}
            </h2>
            <p className="text-gray-600">
              {t('apiTesting.introduction.description')}
            </p>
          </div>
        </div>
      </div>

      {/* GraphiQL Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Code className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('apiTesting.graphiql.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('apiTesting.graphiql.description')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('apiTesting.graphiql.codeGeneration')}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                {t('apiTesting.graphiql.moreInfo')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Endpoints Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('apiTesting.endpoints.title')}
            </h2>

            {/* Sandbox Endpoint */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('apiTesting.endpoints.sandbox.title')}
              </h3>
              <p className="text-gray-600 mb-2">
                {t('apiTesting.endpoints.sandbox.description')}
              </p>
              <code className="block bg-gray-50 p-3 rounded-lg text-indigo-600">
                {t('apiTesting.endpoints.sandbox.url')}
              </code>
            </div>

            {/* Production Endpoint */}
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('apiTesting.endpoints.production.title')}
              </h3>
              <p className="text-gray-600 mb-2">
                {t('apiTesting.endpoints.production.description')}
              </p>
              <code className="block bg-gray-50 p-3 rounded-lg text-indigo-600">
                {t('apiTesting.endpoints.production.url')}
              </code>
            </div>

            <p className="text-gray-600 italic">
              {t('apiTesting.endpoints.note')}
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Testing Section */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <CheckCircle className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('apiTesting.workflow.title')}
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <p className="text-yellow-800">
                  {t('apiTesting.workflow.note')}
                </p>
              </div>
            </div>

            <p className="text-gray-600">
              {t('apiTesting.workflow.production')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}