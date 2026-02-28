import { useState } from 'react';
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Eye, 
  MapPin,
  Search,
  Menu,
  Sunrise,
  Sunset,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewWeatherInterface() {
  const [activeTab, setActiveTab] = useState<'today' | 'week'>('today');

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1746982089027-2c44d04ca9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5ueSUyMHdlYXRoZXIlMjBjbG91ZHN8ZW58MXx8fHwxNzcxNjkxNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Weather background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Clean Header */}
      <div className="relative z-10 px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          <button className="text-white/90 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
          <button className="text-white/90 hover:text-white">
            <Search className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-white/90" />
          <h1 className="text-white text-2xl">San Francisco</h1>
        </div>
        <p className="text-white/70 text-sm">Saturday, Feb 21</p>
      </div>

      {/* Main Weather Card - Cleaner, More Focused */}
      <div className="relative z-10 px-6 flex-1 overflow-y-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-6 border border-white/20 shadow-2xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-7xl text-white mb-2">72°</div>
              <p className="text-white text-xl mb-1">Partly Cloudy</p>
              <p className="text-white/70 text-sm">Feels like 75°</p>
            </div>
            <Sun className="w-24 h-24 text-yellow-200" />
          </div>

          {/* Key Stats in Better Layout */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-xs">Wind</p>
                <p className="text-white">12 mph</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-xs">Humidity</p>
                <p className="text-white">65%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Sunrise className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-xs">Sunrise</p>
                <p className="text-white">6:45 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Sunset className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-xs">Sunset</p>
                <p className="text-white">5:52 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Today/Week */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveTab('today')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              activeTab === 'today'
                ? 'bg-white/20 backdrop-blur-xl border border-white/30 text-white shadow-lg'
                : 'text-white/70'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setActiveTab('week')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              activeTab === 'week'
                ? 'bg-white/20 backdrop-blur-xl border border-white/30 text-white shadow-lg'
                : 'text-white/70'
            }`}
          >
            Next 7 Days
          </button>
        </div>

        {/* Content Based on Tab */}
        {activeTab === 'today' ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 mb-6 border border-white/20">
            <h3 className="text-white mb-4">Hourly Forecast</h3>
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
              {[
                { time: 'Now', temp: 72, icon: Sun },
                { time: '4 PM', temp: 71, icon: Sun },
                { time: '5 PM', temp: 70, icon: Cloud },
                { time: '6 PM', temp: 68, icon: Cloud },
                { time: '7 PM', temp: 66, icon: CloudRain },
                { time: '8 PM', temp: 65, icon: CloudRain },
              ].map((hour, idx) => {
                const IconComponent = hour.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center min-w-[70px] p-4 rounded-2xl ${
                      idx === 0
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/5'
                    }`}
                  >
                    <p className="text-white/80 text-sm mb-3">{hour.time}</p>
                    <IconComponent className="w-8 h-8 text-white mb-3" />
                    <p className="text-white text-lg">{hour.temp}°</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 mb-6 border border-white/20">
            <h3 className="text-white mb-4">7-Day Forecast</h3>
            <div className="space-y-3">
              {[
                { day: 'Monday', icon: Sun, high: 75, low: 62, condition: 'Sunny' },
                { day: 'Tuesday', icon: CloudRain, high: 68, low: 58, condition: 'Rainy' },
                { day: 'Wednesday', icon: Sun, high: 73, low: 60, condition: 'Sunny' },
                { day: 'Thursday', icon: Cloud, high: 70, low: 59, condition: 'Cloudy' },
                { day: 'Friday', icon: CloudRain, high: 67, low: 57, condition: 'Rainy' },
                { day: 'Saturday', icon: Sun, high: 72, low: 61, condition: 'Sunny' },
                { day: 'Sunday', icon: Sun, high: 74, low: 63, condition: 'Sunny' },
              ].map((day, idx) => {
                const IconComponent = day.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <p className="text-white w-24">{day.day}</p>
                      <IconComponent className="w-6 h-6 text-white" />
                      <p className="text-white/80 flex-1">{day.condition}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white">{day.high}°</span>
                      <span className="text-white/60">{day.low}°</span>
                      <ChevronRight className="w-4 h-4 text-white/40" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Additional Details Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 mb-6 border border-white/20">
          <h3 className="text-white mb-4">Details</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-white/70" />
                <span className="text-white/80">Visibility</span>
              </div>
              <span className="text-white">10 mi</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-white/70" />
                <span className="text-white/80">UV Index</span>
              </div>
              <span className="text-white">5 Moderate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
