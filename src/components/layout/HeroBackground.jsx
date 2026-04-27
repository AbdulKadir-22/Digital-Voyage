import PortalCircle from './PortalCircle';

const HeroBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#0f1117] z-[-1]" aria-hidden="true">
      {/* Base Background with Image - Fixed Attachment */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-[1.02] blur-[1px] saturate-[0.7] brightness-[0.80]"
        style={{ 
          backgroundImage: 'linear-gradient(180deg, rgba(15, 18, 24, 0.4), rgba(15, 18, 24, 0.6)), url("/bg-image.png")' 
        }}
      />


      
      {/* Portal Effect */}
      <PortalCircle />
      
      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_84%,rgba(244,183,128,0.15),transparent_25%),radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.05),transparent_25%)]" />
      
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(10,12,18,0.8)_100%)]" />

      {/* Bottom Fade-out for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0f1117] to-transparent" />
    </div>
  );
};


export default HeroBackground;
