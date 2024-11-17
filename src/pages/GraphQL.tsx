import React from 'react';
import { useTranslation } from 'react-i18next';
import { Database, FileJson, GitBranch, Info } from 'lucide-react';

export default function GraphQL() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('graphql.title')}
      </h1>

      {/* Introduction Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Database className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              {t('graphql.introduction.description')}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                {t('graphql.introduction.endpoint')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Types Note Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileJson className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                <p className="text-yellow-800">
                  {t('graphql.types.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why GraphQL Section */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <GitBranch className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('graphql.why.title')}
            </h2>
            <p className="text-gray-600">
              {t('graphql.why.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}