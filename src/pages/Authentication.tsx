import React from 'react';
import { useTranslation } from 'react-i18next';
import { Key, Clock, Database, Globe, AlertCircle } from 'lucide-react';

export default function Authentication() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('authentication.title')}
      </h1>

      {/* Overview Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Key className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('authentication.overview.title')}
            </h2>
            <p className="text-gray-600">
              {t('authentication.overview.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Token Expiration Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Clock className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('authentication.tokenExpiration.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('authentication.tokenExpiration.description')}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                {t('authentication.tokenExpiration.recommendation')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Credentials Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Database className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('authentication.clientCredentials.title')}
            </h2>
            <p className="text-gray-600">
              {t('authentication.clientCredentials.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Token Response Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('authentication.tokenResponse.title')}
        </h2>
        <p className="text-gray-600 mb-4">
          {t('authentication.tokenResponse.description')}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          {Object.values(t('authentication.tokenResponse.fields', { returnObjects: true })).map((field, index) => (
            <li key={index}>{field}</li>
          ))}
        </ul>
        <p className="text-gray-600 mb-4">
          {t('authentication.tokenResponse.usage')}
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <code className="text-sm text-indigo-600">
            {t('authentication.tokenResponse.example')}
          </code>
        </div>
      </div>

      {/* Audience URLs Section */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('authentication.audienceUrls.title')}
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <p className="text-blue-800">
                  {t('authentication.audienceUrls.note')}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-700 mb-2">Sandbox</p>
                <code className="text-sm text-indigo-600">
                  {t('authentication.audienceUrls.sandbox')}
                </code>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-700 mb-2">Production</p>
                <code className="text-sm text-indigo-600">
                  {t('authentication.audienceUrls.production')}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}