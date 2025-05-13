import ContentBlock from './ContentBlock';
import BenefitsSection from './BenefitsSection';
const smmHeroImageUrl = '/facebook.png';

const smmHeroData = {
  titlePart0: "Smart ",
  titlePart1: "Facebook Marketing ",
  titlePart2: "For More Reach And More Revenue",
  text: "Facebook Has Been Around Forever! It Is Still Where Conversations Happen, Connections Grow, And Brands Get Noticed. Scrolling Past Boring Content? Not Anymore. We Create Posts, Ads, And Stories That Grab Attention, Spark Real Engagement, And Bring In Customers Who Actually Care About What You Offer.",
  imageUrl: smmHeroImageUrl,
  imageAlt: "Facebook Marketing Concepts",
};

const smmContentBlocksData = [
  { 
    imageSrc: "/image 10508.png",
    title: "Giving Your Facebook Page A Complete Makeover", 
    text: "Starting Fresh? We’ll Build Your Page From Scratch. Already Have One? We’ll Optimize Everything From Bios To Banners To Make Sure Your Brand Looks Professional And Trustworthy.", 
    imagePosition: "left", 
    maskSizeClass: "w-full md:w-[600px] lg:w-[720px] h-[200px] md:h-[250px]" 
  },
  { 
    imageSrc: "/image 10509.png", 
    title: "Getting To Know Your Business First", 
    text: "We Sit With You And Take Time To Understand Your Business, Goals, And Audience. The Right Plan Starts With Knowing Who You Want To Reach And How To Connect With Them.", 
    imagePosition: "right", 
    maskSizeClass: "w-full md:w-[600px] lg:w-[720px] h-[200px] md:h-[250px]" 
  },
  { 
    imageSrc: "/image 10510.png", 
    title: "Creating Posts That People Love To Engage With", 
    text: "People Scroll Fast, So Your Content Needs To Stop Them. Videos, Polls, Stories, And Ads – Everything We Create Is Designed To Grab Attention, Spark Conversations, And Keep People Coming Back.", 
    imagePosition: "left", 
    maskSizeClass: "w-full md:w-[600px] lg:w-[720px] h-[200px] md:h-[250px]" 
  },
  { 
    imageSrc: "/image 10511.png", 
    title: "Running Ads That Bring In Real Customers", 
    text: "Getting Views Isn’t Enough. We Set Up Smart Ads That Reach The Right People—The Ones Who Are Actually Interested And Ready To Take Action.", 
    imagePosition: "right", 
    maskSizeClass: "w-full md:w-[600px] lg:w-[720px] h-[200px] md:h-[250px]" 
  },
  { 
    imageSrc: "/image 10512.png", 
    title: "Tracking And Improving Every Single Day", 
    text: "Facebook Marketing Isn’t A One-Time Thing. We Keep An Eye On What’s Working, Adjust What’s Not, And Keep Improving So Your Facebook Page Keeps Growing.", 
    imagePosition: "left", 
    maskSizeClass: "w-full md:w-[600px] lg:w-[720px] h-[200px] md:h-[250px]" 
  }
];

const smmBenefitsData = {
  title: "Here’s What You Get Out Of This",
  list: [ 
    "More Likes, Shares, And Comments From Real People", 
    "A Page That Looks Professional And Builds Trust Instantly", 
    "Ads That Bring Real Buyers, Not Just Empty Clicks", 
    "Content That Stops The Scroll And Gets People Talking", 
    "A Community That Grows And Stays Engaged Every Day", 
    "A Strategy That Keeps Bringing Better Results Over Time" 
  ],
  images: [ 
    { id: 1, src: "/mask-group-5.png", alt: "SMM Benefit 1", className: "h-[160px] sm:h-[160px]" }, 
    { id: 2, src: "/mask-group-6.png", alt: "SMM Benefit 2", className: "h-[200px] sm:h-[336px] sm:row-span-2" }, 
    { id: 3, src: "/mask-group-7.png", alt: "SMM Benefit 3", className: "h-[160px] sm:h-[160px]" }, 
    { id: 4, src: "/mask-group-8.png", alt: "SMM Benefit 4", className: "h-[160px] sm:h-[160px]" }, 
    { id: 5, src: "/mask-group-9.png", alt: "SMM Benefit 5", className: "h-[200px] sm:h-[339px] sm:row-span-2" }, 
    { id: 6, src: "/mask-group-10.png", alt: "SMM Benefit 6", className: "h-[160px] sm:h-[160px]" },
  ]
};

const SMMPageContent = () => {
  const heroSectionPadding = "pt-hero-section-pt pl-hero-section-pl pr-4 sm:pr-hero-section-pl pb-hero-section-pt";
  const benefitsSectionPadding = "py-10 lg:py-16 px-4 sm:px-hero-section-pl";
  return (
    <div className="w-full">
      <section className={`bg-brand-light-gray ${heroSectionPadding} flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}>
        <div className="w-full lg:max-w-490 lg:mr-auto">
          <h2 className="font-semibold text-3xl sm:text-32 md:text-40 leading-1 capitalize mb-6 md:mb-8">
            <span className="text-brand-dark-text">{smmHeroData.titlePart0}</span>
            <span className="text-brand-blue">{smmHeroData.titlePart1}</span>
            <br />
            <span className="text-brand-dark-text">{smmHeroData.titlePart2}</span>
          </h2>
          <p className="font-normal text-lg sm:text-20 leading-1.4 text-brand-dark-text capitalize">
            {smmHeroData.text}
          </p>
        </div>
        <div className="w-full lg:w-auto lg:max-w-[700px] xl:max-w-890">
          <img 
            src={smmHeroData.imageUrl}
            alt={smmHeroData.imageAlt} 
            className="w-full h-auto shadow-figma-image" 
          />
        </div>
      </section>
      <div className="px-4 sm:px-hero-section-pl md:px-8 lg:px-16">
        {smmContentBlocksData.map((block, index) => (
          <ContentBlock
            key={index}
            {...block}
          />
        ))}
      </div>
      <BenefitsSection 
        paddingClasses={benefitsSectionPadding}
        title={smmBenefitsData.title}
        benefitsList={smmBenefitsData.list}
        benefitImages={smmBenefitsData.images}
      />
    </div>
  );
};
export default SMMPageContent;