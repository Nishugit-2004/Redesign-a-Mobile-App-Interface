import { useState } from "react";
import { OldWeatherInterface } from "./components/OldWeatherInterface";
import { NewWeatherInterface } from "./components/NewWeatherInterface";
import { WireframeView } from "./components/WireframeView";
import { UsabilityAudit } from "./components/UsabilityAudit";
import { ChevronLeft, ChevronRight } from "lucide-react";

type View = "audit" | "wireframe" | "old" | "new";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("audit");

  const views: {
    id: View;
    label: string;
    description: string;
  }[] = [
    {
      id: "audit",
      label: "Usability Audit",
      description: "Pain points & analysis",
    },
    {
      id: "wireframe",
      label: "Wireframes",
      description: "Low-fidelity designs",
    },
    {
      id: "old",
      label: "Before",
      description: "Legacy interface",
    },
    {
      id: "new",
      label: "After",
      description: "Redesigned interface",
    },
  ];

  const currentIndex = views.findIndex(
    (v) => v.id === currentView,
  );

  const goToPrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : views.length - 1;
    setCurrentView(views[newIndex].id);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex < views.length - 1 ? currentIndex + 1 : 0;
    setCurrentView(views[newIndex].id);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl mb-1">
            Mobile App Redesign Project
          </h1>
          <p className="text-gray-600 text-sm">
            Weather App UX Improvement - From Audit to
            Implementation
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-1 -mb-px">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setCurrentView(view.id)}
                  className={`px-6 py-3 border-b-2 transition-colors ${
                    currentView === view.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-medium">
                      {view.label}
                    </span>
                    <span className="text-xs opacity-75">
                      {view.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {currentView === "audit" && <UsabilityAudit />}
        {currentView === "wireframe" && <WireframeView />}
        {currentView === "old" && (
          <div className="h-full flex items-center justify-center p-8 bg-gray-100">
            <div className="relative">
              {/* Mobile Frame */}
              <div className="w-[375px] h-[667px] bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Content */}
                  <div className="w-full h-full overflow-hidden">
                    <OldWeatherInterface />
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200">
                  Legacy Design (Before)
                </div>
              </div>
            </div>
          </div>
        )}
        {currentView === "new" && (
          <div className="h-full flex items-center justify-center p-8 bg-gray-100">
            <div className="relative">
              {/* Mobile Frame */}
              <div className="w-[375px] h-[667px] bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10"></div>
                  {/* Content */}
                  <div className="w-full h-full overflow-hidden">
                    <NewWeatherInterface />
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                  Redesigned Interface (After)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          aria-label="Previous view"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          aria-label="Next view"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Footer Info */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600">
          <div>
            View {currentIndex + 1} of {views.length}:{" "}
            <span className="font-medium">
              {views[currentIndex].label}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              Use arrow buttons or tabs to navigate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}