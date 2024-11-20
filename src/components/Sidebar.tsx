import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  link?: string;
  children?: NavItem[];
}

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  currentLanguage: string;
}

export default function Sidebar({ currentPage, onNavigate, currentLanguage }: SidebarProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['getting-started']);

  const navigation: NavItem[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    children: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'api-benefits', label: 'API and Its Benefits' },
      { id: 'sandbox', label: 'Create Sandbox and Production Applications' },
      { id: 'authentication', label: 'Authentication' },
      { id: 'api-testing', label: 'API Testing' },
    ],
  },
  {
    id: 'developer-tools',
    label: 'Developer Tools',
    children: [
      { id: 'app-management', label: 'Application Management' },
      { id: 'graphql', label: 'GraphQL' },
      { id: 'graphiql', label: 'GraphiQL' },
      { id: 'postman', label: 'Using Postman' },
      { id: 'integration-status', label: 'API Integration Status' },
      { id: 'vetting', label: 'Vetting Page' },
    ],
  },
  {
    id: 'apis',
    label: 'Multi Channel API',
    children: [
      { id: 'mc-order-api', label: 'Overview' },
      { 
        id: 'mc-graphql-docs', 
        label: 'GraphQL Docs', 
        link: window.location.hostname.includes('localhost')
          ? `/public/${currentLanguage}/`
          : `/${currentLanguage}/`,
      },
    ],
  },
];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleNavigation = (itemId: string) => {
    onNavigate(itemId);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const isExpanded = expandedSections.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = currentPage === item.id || 
      (item.id === 'getting-started' && currentPage === 'introduction');
  
    const handleClick = () => {
      if (item.link) {
        window.open(item.link, '_blank');
      } else {
        handleNavigation(item.id);
      }
    };
  
    return (
      <div key={item.id} className="w-full">
        <button
          onClick={() => (hasChildren ? toggleSection(item.id) : handleClick())}
          className={`
            w-full text-left flex items-center justify-between
            px-4 py-2 rounded-lg transition-colors
            ${level === 0 ? 'text-lg font-bold' : 'text-base font-medium'}
            ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-50'}
          `}
        >
          <span>{item.label}</span>
          {hasChildren && (
            isExpanded ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )
          )}
        </button>
        
        {hasChildren && isExpanded && (
          <div className={`ml-${level + 4} mt-1 space-y-1`}>
            {item.children?.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <span className="block w-full h-0.5 bg-gray-600"></span>
          <span className="block w-full h-0.5 bg-gray-600"></span>
          <span className="block w-full h-0.5 bg-gray-600"></span>
        </div>
      </button>

      <aside className={`
        fixed top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64
      `}>
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-white z-10 p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
          </div>
          <div className="p-4 space-y-4">
            {navigation.map(item => renderNavItem(item))}
          </div>
        </div>
      </aside>
    </>
  );
}