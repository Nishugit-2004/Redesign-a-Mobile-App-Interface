export function WireframeView() {
  return (
    <div className="bg-white p-6 h-full overflow-y-auto">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl mb-6">Low-Fidelity Wireframes</h2>
        
        {/* Wireframe 1 - Main Screen */}
        <div className="mb-8 border-2 border-gray-800 rounded-lg p-1 aspect-[9/16] bg-gray-50">
          <div className="border border-gray-400 rounded h-full p-4 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="w-6 h-6 border-2 border-gray-800"></div>
              <div className="w-6 h-6 border-2 border-gray-800 rounded-full"></div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <div className="h-4 w-32 bg-gray-800 mb-2"></div>
              <div className="h-3 w-24 bg-gray-400"></div>
            </div>

            {/* Main Weather Card */}
            <div className="border-2 border-gray-800 rounded-2xl p-6 mb-4 flex-shrink-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="h-12 w-24 bg-gray-800 mb-2"></div>
                  <div className="h-4 w-20 bg-gray-400 mb-1"></div>
                  <div className="h-3 w-16 bg-gray-300"></div>
                </div>
                <div className="w-20 h-20 border-2 border-gray-800 rounded-full"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t-2 border-gray-400">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-2">
                    <div className="w-8 h-8 border-2 border-gray-800 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-2 w-12 bg-gray-400 mb-1"></div>
                      <div className="h-3 w-16 bg-gray-800"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <div className="flex-1 h-10 bg-gray-800 rounded-xl"></div>
              <div className="flex-1 h-10 border-2 border-gray-400 rounded-xl"></div>
            </div>

            {/* Hourly Forecast */}
            <div className="border-2 border-gray-800 rounded-2xl p-4 flex-1">
              <div className="h-4 w-32 bg-gray-800 mb-3"></div>
              <div className="flex gap-2 overflow-x-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="min-w-[60px] border-2 border-gray-400 rounded-xl p-3">
                    <div className="h-2 w-8 bg-gray-400 mx-auto mb-2"></div>
                    <div className="w-8 h-8 border-2 border-gray-800 rounded-full mx-auto mb-2"></div>
                    <div className="h-3 w-8 bg-gray-800 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-8 text-center">
          Main screen wireframe showing simplified layout hierarchy
        </p>

        {/* Wireframe 2 - Weekly View */}
        <div className="mb-8 border-2 border-gray-800 rounded-lg p-1 aspect-[9/16] bg-gray-50">
          <div className="border border-gray-400 rounded h-full p-4 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="w-6 h-6 border-2 border-gray-800"></div>
              <div className="w-6 h-6 border-2 border-gray-800 rounded-full"></div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <div className="h-4 w-32 bg-gray-800 mb-2"></div>
              <div className="h-3 w-24 bg-gray-400"></div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <div className="flex-1 h-10 border-2 border-gray-400 rounded-xl"></div>
              <div className="flex-1 h-10 bg-gray-800 rounded-xl"></div>
            </div>

            {/* Weekly Forecast */}
            <div className="border-2 border-gray-800 rounded-2xl p-4 flex-1">
              <div className="h-4 w-32 bg-gray-800 mb-3"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="flex items-center gap-3 border-2 border-gray-400 rounded-xl p-3">
                    <div className="h-3 w-16 bg-gray-800"></div>
                    <div className="w-6 h-6 border-2 border-gray-800 rounded-full"></div>
                    <div className="h-3 flex-1 bg-gray-400"></div>
                    <div className="flex gap-2">
                      <div className="h-3 w-8 bg-gray-800"></div>
                      <div className="h-3 w-8 bg-gray-400"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm text-center">
          Weekly forecast view wireframe
        </p>
      </div>
    </div>
  );
}
