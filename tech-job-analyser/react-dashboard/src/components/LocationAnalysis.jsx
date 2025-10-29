import React from 'react';
import { MapPin, TrendingUp, DollarSign } from 'lucide-react';

const LocationAnalysis = ({ data }) => {
  const maxSalary = Math.max(...data.map(item => item.median));
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 rounded-lg">
          <MapPin className="w-5 h-5 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Location Analysis</h2>
      </div>

      <div className="space-y-4">
        {data.map((location, index) => {
          const percentage = (location.median / maxSalary) * 100;
          return (
            <div key={location.Country} className="group hover:bg-gray-50 rounded-lg p-3 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{location.Country}</span>
                  {index === 0 && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      #1
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">${location.median.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{location.count} jobs</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500 group-hover:from-red-600 group-hover:to-orange-600"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Salary progression</span>
                <span>{percentage.toFixed(0)}% of max</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2 text-blue-800 mb-2">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold">Insight</span>
        </div>
        <p className="text-blue-700 text-sm">
          Remote roles now offer competitive salaries compared to top tech hubs, 
          with only 15% average difference for senior positions.
        </p>
      </div>
    </div>
  );
};

export default LocationAnalysis;