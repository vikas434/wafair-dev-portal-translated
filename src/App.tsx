import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import Header from './components/Header';
import LanguageSwitcher from './components/LanguageSwitcher';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApiBenefits from './pages/ApiBenefits';
import CreateSandbox from './pages/CreateSandbox';
import Authentication from './pages/Authentication';
import ApiTesting from './pages/ApiTesting';
import ApplicationManagement from './pages/ApplicationManagement';
import GraphQL from './pages/GraphQL';
import GraphiQL from './pages/GraphiQL';
import UsingPostman from './pages/UsingPostman';
import IntegrationStatus from './pages/IntegrationStatus';
import VettingPage from './pages/VettingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('siteTitle');
  }, [t]);

  const renderPage = () => {
    switch (currentPage) {
      case 'api-benefits':
        return <ApiBenefits />;
      case 'sandbox':
        return <CreateSandbox />;
      case 'authentication':
        return <Authentication />;
      case 'api-testing':
        return <ApiTesting />;
      case 'app-management':
        return <ApplicationManagement />;
      case 'graphql':
        return <GraphQL />;
      case 'graphiql':
        return <GraphiQL />;
      case 'postman':
        return <UsingPostman />;
      case 'integration-status':
        return <IntegrationStatus />;
      case 'vetting':
        return <VettingPage />;
      case 'introduction':
      case 'home':
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <LanguageSwitcher />
      
      <div className="lg:pl-64 pt-16 pb-16">
        <main className="min-h-screen">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;