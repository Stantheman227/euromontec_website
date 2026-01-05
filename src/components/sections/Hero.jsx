import React from "react";
import heroVideo from "../../assets/Euromontec_video_1.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ">
        {/* Company Name */}
        <div className="relative mb-16">
          <p className="text-6xl sm:text-7xl md:text-8xl text-white tracking-tight italic">
            <span className="font-bold text-primary-600">euro</span>montec
          </p>
          <p className="absolute top-[55%] right-[-10%] mt-2 font-mailman text-white text-[3rem] sm:text-[3.5rem] md:text-[4.5rem]">
            Personalmanagement
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => {
              const subject = encodeURIComponent(
                "Terminanfrage / Rückruf"
              );
              const body = encodeURIComponent(`Sehr geehrte Damen und Herren,

ich möchte gerne einen Termin für ein Telefonat vereinbaren, bitte rufen sie mich unter der angegebenen Telefonnummern zurück.

Name: [Ihr Name]
Firma: [Ihr Firmenname]
Telefonnummer: [Ihre Telefonnummer]

Bevorzugte Kontaktzeiten:
- [z.B. Montag-Freitag, 9-17 Uhr]

Ich freue mich auf Ihre Rückmeldung.

`);
              window.location.href = `mailto:info@euromontec.de?subject=${subject}&body=${body}`;
            }}
            className="bg-white text-gray-900 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto min-w-[250px] opacity-60 hover:opacity-100"
          >
            Für Jobsuchende
          </button>
          <button onClick={() => {
              const benefitsSection = document.getElementById("services");
              if (benefitsSection) {
                benefitsSection.scrollIntoView({ behavior: "smooth" });
              }
            }} className="bg-primary-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto min-w-[250px] opacity-60 hover:opacity-100 ">
            Für Unternehmen
          </button>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {
              const benefitsSection = document.getElementById("benefits");
              if (benefitsSection) {
                benefitsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white hover:text-primary-600 cursor-pointer"
            aria-label="Scroll to next section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
