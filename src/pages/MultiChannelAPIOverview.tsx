import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MultiChannelAPIOverview() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Multi-Channel Order API Overview */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t('multiChannelOrder.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {t('multiChannelOrder.description')}
        </p>
        <p className="text-lg text-gray-600">
          {t('multiChannelOrder.wsaInfo')}
        </p>
      </div>
      {/* Workflow Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t('workflowOverview.title')}
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          {t('workflowOverview.description')}
        </p>
        {/* Flow Chart 1 */}
        <div className="bg-gray-100 rounded-lg p-6">
          <img
            src={t('workflowOverview.flowChartUrl1')}
            alt={t('workflowOverview.flowChartAlt1')}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Flow Chart 1 Text */}
        <p className="text-sm text-gray-500 italic">
          {t('workflowOverview.diagramDescription1')}
        </p>
        {/* Separator */}
        <hr className="border-t-2 border-gray-300 my-8" />
        {/* Flow Chart 2 */}
        <div className="bg-gray-100 rounded-lg p-6">
          <img
            src={t('workflowOverview.flowChartUrl2')}
            alt={t('workflowOverview.flowChartAlt2')}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Flow Chart 2 Text */}
        <p className="text-sm text-gray-500 italic">
          {t('workflowOverview.diagramDescription2')}
        </p>
        {/* Separator */}
        <hr className="border-t-2 border-gray-300 my-8" />
        {/* Step-by-Step Walkthrough */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t('walkthrough.title')}
        </h2>
        <ol className="list-decimal list-inside text-lg text-gray-600 space-y-6">
          <li>
            <strong>{t('walkthrough.step1.title')}</strong>
            <p>
                {t('walkthrough.step1.description')}
            </p>
          </li>
          <li>
            <strong>{t('walkthrough.step2.title')}</strong>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
              <li>
                <strong>{t('walkthrough.step2.success.title')}</strong>
                <p>{t('walkthrough.step2.success.description')}</p>
              </li>
              <li>
                <strong>{t('walkthrough.step2.failure.title')}</strong>
                <p>{t('walkthrough.step2.failure.description')}</p>
              </li>
            </ul>
          </li>
          <li>
            <strong>{t('walkthrough.step3.title')}</strong>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
              <li>
                <strong>{t('walkthrough.step3.option1.title')}</strong>
                <p>
                  {t('walkthrough.step3.option1.description')}
                </p>
              </li>
              <li>
                <strong>{t('walkthrough.step3.option2.title')}</strong>
                <p>{t('walkthrough.step3.option2.description')}</p>
              </li>
            </ul>
          </li>
          <li>
            <strong>{t('walkthrough.step4.title')}</strong>
            <p>{t('walkthrough.step4.description')}</p>
          </li>
          <li>
            <strong>{t('walkthrough.step5.title')}</strong>
            <p>{t('walkthrough.step5.description')}</p>
          </li>
          <li>
            <strong>{t('walkthrough.step6.title')}</strong>
            <p>
              {t('walkthrough.step6.description')}{' '}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}