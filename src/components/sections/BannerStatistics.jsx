import React, { useState, useEffect, useRef } from "react";

const BannerStatistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    placements: 0,
    experience: 0,
    timeSavings: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = {
    projects: 500,
    placements: 1200,
    experience: 15,
    timeSavings: 80,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (key, targetValue, duration) => {
    const steps = 100;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const animate = () => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        // Exponential easing function - slows down dramatically as it approaches target
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.floor(targetValue * easeOutExpo);

        setCounters((prev) => ({
          ...prev,
          [key]: currentValue,
        }));

        currentStep++;
        setTimeout(animate, stepDuration);
      } else {
        // Ensure final value is set
        setCounters((prev) => ({
          ...prev,
          [key]: targetValue,
        }));
      }
    };

    animate();
  };

  const animateCounters = () => {
    // Each counter finishes at a different time with staggered durations (reduced by 35%)
    animateCounter("projects", targetValues.projects, 2275);
    animateCounter("placements", targetValues.placements, 2730);
    animateCounter("experience", targetValues.experience, 2470);
    animateCounter("timeSavings", targetValues.timeSavings, 2600);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-medium tracking-tightest italic text-white flex items-center justify-center gap-3">
                {stat.value} <span className="text-gray-100 text-3xl text-center">{stat.suffix}</span>
              </div>
              <h3 className="text-sm font-thin text-gray-100 uppercase">
                {stat.headline}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerStatistics;

