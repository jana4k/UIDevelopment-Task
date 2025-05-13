import ContentBlock from './ContentBlock';
import BenefitsSection from './BenefitsSection';
const seoHeroImageUrl = '../../public/pngegg--28--2.png';

const seoHeroData = {
  titlePart1: "Search Engine Optimization",
  titlePart2: "– Get Seen By The Right People",
  text: "Ever searched for something on Google and noticed some websites always show up first? That is SEO working behind the scenes. It helps your website rank higher so the right people can find you easily. More visibility means more visitors, and more visitors mean more business. SEO is not a one-time thing as it involves continuous updates, tweaks, and changing strategies. We at Merida Tech Minds do all the behind-the-scenes work so your website climbs up the ranks while you focus on running your business.",
  imageUrl: seoHeroImageUrl,
  imageAlt: "SEO Concepts",
};

const seoContentBlocksData = [
  { imageSrc: "/mask-group.png", title: "Competitor Analysis and Keyword Research", text: "We figure out what your competitors are doing right, find the exact words people search for, and make sure your website speaks their language so it shows up first.", imagePosition: "left", maskSizeClass: "w-full md:w-[720px] h-[182px]" },
  { imageSrc: "/mask-group-1.png", title: "On-Page SEO", text: "Your website needs to make sense to both people and search engines. We fix your titles, headings, and the entire meta content so Google knows what you are about, and visitors find what they need without a hassle.", imagePosition: "right", maskSizeClass: "w-full md:w-[720px] h-[182px]" },
  { imageSrc: "/mask-group-2.png", title: "Off-Page SEO", text: "Google trusts websites that others talk about. We help you get mentions, quality backlinks, and a strong online presence so your website is seen as important and ranks where it belongs—at the top.", imagePosition: "left", maskSizeClass: "w-full md:w-[720px] h-[182px]" },
  { imageSrc: "/mask-group-3.png", title: "Local SEO", text: "If someone nearby searches for what you offer, your business should pop up first. We set up your Google profile, optimize your listings, and make sure locals find you fast when they need you.", imagePosition: "right", maskSizeClass: "w-full md:w-[720px] h-[182px]" },
  { imageSrc: "/mask-group-4.png", title: "Technical SEO", text: "A slow or glitchy website pushes people away. We make sure your site loads fast, works smoothly on any device, and is easy for search engines to crawl so nothing holds you back from ranking higher.", imagePosition: "left", maskSizeClass: "w-full md:w-[720px] h-[182px]", imgGradient: true }
];

const seoBenefitsData = {
  title: "Here’s What You Get Out Of This",
  list: [ "Higher rankings that put you ahead of your competition", "More visitors who are actually looking for what you offer", "Website content that search engines love and people enjoy", "Faster site speed so visitors stay longer and take action", "A strong online presence that keeps growing over time", "SEO strategies that keep working and bring lasting results" ],
  images: [
    { id: 1, src: "/mask-group-5.png", alt: "SEO Benefit 1", className: "h-[160px] sm:h-[160px]" }, 
    { id: 2, src: "/mask-group-6.png", alt: "SEO Benefit 2", className: "h-[200px] sm:h-[336px] sm:row-span-2" }, 
    { id: 3, src: "/mask-group-7.png", alt: "SEO Benefit 3", className: "h-[160px] sm:h-[160px]" }, 
    { id: 4, src: "/mask-group-8.png", alt: "SEO Benefit 4", className: "h-[160px] sm:h-[160px]" }, 
    { id: 5, src: "/mask-group-9.png", alt: "SEO Benefit 5", className: "h-[200px] sm:h-[339px] sm:row-span-2" }, 
    { id: 6, src: "/mask-group-10.png", alt: "SEO Benefit 6", className: "h-[160px] sm:h-[160px]" },
  ]
};

const SEOPageContent = () => {
  const heroSectionPadding = "pt-hero-section-pt pl-hero-section-pl pr-4 sm:pr-hero-section-pl pb-hero-section-pt";
  const benefitsSectionPadding = "py-10 lg:py-16 px-4 sm:px-hero-section-pl";
  return (
    <div className="w-full">
      <section className={`bg-brand-light-gray ${heroSectionPadding} flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}>
        <div className="w-full lg:max-w-490 lg:mr-auto">
          <h2 className="font-semibold text-3xl sm:text-32 md:text-40 leading-1 capitalize mb-6 md:mb-8">
            <span className="text-brand-blue">{seoHeroData.titlePart1}</span>
            <span className="text-brand-dark-text">{seoHeroData.titlePart2}</span>
          </h2>
          <p className="font-normal text-lg sm:text-20 leading-1.4 text-brand-dark-text capitalize">
            {seoHeroData.text}
          </p>
        </div>
        <div className="w-full lg:w-auto lg:max-w-890">
          <img 
            src={seoHeroData.imageUrl} 
            alt={seoHeroData.imageAlt} 
            className="w-full h-auto shadow-figma-image"
          />
        </div>
      </section>
      <div className="px-4 sm:px-hero-section-pl md:px-8 lg:px-16">
        {seoContentBlocksData.map((block, index) => (
          <ContentBlock 
            key={index} 
            {...block}
          />
        ))}
      </div>
      <BenefitsSection 
        paddingClasses={benefitsSectionPadding} 
        title={seoBenefitsData.title} 
        benefitsList={seoBenefitsData.list} 
        benefitImages={seoBenefitsData.images}
      />
    </div>
  );
};
export default SEOPageContent;