import { useRef, useMemo } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useCounterAnimation from "../../hooks/useCounterAnimation";

const BannerStatistics = () => {
  const animationRef = useRef(null);
  
  const isVisible = useIntersectionObserver(animationRef, { threshold: 0.2 });

  const targetValues = useMemo(() => ({
    projects: 500,
    placements: 1200,
    experience: 15,
    timeSavings: 80,
  }), []);

  const durations = useMemo(() => ({
    projects: 2275,
    placements: 2730,
    experience: 2470,
    timeSavings: 2600,
  }), []);

  const { counters, sectionRef } = useCounterAnimation(targetValues, {
    threshold: 0.3,
    durations,
  });

  const stats = [
    {
      headline: "Erfolgreiche Projekte",
      value: counters.projects,
      suffix: "+",
    },
    {
      headline: "Zufrieden Vermittelte",
      value: counters.placements,
      suffix: "+",
    },
    {
      headline: "Branchenerfahrung",
      value: counters.experience,
      suffix: "+",
    },
    {
      headline: "Zeitersparnis",
      value: counters.timeSavings,
      suffix: "+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-8 px-4 sm:px-6 lg:px-8 bg-primary-600"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={animationRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'
            
            return (
              <div 
                key={index} 
                className={`
                  text-center
                  transition-all duration-700 ease-out ${delayClass}
                  ${isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                  }
                `}
              >
                <div className="text-5xl md:text-6xl font-medium tracking-tightest italic text-white flex items-center justify-center gap-3">
                  {stat.value} <span className="text-gray-100 text-3xl text-center">{stat.suffix}</span>
                </div>
                <h3 className="text-sm font-thin text-gray-100 uppercase">
                  {stat.headline}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BannerStatistics;

