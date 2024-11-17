import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          <span className="text-xl font-medium">Wayfair Developer</span>
        </div>
      </div>
    </header>
  );
}