import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#4B0082] text-white py-3 text-center text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <a 
            href="https://terms.wayfair.io/en-US?csnid=3FA39FB6-DF4D-4A04-8A99-BACC8E048ADF&csnutid=0af4180b-629f-8175-1bfe-a26f13c7b402&txid=CvQCMmLoTa0Ucz5SLaPDAg%3D%3D#terms"
            className="text-white hover:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          <span className="text-white">|</span>
          <a 
            href="https://terms.wayfair.io/en-US?csnid=3FA39FB6-DF4D-4A04-8A99-BACC8E048ADF&csnutid=0af4180b-629f-8175-1bfe-a26f13c7b402&txid=CvQCMmLoTeoUcz5SLhccAg%3D%3D#privacy"
            className="text-white hover:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <span className="text-white ml-2">
            © 2002 - {currentYear} by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116
          </span>
        </div>
      </div>
    </footer>
  );
}