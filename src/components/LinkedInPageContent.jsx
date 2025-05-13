import ContentBlock from './ContentBlock';
import BenefitsSection from './BenefitsSection';
const linkedInHeroImageUrl = '/linkedin.png';

const linkedInHeroData = {
  titlePart1: "LinkedIn Marketing",
  titlePart2: "To Build Authority And Brings Growth Opportunities",
  text: "LinkedIn Is Not For Mindless Scrolling. It Is Where Serious Professionals Connect, Learn, And Grow. A Strong LinkedIn Presence Makes Your Brand Look Legit, Builds Trust, And Attracts The Right People. We Create Posts, Ads, And Strategies That Boost Engagement, Grow Your Network, And Bring Real Business Opportunities Straight To You.",
  imageUrl: linkedInHeroImageUrl,
  imageAlt: "LinkedIn Marketing Concepts",
};

const linkedInContentBlocksData = [
  { imageSrc: "/mask-group-1.png", title: "Getting Your LinkedIn Profile Ready", text: "A Strong LinkedIn Profile Builds Trust. We Set Up Or Optimize Your Profile So It Looks Professional, Attracts The Right People, And Makes A Great First Impression.", imagePosition: "left", maskSizeClass: "w-full md:w-[550px] lg:w-[650px] h-[150px] md:h-[180px]" },
  { imageSrc: "/mask-group-2.png", title: "Posting Content That Grabs Attention", text: "Boring Content Won’t Work Here. We Create Posts, Articles, And Updates That Spark Conversations, Showcase Your Expertise, And Make Your Brand Stand Out In The Right Way.", imagePosition: "right", maskSizeClass: "w-full md:w-[550px] lg:w-[650px] h-[180px] md:h-[220px]" },
  { imageSrc: "/mask-group-3.png", title: "Growing Your Network With The Right People", text: "More Connections Equals More Opportunities! We Help You Reach An Ideal Audience And Serious Professionals So You Build Connections That Actually Matter For Your Business.", imagePosition: "left", maskSizeClass: "w-full md:w-[550px] lg:w-[650px] h-[160px] md:h-[200px]" },
  { imageSrc: "/mask-group-4.png", title: "Running LinkedIn Ads That Bring Real Leads", text: "LinkedIn Ads Can Be Powerful, But Only If Done Right. We Set Up Targeted Campaigns That Reach Serious Professionals Who Are Actually Interested, Making Sure You Get Real Engagement And Quality Leads.", imagePosition: "right", maskSizeClass: "w-full md:w-[550px] lg:w-[650px] h-[150px] md:h-[180px]" },
  { imageSrc: "/mask-group-5.png", title: "Tracking And Improving For Better Results", text: "We Keep An Eye On What’s Working, Adjust What’s Not, And Keep Improving So Your LinkedIn Presence Keeps Growing And Bringing In Valuable Business Opportunities.", imagePosition: "left", maskSizeClass: "w-full md:w-[550px] lg:w-[650px] h-[170px] md:h-[210px]" }
];

const linkedInBenefitsData = {
  title: "Here’s What You Get Out Of This",
  list: [ "A Profile That Makes You Look Like An Industry Leader, Not Just Another User", "Posts That Start Real Conversations & Keep Your Audience Engaged", "A Network Filled With Serious Professionals And Real Opportunities", "Ads That Bring High-Value Clients, Not Just Random Clicks", "A Brand Presence That Builds Trust And Credibility", "A Strategy That Keeps Your LinkedIn Growing & Bringing Results Every Single Day" ],
  images: [
    { id: 1, src: "/mask-group-6.png", alt: "LI Benefit 1", className: "h-[150px] sm:h-[180px]" }, 
    { id: 2, src: "/mask-group-7.png", alt: "LI Benefit 2", className: "h-[150px] sm:h-[180px]" }, 
    { id: 3, src: "/mask-group-8.png", alt: "LI Benefit 3", className: "h-[150px] sm:h-[180px]" }, 
    { id: 4, src: "/mask-group-9.png", alt: "LI Benefit 4", className: "h-[150px] sm:h-[180px]" }, 
    { id: 5, src: "/mask-group-10.png", alt: "LI Benefit 5", className: "h-[150px] sm:h-[180px]" }, 
    { id: 6, src: "/mask-group.png", alt: "LI Benefit 6", className: "h-[150px] sm:h-[180px]" },
  ]
};

const LinkedInPageContent = () => {
  const heroSectionPadding = "pt-hero-section-pt pl-hero-section-pl pr-4 sm:pr-hero-section-pl pb-hero-section-pt";
  const benefitsSectionPadding = "py-10 lg:py-16 px-4 sm:px-hero-section-pl";
  return (
    <div className="w-full">
      <section className={`bg-brand-light-gray ${heroSectionPadding} flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}>
        <div className="w-full lg:w-1/2 lg:order-2">
          <img 
            src={linkedInHeroData.imageUrl}
            alt={linkedInHeroData.imageAlt} 
            className="w-full h-auto" 
          />
        </div>
        <div className="w-full lg:w-1/2 lg:order-1 lg:pr-8">
          <h2 className="font-semibold text-3xl sm:text-32 md:text-40 leading-1 capitalize mb-6 md:mb-8">
            <span className="text-brand-blue">{linkedInHeroData.titlePart1}</span>
            <br /> 
            <span className="text-brand-dark-text">{linkedInHeroData.titlePart2}</span>
          </h2>
          <p className="font-normal text-lg sm:text-20 leading-1.4 text-brand-dark-text capitalize">
            {linkedInHeroData.text}
          </p>
        </div>
      </section>
      <div className="px-4 sm:px-hero-section-pl md:px-8 lg:px-16">
        {linkedInContentBlocksData.map((block, index) => (
          <ContentBlock
            key={index}
            {...block}
          />
        ))}
      </div>
      <BenefitsSection 
        paddingClasses={benefitsSectionPadding}
        title={linkedInBenefitsData.title}
        benefitsList={linkedInBenefitsData.list}
        benefitImages={linkedInBenefitsData.images}
      />
    </div>
  );
};
export default LinkedInPageContent;