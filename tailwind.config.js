/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#2B60FA',
        'brand-dark-text': '#2C313F',
        'brand-sidebar-bg': '#1E1B19',
        'brand-light-gray': '#EDEDED',
        'brand-medium-gray': '#B9B9B9',
        'brand-gray-gradient-start': '#D9D9D9',
        'brand-gray-gradient-end': '#737373',
        'white': '#FFFFFF',
      },
      spacing: {
        'sidebar': '376px',
        'page-header-top': '34px', // As per Figma
        'main-group-top-desktop': '156px', // Group 1171276422.top, for desktop layout
        'main-content-rect-top-desktop': '219px', // Rectangle 34624778.top
        'hero-section-pt': '40px', // 259px (hero bg) - 219px (main rect top)
        'hero-section-pl': '27px', // 403px (hero bg) - 376px (main rect left)
        'sidebar-item-h': '61px',
        'sidebar-logo-pl': '30px',
        'sidebar-logo-pt': '34px',
        'subnav-height': '63px', // Height of the subnav active tab
      },
      lineHeight: {
        '1': '1', // 100% line height
        '1.16': '1.16', // e.g., 74px for 64px font
        '0.85': '0.85', // e.g., 17px for 20px font (tight)
        '1.4': '1.4',   // e.g., 28px for 20px font
        '1.3': '1.3',   // e.g., 26px for 20px font
        '1.5': '1.5',   // e.g., 30px for 20px font
      },
      fontSize: {
        '14': '14px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '64': '64px',
      },
      borderRadius: {
        '5': '5px',
        '20': '20px',
      },
      boxShadow: {
        'figma-main': '0px 0px 24px rgba(0, 0, 0, 0.17)',
        'figma-image': '0px 13px 31px rgba(0, 0, 0, 0.15)',
      },
      maxWidth: {
        '1272': '1272px', // For main title block
        '1440': '1440px', // For main content group
        '490': '490px',   // For hero text block width
        '618': '618px',   // For content block text width
        '511': '511px',   // For benefits text block width
        '674': '674px',   // For benefits image grid width
        '890': '890px',   // For hero image max width
      }
    },
  },
  plugins: [],
}