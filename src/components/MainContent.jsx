import SubNavigation from './SubNavigation';
import SEOPageContent from './SEOPageContent';
import SMMPageContent from './SMMPageContent';
import LinkedInPageContent from './LinkedInPageContent';
import { useState } from 'react';

const MainContentWrapper = () => {
  const [activePage, setActivePage] = useState('linkedin');

  return (
    <div 
      className="relative max-w-1440 mx-auto lg:mt-0 shadow-figma-main"
    >
      <SubNavigation activePage={activePage} setActivePage={setActivePage} />
      
      <div 
        className="bg-white rounded-bl-20 rounded-br-20 rounded-tr-20"
      >
        {activePage === 'smm' && <SMMPageContent />}
        {activePage === 'seo' && <SEOPageContent />}
        {activePage === 'linkedin' && <LinkedInPageContent />}
      </div>
    </div>
  );
};

export default MainContentWrapper;