import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
}

export default function Feature({ icon: Icon, title }: FeatureProps) {
  return (
    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
      <div className="p-2 bg-indigo-100 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <span className="text-gray-700">{title}</span>
    </div>
  );
}