const meridaLogoPath = '/merida-tech-minds-logo-blue-2.png';

const navItemsData = [
  {
    id: 1,
    iconImgSrc: "/ai.png",
    textLines: ["Logo", "Designing"],
    active: false,
    figmaBgLeft: '-158px',
    figmaBgWidth: '330px',
    figmaOuterBorderLeft: '-158px',
    figmaOuterBorderWidth: '330px',
    itemTextColor: 'text-white',
    itemBgColor: 'bg-brand-sidebar-bg'
  },
  {
    id: 2,
    iconImgSrc: "/webApp.png",
    textLines: ["Web App", "Development"],
    active: false,
    figmaBgLeft: '-105px',
    figmaBgWidth: '277px',
    figmaOuterBorderLeft: '-153px',
    figmaOuterBorderWidth: '330px',
    itemTextColor: 'text-white',
    itemBgColor: 'bg-brand-sidebar-bg'
  },
  {
    id: 3,
    iconImgSrc: "/group.png",
    textLines: ["App", "Development"],
    active: false,
    figmaBgLeft: '-105px',
    figmaBgWidth: '277px',
    figmaOuterBorderLeft: '-153px',
    figmaOuterBorderWidth: '330px',
    itemTextColor: 'text-white',
    itemBgColor: 'bg-brand-sidebar-bg'
  },
  {
    id: 4,
    iconImgSrc: "/www.png",
    textLines: ["Website", "Development"],
    active: false,
    figmaBgLeft: '-105px',
    figmaBgWidth: '277px',
    figmaOuterBorderLeft: '-153px',
    figmaOuterBorderWidth: '330px',
    itemTextColor: 'text-white',
    itemBgColor: 'bg-brand-sidebar-bg'
  },
  {
    id: 5,
    iconImgSrc: "/ps.png",
    textLines: ["Graphic", "Design"],
    active: false,
    figmaBgLeft: '-105px',
    figmaBgWidth: '277px',
    figmaOuterBorderLeft: '-153px',
    figmaOuterBorderWidth: '330px',
    itemTextColor: 'text-white',
    itemBgColor: 'bg-brand-sidebar-bg'
  },
  {
    id: 6,
    iconImgSrc: "/ad.png",
    textLines: ["D.Marketing And", "Lead Generation"],
    active: true,
    figmaBgLeft: '-101px',
    figmaBgWidth: '277px',
    figmaOuterBorderLeft: '-149px',
    figmaOuterBorderWidth: '330px',
    itemTextColor: 'text-white',
    itemBgColor: 'bg-brand-blue',
    itemOuterBorderColor: 'border-brand-blue'
  },
];

const contentPaddingLeft = '20px';
const iconTextGap = '12px';

const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-white z-40 flex flex-col shadow-xl
        transition-transform duration-300 ease-in-out
        w-[280px] sm:w-[320px] lg:w-sidebar
        ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
        lg:translate-x-0 lg:shadow-none
      `}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-50 p-1"
        onClick={toggleMobileMenu}
        aria-label="Close navigation menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="pt-sidebar-logo-pt pl-sidebar-logo-pl mb-4 lg:mb-8">
        <img src={meridaLogoPath} alt="Merida Tech Minds" className="w-[150px] lg:w-[174px] h-auto lg:h-[78px]" />
      </div>
      <br /><br />
      <nav className="flex-grow overflow-y-auto">
        {navItemsData.map((item) => {
          const outerContainerLeft = item.figmaOuterBorderLeft;
          const outerContainerWidth = item.figmaOuterBorderWidth;

          const bgLeftNum = parseFloat(item.figmaBgLeft.replace('px', ''));
          const outerBorderLeftNum = parseFloat(item.figmaOuterBorderLeft.replace('px', ''));
          const innerBgLeftOffsetFromOuterContainer = `${bgLeftNum - outerBorderLeftNum}px`;

          return (
            <div
              key={item.id}
              onClick={() => { if (isMobileMenuOpen) toggleMobileMenu(); }}
              className="relative h-sidebar-item-h group cursor-pointer mb-1 flex items-center"
              style={{ paddingLeft: contentPaddingLeft }}
            >
              <div
                className={`absolute top-0 h-full rounded-5
                  ${item.active && item.itemOuterBorderColor ? `border ${item.itemOuterBorderColor}` : 'border border-transparent'}
                  ${!item.active ? 'group-hover:border-brand-blue/50' : ''}
                  transition-colors duration-150
                `}
                style={{
                  left: outerContainerLeft,
                  width: outerContainerWidth,
                  zIndex: 0,
                }}
              >
                <div
                  className={`absolute top-1/2 -translate-y-1/2 h-full rounded-5 ${item.itemBgColor}
                    ${!item.active ? 'group-hover:bg-brand-blue/80' : ''}
                    transition-colors duration-150
                  `}
                  style={{
                    left: innerBgLeftOffsetFromOuterContainer,
                    width: item.figmaBgWidth,
                    height: item.active && item.itemOuterBorderColor ? 'calc(100% - 4px)' : '100%',
                    margin: item.active && item.itemOuterBorderColor ? '2px' : '0',
                    zIndex: 1,
                  }}
                ></div>
              </div>

              <div
                className="relative z-10 flex items-center h-full"
              >
                <img
                    src={item.iconImgSrc}
                    alt={`${item.textLines[0]} icon`}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
                />
                <div
                  className={`font-poppins text-sm sm:text-14 leading-tight ${item.itemTextColor} ${item.active ? 'font-semibold' : 'font-normal'} capitalize`}
                  style={{
                    marginLeft: iconTextGap,
                    letterSpacing: item.active && item.id === 6 ? '-0.03em' : 'normal',
                    maxWidth: `calc(${item.figmaBgWidth} - ${iconTextGap} - ${contentPaddingLeft} - 28px - 10px)`
                  }}
                >
                  {item.textLines.map((line, index) => (
                    <span key={index} className="block">{line}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;