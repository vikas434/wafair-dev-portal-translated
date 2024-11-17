import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, History, FileSearch, GitBranch, Terminal, Settings } from 'lucide-react';

export default function GraphiQL() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Settings,
      title: t('graphiql.sections.appSelection.title'),
      content: t('graphiql.sections.appSelection.content')
    },
    {
      icon: Code,
      title: t('graphiql.sections.exampleGen.title'),
      content: t('graphiql.sections.exampleGen.content')
    },
    {
      icon: Terminal,
      title: t('graphiql.sections.ide.title'),
      content: t('graphiql.sections.ide.content')
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('graphiql.title')}
      </h1>

      {/* Overview */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <p className="text-gray-600 mb-6">
          {t('graphiql.overview')}
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            {t('graphiql.access')}
          </p>
        </div>
      </div>

      {/* Main Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <section.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Code Generation */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Code className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('graphiql.codeGen.title')}
            </h2>
            <div className="space-y-4">
              {t('graphiql.codeGen.steps', { returnObjects: true }).map((step: string, index: number) => (
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

      {/* History Section */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <History className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('graphiql.history.title')}
            </h2>
            <p className="text-gray-600">
              {t('graphiql.history.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Documentation Explorer */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileSearch className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('graphiql.docExplorer.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {t('graphiql.docExplorer.description')}
            </p>
            <div className="space-y-4">
              {t('graphiql.docExplorer.steps', { returnObjects: true }).map((step: string, index: number) => (
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
  );
}