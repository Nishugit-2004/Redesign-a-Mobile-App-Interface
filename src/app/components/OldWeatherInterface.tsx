import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react';

export function OldWeatherInterface() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-4 h-full overflow-y-auto">
      {/* Cluttered Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-white text-xs">Current Location</p>
          <h1 className="text-white text-lg font-bold">San Francisco, CA</h1>
          <p className="text-white text-[10px]">Last Updated: 2:45 PM</p>
        </div>
        <div className="flex gap-1">
          <button className="bg-white/20 text-white px-2 py-1 text-[10px] rounded">°F</button>
          <button className="bg-white/30 text-white px-2 py-1 text-[10px] rounded">°C</button>
          <button className="bg-white/20 text-white px-2 py-1 text-[10px] rounded">Settings</button>
        </div>
      </div>

      {/* Oversized Current Weather */}
      <div className="bg-white/10 backdrop-blur-sm rounded p-4 mb-3 border border-white/30">
        <div className="flex items-center justify-center mb-2">
          <Sun className="w-20 h-20 text-yellow-300" />
        </div>
        <div className="text-center">
          <p className="text-white text-6xl font-bold mb-1">72°</p>
          <p className="text-white text-sm mb-1">Partly Cloudy</p>
          <p className="text-white/80 text-xs">Feels like 75°</p>
        </div>
      </div>

      {/* Poorly Organized Stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-white/10 p-2 rounded border border-white/20">
          <Droplets className="w-4 h-4 text-white mb-1" />
          <p className="text-white text-[10px]">Humidity</p>
          <p className="text-white text-sm font-bold">65%</p>
        </div>
        <div className="bg-white/10 p-2 rounded border border-white/20">
          <Wind className="w-4 h-4 text-white mb-1" />
          <p className="text-white text-[10px]">Wind</p>
          <p className="text-white text-sm font-bold">12 mph</p>
        </div>
        <div className="bg-white/10 p-2 rounded border border-white/20">
          <Gauge className="w-4 h-4 text-white mb-1" />
          <p className="text-white text-[10px]">Pressure</p>
          <p className="text-white text-sm font-bold">1013</p>
        </div>
        <div className="bg-white/10 p-2 rounded border border-white/20">
          <Eye className="w-4 h-4 text-white mb-1" />
          <p className="text-white text-[10px]">Visibility</p>
          <p className="text-white text-sm font-bold">10 mi</p>
        </div>
        <div className="bg-white/10 p-2 rounded border border-white/20">
          <Sun className="w-4 h-4 text-white mb-1" />
          <p className="text-white text-[10px]">UV Index</p>
          <p className="text-white text-sm font-bold">5</p>
        </div>
        <div className="bg-white/10 p-2 rounded border border-white/20">
          <Cloud className="w-4 h-4 text-white mb-1" />
          <p className="text-white text-[10px]">Clouds</p>
          <p className="text-white text-sm font-bold">40%</p>
        </div>
      </div>

      {/* Confusing Hourly Forecast */}
      <div className="bg-white/10 backdrop-blur-sm rounded p-3 mb-3 border border-white/30">
        <h3 className="text-white text-xs font-bold mb-2">HOURLY FORECAST</h3>
        <div className="flex gap-2 overflow-x-auto">
          {['3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'].map((time, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[50px] bg-white/5 p-2 rounded">
              <p className="text-white text-[10px] mb-1">{time}</p>
              <Sun className="w-5 h-5 text-yellow-300 mb-1" />
              <p className="text-white text-xs font-bold">{72 - idx}°</p>
            </div>
          ))}
        </div>
      </div>

      {/* Poorly Formatted 7-Day Forecast */}
      <div className="bg-white/10 backdrop-blur-sm rounded p-3 border border-white/30">
        <h3 className="text-white text-xs font-bold mb-2">7-DAY FORECAST</h3>
        <div className="space-y-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white/5 p-2 rounded text-[10px]">
              <span className="text-white w-8">{day}</span>
              {idx % 2 === 0 ? (
                <Sun className="w-4 h-4 text-yellow-300" />
              ) : (
                <CloudRain className="w-4 h-4 text-blue-200" />
              )}
              <span className="text-white/80 flex-1 mx-2 text-[9px]">
                {idx % 2 === 0 ? 'Sunny' : 'Rainy'}
              </span>
              <span className="text-white font-bold">{75 - idx}°</span>
              <span className="text-white/70 ml-1">{62 - idx}°</span>
            </div>
          ))}
        </div>
      </div>

      {/* Extra cluttered footer */}
      <div className="mt-3 text-center">
        <p className="text-white/60 text-[9px]">Powered by WeatherAPI v2.1 | Terms | Privacy</p>
      </div>
    </div>
  );
}
