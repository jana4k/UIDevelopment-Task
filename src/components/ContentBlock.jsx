const ContentBlock = ({ 
    imageSrc, 
    title, 
    text, 
    imagePosition, 
    maskSizeClass,
    imgGradient = false
  }) => {
    const flexOrder = imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse';
    const imageMargin = imagePosition === 'left' ? 'lg:mr-auto' : 'lg:ml-auto';
  
    return (
      <section className={`py-10 md:py-12 lg:py-16 flex flex-col ${flexOrder} items-center gap-8 md:gap-12 lg:gap-16`}>
        <div className={`${maskSizeClass} ${imageMargin} flex-shrink-0 overflow-hidden
                        ${imgGradient ? 'bg-gradient-to-r from-brand-gray-gradient-start to-brand-gray-gradient-end' : 'bg-brand-medium-gray'}`}>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full lg:max-w-618">
          <h3 className="font-medium text-xl sm:text-24 leading-1.3 text-brand-dark-text capitalize mb-3 sm:mb-4">
            {title}
          </h3>
          <p className="font-normal text-lg sm:text-20 leading-1.3 text-brand-dark-text capitalize"
             style={{ letterSpacing: title === "Off-Page SEO" ? '-0.03em' : 'normal' }}
          >
            {text}
          </p>
        </div>
      </section>
    );
  };
  
  export default ContentBlock;