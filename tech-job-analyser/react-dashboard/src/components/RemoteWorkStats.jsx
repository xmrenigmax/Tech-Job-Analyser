import React from 'react';
import { Laptop, Home, Building2, Users } from 'lucide-react';

const RemoteWorkStats = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  
  const getWorkTypeIcon = (type) => {
    switch (type) {
      case 'Fully remote':
        return <Home className="w-4 h-4 text-green-600" />;
      case 'Hybrid':
        return <Laptop className="w-4 h-4 text-blue-600" />;
      case 'Office':
        return <Building2 className="w-4 h-4 text-purple-600" />;
      default:
        return <Users className="w-4 h-4 text-gray-600" />;
    }
  };

  const getWorkTypeColor = (type) => {
    switch (type) {
      case 'Fully remote':
        return 'from-green-500 to-emerald-600';
      case 'Hybrid':
        return 'from-blue-500 to-cyan-600';
      case 'Office':
        return 'from-purple-500 to-indigo-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <Laptop className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Remote Work Trends</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {data.map((item, index) => {
          const percentage = (item.count / total) * 100;
          return (
            <div key={item.index} className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${getWorkTypeColor(item.index)} flex items-center justify-center text-white`}>
                {getWorkTypeIcon(item.index)}
              </div>
              <div className="text-2xl font-bold text-gray-900">{percentage.toFixed(0)}%</div>
              <div className="text-xs text-gray-500 capitalize">{item.index.toLowerCase()}</div>
            </div>
          );
        })}
      </div>

      {/* Detailed Breakdown */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 mb-3">Work Preference Distribution</h3>
        {data.map((item) => {
          const percentage = (item.count / total) * 100;
          return (
            <div key={item.index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getWorkTypeIcon(item.index)}
                <span className="text-gray-700 capitalize">{item.index.toLowerCase()}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getWorkTypeColor(item.index)}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-8">{percentage.toFixed(0)}%</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trend Indicator */}
      <div className="mt-6 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
        <div className="flex items-center justify-between">
          <span className="text-green-800 font-medium">Remote work adoption</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-bold">
            +24% YoY
          </span>
        </div>
      </div>
    </div>
  );
};

export default RemoteWorkStats;