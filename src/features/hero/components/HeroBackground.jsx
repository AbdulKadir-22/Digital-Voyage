const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base Background with Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-[1.04] blur-[2px] saturate-[0.82] brightness-[0.66]"
        style={{ 
          backgroundImage: 'linear-gradient(180deg, rgba(15, 18, 24, 0.18), rgba(15, 18, 24, 0.34)), url("/bg-image.png")' 
        }}
      />
      
      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_84%,rgba(244,183,128,0.28),transparent_16%),radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.08),transparent_20%)]" />
      
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#14161d73] to-[#14161d1f] backdrop-blur-[3px]" />
    </div>
  );
};

export default HeroBackground;
