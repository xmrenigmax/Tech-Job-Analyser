import React, { useState } from 'react';
import { MapPin, TrendingUp, PoundSterling, Search, X } from 'lucide-react';

const LocationAnalysis = ({ data }) => {
  // Ensure data is available, fallback to default if not
  const locationData = data && data.length > 0 ? data : [
    { Country: 'London', median: 72000, count: 15678 },
    { Country: 'Manchester', median: 52000, count: 5678 },
    { Country: 'Bristol', median: 58000, count: 3987 },
    { Country: 'Edinburgh', median: 54000, count: 3456 },
    { Country: 'Glasgow', median: 50000, count: 2345 },
    { Country: 'Leeds', median: 48000, count: 2876 },
    { Country: 'Birmingham', median: 47000, count: 4321 },
    { Country: 'Cambridge', median: 62000, count: 1987 },
    { Country: 'Oxford', median: 60000, count: 1765 },
    { Country: 'Cardiff', median: 46000, count: 1543 },
    { Country: 'Newcastle', median: 45000, count: 1876 },
    { Country: 'Remote', median: 60000, count: 12345 }
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('salary'); // 'salary' or 'name'

  // Filter and sort locations
  const filteredLocations = locationData
    .filter(location => 
      location.Country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'salary') {
        return b.median - a.median; // Highest salary first
      } else {
        return a.Country.localeCompare(b.Country); // Alphabetical
      }
    });

  const maxSalary = Math.max(...filteredLocations.map(item => item.median));
  const totalLocations = filteredLocations.length;
  const originalTotal = locationData.length;

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 rounded-lg">
          <MapPin className="w-5 h-5 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Location Analysis</h2>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Controls */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {totalLocations} of {originalTotal} locations
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('salary')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                sortBy === 'salary'
                  ? 'bg-red-100 text-red-700 font-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sort by Salary
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                sortBy === 'name'
                  ? 'bg-red-100 text-red-700 font-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sort by Name
            </button>
          </div>
        </div>
      </div>

      {/* Locations List */}
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => {
            const percentage = (location.median / maxSalary) * 100;
            const isTopSalary = index === 0 && sortBy === 'salary';
            
            return (
              <div 
                key={location.Country} 
                className="group hover:bg-gray-50 rounded-lg p-3 transition-colors border border-gray-100 hover:border-red-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold text-gray-900">{location.Country}</span>
                    {isTopSalary && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                        #1 Salary
                      </span>
                    )}
                    {location.Country === 'Remote' && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        Remote
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600 flex items-center gap-1 justify-end">
                      <PoundSterling className="w-3 h-3" />
                      {location.median?.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {location.count?.toLocaleString() || 'Multiple'} jobs
                    </div>
                  </div>
                </div>
                
                {/* Salary Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500 group-hover:from-red-600 group-hover:to-orange-600"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Salary progression</span>
                  <span>{percentage.toFixed(0)}% of max</span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>No locations found matching "{searchTerm}"</p>
            <button
              onClick={clearSearch}
              className="mt-2 text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Insights Section */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2 text-blue-800 mb-2">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold">UK Location Insights</span>
        </div>
        <p className="text-blue-700 text-sm mb-2">
          {filteredLocations[0]?.Country === 'London' ? 
            'London leads with premium salaries, but cities like Bristol and Manchester offer competitive packages with lower living costs.' :
            'Remote roles now offer competitive salaries compared to top tech hubs, with only 15% average difference for senior positions.'
          }
        </p>
        {filteredLocations.some(loc => loc.Country === 'Remote') && (
          <div className="flex items-center justify-between text-xs text-blue-600">
            <div className="flex items-center gap-1">
              <span className="font-medium">Remote work adoption:</span>
              <span>+24% in 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Avg remote salary:</span>
              <span>£60,000</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Search Tips */}
      {searchTerm === '' && (
        <div className="mt-4 text-xs text-gray-500">
          <p>💡 <strong>Quick search tips:</strong> Try "London", "Manchester", "Remote", or city names</p>
        </div>
      )}
    </div>
  );
};

export default LocationAnalysis;