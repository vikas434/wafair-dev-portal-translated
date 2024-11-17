import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Code, History, FolderPlus, Globe, FileJson } from 'lucide-react';

export default function UsingPostman() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('postman.title')}
      </h1>

      {/* HTTP Requests Overview */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t('postman.http.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('postman.http.description')}
        </p>

        {/* GET Request */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t('postman.http.get.title')}
          </h3>
          <p className="text-gray-600">
            {t('postman.http.get.description')}
          </p>
        </div>

        {/* POST Request */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t('postman.http.post.title')}
          </h3>
          <p className="text-gray-600">
            {t('postman.http.post.description')}
          </p>
        </div>
      </div>

      {/* Postman Introduction */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Send className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('postman.intro.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('postman.intro.description')}
            </p>
            <div className="space-y-4">
              {t('postman.intro.features', { returnObjects: true }).map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Authentication */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('postman.auth.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('postman.auth.description')}
            </p>
            <div className="space-y-6">
              {t('postman.auth.steps', { returnObjects: true }).map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* API Integration */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileJson className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('postman.integration.title')}
            </h2>
            <div className="space-y-6">
              {t('postman.integration.steps', { returnObjects: true }).map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="space-y-8">
        {/* Collections */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FolderPlus className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('postman.collections.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('postman.collections.description')}
              </p>
              <div className="space-y-6">
                {t('postman.collections.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <History className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('postman.history.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('postman.history.description')}
              </p>
              <div className="space-y-4">
                {t('postman.history.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code Generation */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Code className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('postman.codeGen.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('postman.codeGen.description')}
              </p>
              <div className="space-y-4">
                {t('postman.codeGen.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}