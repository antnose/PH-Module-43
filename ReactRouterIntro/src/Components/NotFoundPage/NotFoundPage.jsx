import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Home, ArrowLeft, Search, Ghost, Sparkles } from "lucide-react";

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState([]);

  // Floating particles effect
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 2,
    }));
    setFloatingElements(elements);
  }, []);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${
            mousePosition.y * 0.3
          }px)`,
        }}
      >
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-pulse-slow">
              404
            </div>

            {/* Floating Ghost */}
            <div className="absolute -top-4 -right-4 animate-bounce-slow">
              <Ghost className="w-16 h-16 text-purple-300 opacity-80" />
            </div>

            {/* Sparkles */}
            <div className="absolute top-8 left-8 animate-spin-slow">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Oops! Page Lost in Space
          </h1>

          <p
            className="text-xl text-purple-200 mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            The page you're looking for has drifted into the cosmic void. Don't
            worry, even the best astronauts get lost sometimes!
          </p>

          {/* Animated Search Icon */}
          <div
            className="flex justify-center mb-8 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              <Search className="w-12 h-12 text-purple-300" />
              <div className="absolute inset-0 border-2 border-purple-300 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </div>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Fun Facts */}
          <div
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-purple-200 text-sm mb-2">✨ Cosmic Fact:</p>
            <p className="text-white text-lg font-medium">
              "In space, no one can hear you click... but you can always
              navigate back to safety!"
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float infinite linear;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
