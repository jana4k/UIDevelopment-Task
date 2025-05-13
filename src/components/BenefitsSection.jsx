const BenefitsSection = ({ paddingClasses, title, benefitsList, benefitImages }) => {
    const currentBenefitImages = benefitImages || [];
    const currentBenefitsList = benefitsList || [];
  
    return (
      <section className={`bg-brand-light-gray ${paddingClasses} flex flex-col lg:flex-row items-start gap-10 lg:gap-12 xl:gap-16`}>
        <div className="w-full lg:max-w-674 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {currentBenefitImages.map((img) => (
            <div 
              key={img.id} 
              className={`bg-brand-medium-gray overflow-hidden rounded ${img.className}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
  
        <div className="w-full lg:max-w-511 lg:ml-auto">
          <h3 className="font-medium text-2xl sm:text-32 leading-1 text-brand-dark-text capitalize mb-6 md:mb-8">
            {title || "Here’s What You Get Out Of This"}
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {currentBenefitsList.map((benefit, index) => (
              <li key={index} className="font-normal text-lg sm:text-20 leading-1.5 text-brand-dark-text capitalize flex items-start">
                <span className="text-brand-black mr-2 sm:mr-3 mt-1 text-xl sm:text-2xl leading-none flex-shrink-0">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default BenefitsSection;