import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImg from "/images/team.jpg";

interface HeroProps {
  subscriberCount: number;
}

const Hero: React.FC<HeroProps> = ({ subscriberCount }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "We Don’t Follow Trends — We Create Them.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-[55vh] py-8 sm:py-20 sm:min-h-screen">
      {/* Background */}
      <img
        src={teamImg}
        alt="Team"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-60 sm:opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              {displayedText}
            </span>
            <span className="animate-pulse"></span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-2xl text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with{" "}
            <span className="text-blue-300 font-semibold">
              cutting-edge technology
            </span>{" "}
            and{" "}
            <span className="text-purple-300 font-semibold">
              innovative software solutions
            </span>{" "}
            for lasting success.
          </p>

          {/* CTA */}
          <div className="flex flex-col justify-center items-center space-y-4">
            <Link
              to="service"
              onClick={scrollToServices}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 sm:space-x-3"
            >
              <span className="text-xs xs:text-sm sm:text-base">
                Explore Our Services
              </span>
              <ArrowRight className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            {/* Subscriber Count */}
            {subscriberCount > 0 && (
              <p className="text-gray-200 text-sm sm:text-base">
                🎉 {subscriberCount} people have subscribed to our newsletter!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
