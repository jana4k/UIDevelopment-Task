import { useState } from 'react';

const mainNavItemsData = [
  { id: 'smm', name: "SMM", href: "#" },
  { id: 'seo', name: "SEO", href: "#" },
  { id: 'sem', name: "SEM", href: "#" },
  { id: 'linkedin', name: "Linkedin", href: "#" },
  { id: 'whatsapp', name: "Whatsapp And Email Campaign", href: "#" },
];

const smmSecondaryNavItemsData = [
  { id: 'instagram', name: "Instagram", href: "#" },
  { id: 'facebook', name: "Facebook", href: "#" },
];

const SubNavigation = ({ activePage, setActivePage }) => {
  // const [activeSMMSubPage, setActiveSMMSubPage] = useState('facebook'); // If SMM sub-nav needs state

  const tabWidths = {
    smm: '80px', 
    seo: '91px',
    sem: '80px', 
    linkedin: '110px', 
  };

  return (
    <div className="relative bg-white lg:bg-transparent">
      <nav className="h-subnav-height px-4 sm:px-[17px] md:px-[27px] border-b border-gray-200">
        <div className="max-w-full h-full flex items-end overflow-x-auto sm:overflow-visible">
          {mainNavItemsData.map((item) => (
            <div 
              key={item.id} 
              className="relative h-full flex items-center flex-shrink-0 mr-6 sm:mr-8 md:mr-10 lg:mr-12 last:mr-0"
              onClick={() => setActivePage(item.id)}
            >
              {activePage === item.id && (
                <div
                  className="absolute bottom-0 bg-white rounded-t-20 h-full"
                  style={{
                    width: tabWidths[item.id] || '90px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 -5px 10px -5px rgba(0,0,0,0.1)',
                  }}
                ></div>
              )}
              <a
                href={item.href}
                className={`relative z-10 font-poppins text-lg sm:text-20 leading-0.85 capitalize whitespace-nowrap pb-3 sm:pb-[10px] cursor-pointer
                  ${activePage === item.id ? 'font-medium text-brand-blue' : 'font-normal text-brand-dark-text hover:text-brand-blue'}
                `}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </nav>

      {activePage === 'smm' && (
        <nav className="h-auto py-3 px-4 sm:px-[17px] md:px-[27px] bg-gray-50 lg:bg-transparent">
          <div className="max-w-full flex items-center overflow-x-auto sm:overflow-visible">
            {smmSecondaryNavItemsData.map((item) => (
              <div 
                key={item.id} 
                className="relative flex items-center flex-shrink-0 mr-6 sm:mr-8 md:mr-10 last:mr-0"
                onClick={() => setActiveSMMSubPage(item.id)}
              >
                <a
                  href={item.href}
                  className={`font-poppins text-base sm:text-lg leading-normal capitalize whitespace-nowrap py-1 cursor-pointer
                    ${item.id === 'facebook' 
                      ? 'font-medium text-brand-blue border-b-2 border-brand-blue' 
                      : 'font-normal text-gray-600 hover:text-brand-dark-text'}
                  `}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};
export default SubNavigation;