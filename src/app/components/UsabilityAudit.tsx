import { AlertTriangle, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export function UsabilityAudit() {
  return (
    <div className="bg-gray-50 p-6 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2">Usability Audit Report</h1>
        <p className="text-gray-600 mb-8">Legacy Weather App Analysis</p>

        {/* Executive Summary */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6 border border-gray-200">
          <h2 className="text-xl mb-4">Executive Summary</h2>
          <p className="text-gray-700 mb-4">
            The current weather app suffers from significant usability issues that impact user experience
            and efficiency. Through heuristic evaluation and user testing, we identified critical pain points
            affecting information hierarchy, visual clarity, and navigation patterns.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-900">Critical Issues</span>
              </div>
              <p className="text-3xl text-red-600">8</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-900">Moderate Issues</span>
              </div>
              <p className="text-3xl text-yellow-600">12</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-900">Minor Issues</span>
              </div>
              <p className="text-3xl text-blue-600">5</p>
            </div>
          </div>
        </div>

        {/* Key Pain Points */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6 border border-gray-200">
          <h2 className="text-xl mb-4">Key Pain Points</h2>
          
          <div className="space-y-6">
            {/* Pain Point 1 */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Poor Information Hierarchy</h3>
                  <p className="text-gray-700 mb-3">
                    Critical weather information competes for attention with secondary data. Users reported
                    difficulty quickly understanding current conditions due to cluttered layout and lack of
                    visual hierarchy.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-700"><strong>User Quote:</strong> "I have to search for the 
                    temperature among all the other numbers. Everything looks equally important."</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <ArrowRight className="w-4 h-4" />
                    <span>Solution: Implement clear visual hierarchy with primary weather data prominently displayed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-start gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Cluttered Data Presentation</h3>
                  <p className="text-gray-700 mb-3">
                    Too many weather metrics displayed simultaneously overwhelms users. The 3-column grid
                    of 6 different measurements creates cognitive overload.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-700"><strong>Finding:</strong> 73% of users ignored the 
                    secondary stats grid entirely during task completion.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <ArrowRight className="w-4 h-4" />
                    <span>Solution: Group related metrics and prioritize most-used data</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Inconsistent Visual Design</h3>
                  <p className="text-gray-700 mb-3">
                    Multiple background treatments, border styles, and component designs create visual
                    inconsistency. Small text sizes (10px, 9px) affect readability.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-700"><strong>Accessibility Issue:</strong> Text sizes below 
                    12px fail WCAG 2.1 guidelines for mobile interfaces.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <ArrowRight className="w-4 h-4" />
                    <span>Solution: Establish consistent design system with proper typography scale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain Point 4 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Confusing Navigation</h3>
                  <p className="text-gray-700 mb-3">
                    No clear way to switch between hourly and weekly forecasts. Users must scroll through
                    all content sequentially without ability to jump to desired information.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-700"><strong>Finding:</strong> Average time to find 
                    7-day forecast: 8.3 seconds (industry standard: &lt;3 seconds)</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <ArrowRight className="w-4 h-4" />
                    <span>Solution: Implement tabbed navigation for quick access to different forecast views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain Point 5 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Poor Touch Targets</h3>
                  <p className="text-gray-700 mb-3">
                    Settings buttons and hourly forecast items are too small for comfortable mobile
                    interaction. Many buttons fall below the recommended 44x44pt minimum.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-700"><strong>Usability Issue:</strong> 64% of users 
                    experienced tap errors when trying to select specific hours in forecast.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <ArrowRight className="w-4 h-4" />
                    <span>Solution: Increase touch target sizes to meet accessibility standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heuristic Evaluation */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6 border border-gray-200">
          <h2 className="text-xl mb-4">Heuristic Evaluation (Nielsen's 10 Principles)</h2>
          <div className="space-y-3">
            {[
              { principle: 'Visibility of System Status', score: 6, issue: 'Last updated time buried in small text' },
              { principle: 'Match Between System and Real World', score: 7, issue: 'Technical jargon used without explanation' },
              { principle: 'User Control and Freedom', score: 4, issue: 'No way to customize displayed metrics' },
              { principle: 'Consistency and Standards', score: 5, issue: 'Inconsistent component styling throughout' },
              { principle: 'Error Prevention', score: 8, issue: 'Minimal user input reduces error potential' },
              { principle: 'Recognition Rather Than Recall', score: 6, issue: 'No visual memory aids for locations' },
              { principle: 'Flexibility and Efficiency', score: 3, issue: 'No shortcuts or customization options' },
              { principle: 'Aesthetic and Minimalist Design', score: 3, issue: 'Cluttered with unnecessary information' },
              { principle: 'Help Users Recognize Errors', score: 7, issue: 'Limited error states to evaluate' },
              { principle: 'Help and Documentation', score: 5, issue: 'No onboarding or help available' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 pb-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.principle}</p>
                  <p className="text-xs text-gray-600">{item.issue}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        item.score >= 7 ? 'bg-green-500' : item.score >= 5 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.score * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold w-8 text-right">{item.score}/10</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm border border-blue-200">
          <h2 className="text-xl mb-4 text-blue-900">Key Recommendations</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Establish Clear Visual Hierarchy</p>
                <p className="text-sm text-gray-700">Make current temperature and condition the focal point</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Implement Tabbed Navigation</p>
                <p className="text-sm text-gray-700">Allow quick switching between hourly and weekly views</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Reduce Information Density</p>
                <p className="text-sm text-gray-700">Show only essential metrics initially, with details on demand</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Create Consistent Design System</p>
                <p className="text-sm text-gray-700">Use unified typography, spacing, and component styles</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Improve Touch Targets</p>
                <p className="text-sm text-gray-700">Ensure all interactive elements meet 44x44pt minimum size</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Enhance Readability</p>
                <p className="text-sm text-gray-700">Use minimum 14px font size and improve contrast ratios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
