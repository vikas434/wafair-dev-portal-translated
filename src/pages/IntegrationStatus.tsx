import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, AlertCircle, Settings, List, FileCheck, History } from 'lucide-react';

export default function IntegrationStatus() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('integrationStatus.title')}
      </h1>

      {/* Introduction */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <CheckCircle className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('integrationStatus.introduction.title')}
            </h2>
            <p className="text-gray-600">
              {t('integrationStatus.introduction.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Production Steps */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Settings className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('integrationStatus.production.title')}
            </h2>
            <div className="space-y-4 mb-6">
              {t('integrationStatus.production.steps', { returnObjects: true }).map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-2 bg-blue-50 p-4 rounded-lg">
              <History className="w-5 h-5 text-blue-600 mt-0.5" />
              <p className="text-blue-800">{t('integrationStatus.production.note')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Supported APIs */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <List className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('integrationStatus.supportedApis.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('integrationStatus.supportedApis.description')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              {t('integrationStatus.supportedApis.list', { returnObjects: true }).map((api: string, index: number) => (
                <li key={index}>{api}</li>
              ))}
            </ul>
            <p className="text-gray-600 italic">
              {t('integrationStatus.supportedApis.note')}
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileCheck className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('integrationStatus.requirements.title')}
            </h2>
            
            <div className="space-y-2 mb-6">
              {t('integrationStatus.requirements.prerequisites', { returnObjects: true }).map((req: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">{req}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t('integrationStatus.requirements.criteria.title')}
            </h3>
            <ul className="space-y-4 mb-6">
              {Object.entries(t('integrationStatus.requirements.criteria', { returnObjects: true }))
                .filter(([key]) => key !== 'title')
                .map(([key, value]) => (
                  <li key={key} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <p className="text-gray-600">{value as string}</p>
                  </li>
              ))}
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <p className="text-yellow-800">{t('integrationStatus.requirements.note')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Access Note */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4 text-gray-600">
          <AlertCircle className="w-6 h-6 text-gray-500 mt-1" />
          <p>{t('integrationStatus.access.note')}</p>
        </div>
      </div>

      {/* Disable Instructions */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <p className="text-gray-600">
            {t('integrationStatus.disable.description')}
          </p>
        </div>
      </div>
    </div>
  );
}