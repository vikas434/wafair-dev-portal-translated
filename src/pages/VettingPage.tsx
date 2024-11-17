import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, Database, FileText, Info, Plus, ShoppingCart } from 'lucide-react';

export default function VettingPage() {
  const { t } = useTranslation();

  const inventoryFields = [
    { label: t('vetting.inventory.fields.supplierId'), description: t('vetting.inventory.fields.supplierIdDesc') },
    { label: t('vetting.inventory.fields.apiFeed'), description: t('vetting.inventory.fields.apiFeedDesc') },
    { label: t('vetting.inventory.fields.apiFeedId'), description: t('vetting.inventory.fields.apiFeedIdDesc') },
    { label: t('vetting.inventory.fields.apiFeedDate'), description: t('vetting.inventory.fields.apiFeedDateDesc') },
    { label: t('vetting.inventory.fields.otherFeed'), description: t('vetting.inventory.fields.otherFeedDesc') },
    { label: t('vetting.inventory.fields.otherFeedId'), description: t('vetting.inventory.fields.otherFeedIdDesc') },
    { label: t('vetting.inventory.fields.otherFeedDate'), description: t('vetting.inventory.fields.otherFeedDateDesc') },
    { label: t('vetting.inventory.fields.avgVariance'), description: t('vetting.inventory.fields.avgVarianceDesc') },
    { label: t('vetting.inventory.fields.unmatchedParts'), description: t('vetting.inventory.fields.unmatchedPartsDesc') },
    { label: t('vetting.inventory.fields.distinctParts'), description: t('vetting.inventory.fields.distinctPartsDesc') }
  ];

  const poFields = [
    { label: t('vetting.po.fields.poNumber'), description: t('vetting.po.fields.poNumberDesc') },
    { label: t('vetting.po.fields.supplierId'), description: t('vetting.po.fields.supplierIdDesc') },
    { label: t('vetting.po.fields.date'), description: t('vetting.po.fields.dateDesc') }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t('vetting.title')}
      </h1>

      {/* Introduction */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <p className="text-gray-600">
          {t('vetting.description')}
        </p>
      </div>

      {/* Using Vetting Page */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t('vetting.usage.title')}
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <ClipboardCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-gray-600">
              {t('vetting.usage.selectApp')}
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Plus className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-gray-600">
              {t('vetting.usage.tabs')}
            </p>
          </div>
        </div>
      </div>

      {/* Inventory Fields */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Database className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {t('vetting.inventory.title')}
            </h2>
            <p className="text-gray-600">
              {t('vetting.inventory.description')}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {inventoryFields.map((field, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium text-gray-900 mb-2">{field.label}</h3>
              <p className="text-gray-600 text-sm">{field.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Order Fields */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <ShoppingCart className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {t('vetting.po.title')}
            </h2>
            <p className="text-gray-600">
              {t('vetting.po.description')}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {poFields.map((field, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium text-gray-900 mb-2">{field.label}</h3>
              <p className="text-gray-600 text-sm">{field.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Context */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Info className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('vetting.context.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {t('vetting.context.points', { returnObjects: true }).map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}