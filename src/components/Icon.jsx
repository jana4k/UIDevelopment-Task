const Icon = ({ name, size = "h-7 w-7", iconColor = "text-white", specificBg }) => {
    const baseStyle = `${size} ${iconColor} flex items-center justify-center font-semibold text-sm`;
  
    if (name === "Ai") return <div className={`${baseStyle} border border-white rounded-sm px-1`}>Ai</div>;
    if (name === "Web") return <div className={`${baseStyle}`}>🌐</div>;
    if (name === "App") return (
      <div className={`${baseStyle} grid grid-cols-2 gap-0.5`}>
        <span className="block w-2.5 h-2.5 bg-white rounded-xs"></span>
        <span className="block w-2.5 h-2.5 bg-white rounded-xs"></span>
        <span className="block w-2.5 h-2.5 bg-white rounded-xs"></span>
        <span className="block w-2.5 h-2.5 bg-white rounded-xs"></span>
      </div>
    );
    if (name === "Website") return <div className={`${baseStyle}`}>🖥️</div>;
    if (name === "Ps") return <div className={`${baseStyle} border border-white rounded-sm px-1`}>Ps</div>;
    if (name === "Ad") return (
      <div className={`${baseStyle} relative border border-white rounded-sm p-0.5 ${specificBg || 'bg-yellow-400'}`}>
        <span className="text-xs text-black">AD$</span>
      </div>
    );
    return <div className={`${baseStyle} bg-gray-400 rounded-sm`}>?</div>;
  };
  
  export default Icon;