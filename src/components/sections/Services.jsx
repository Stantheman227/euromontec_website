import { useRef, useMemo } from "react";
import image1 from "../../assets/images/image1.jpg";
import image8 from "../../assets/images/image8.jpg";
import image3 from "../../assets/images/image3.jpg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Services = () => {
  const itemRef1 = useRef(null);
  const itemRef2 = useRef(null);
  const itemRef3 = useRef(null);
  const itemRefs = useMemo(() => [itemRef1, itemRef2, itemRef3], []);

  const visibleItems = useIntersectionObserver(itemRefs, { threshold: 0.2 });

  const services = [
    {
      title: "Arbeitnehmerüberlassung",
      description:
        "Wir vermitteln qualifizierte Fachkräfte schnell und zuverlässig. Unser Netzwerk umfasst erfahrene Handwerker und Spezialisten, die genau zu Ihren Anforderungen passen. Von der ersten Anfrage bis zur erfolgreichen Vermittlung begleiten wir Sie professionell.",
      image: image1,
    },
    {
      title: "Aus kurz wird lang",
      description:
        "Wir bieten Ihnen die Flexibilität, Mitarbeiter zunächst temporär zu beschäftigen und bei Bedarf in ein festes Arbeitsverhältnis zu überführen. So können Sie die Eignung der Kandidaten in der Praxis prüfen, bevor Sie eine langfristige Entscheidung treffen.",
      image: image8,
    },
    {
      title: "Personalvermittlung",
      description:
        "Wir vermitteln qualifizierte Fachkräfte schnell und zuverlässig. Unser Netzwerk umfasst erfahrene Handwerker und Spezialisten, die genau zu Ihren Anforderungen passen. Von der ersten Anfrage bis zur erfolgreichen Vermittlung begleiten wir Sie professionell.",
      image: image3,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 w-full bg-gray-100 overflow-x-hidden"
    >
      <div className="mx-auto">
        <div className="text-left mb-10 md:mb-12 gap-4 md:gap-4 text-center">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4 md:mb-6">
            Unser Angebot
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Maßgeschneiderte <span className="text-primary-600">Lösungen</span> nach Ihren Anforderungen
          </h2>
        </div>
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 1; // Row 2 (index 1) is even position
            const isImageLeft = !isEven; // Row 1 and 3 have image on left
            const isVisible = visibleItems[index] || false;
            const delayClass =
              index === 0
                ? "delay-50"
                : index === 1
                  ? "delay-100"
                  : "delay-150";

            return (
              <div
                key={index}
                ref={itemRefs[index]}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`
                    w-full lg:w-1/2 
                    ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}
                    transition-all duration-700 ease-out ${delayClass}
                    ${
                      isVisible
                        ? "opacity-100 translate-x-0 visible"
                        : `opacity-0 ${isImageLeft ? "-translate-x-8" : "translate-x-8"} invisible`
                    }
                  `}
                  style={{
                    willChange: isVisible ? "auto" : "transform, opacity",
                  }}
                >
                  <div className="w-full max-h-[400px] md:max-h-[500px] rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`
                    w-full lg:w-1/2 flex flex-col justify-center 
                    ${isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}
                    transition-all duration-700 ease-out ${delayClass}
                    ${
                      isVisible
                        ? "opacity-100 translate-x-0 visible"
                        : `opacity-0 ${isImageLeft ? "translate-x-8" : "-translate-x-8"} invisible`
                    }
                  `}
                  style={{
                    willChange: isVisible ? "auto" : "transform, opacity",
                  }}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 overflow-hidden">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
