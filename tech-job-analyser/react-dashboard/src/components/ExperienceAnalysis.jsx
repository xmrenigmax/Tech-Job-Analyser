import React from 'react';
import { Award, TrendingUp, Rocket } from 'lucide-react';

const ExperienceAnalysis = ({ data }) => {
  const experienceData = [
    { level: 'Junior (0-2 yrs)', salary: 65000, growth: 'Entry', icon: <Rocket className="w-4 h-4" /> },
    { level: 'Mid (3-5 yrs)', salary: 95000, growth: 'Rapid', icon: <TrendingUp className="w-4 h-4" /> },
    { level: 'Senior (6-10 yrs)', salary: 130000, growth: 'Peak', icon: <Award className="w-4 h-4" /> },
    { level: 'Lead (11-15 yrs)', salary: 160000, growth: 'Leadership', icon: <Award className="w-4 h-4" /> },
    { level: 'Principal (15+ yrs)', salary: 190000, growth: 'Expert', icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Award className="w-5 h-5 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Experience Levels</h2>
      </div>

      <div className="space-y-4">
        {experienceData.map((item, index) => (
          <div key={item.level} className="group border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-sm transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.level}</h3>
                  <span className="text-sm text-gray-500">{item.growth} stage</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">${item.salary.toLocaleString()}</div>
                <div className="text-xs text-gray-500">avg. salary</div>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex-1 bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
                  style={{ width: `${(index + 1) * 20}%` }}
                ></div>
              </div>
              <span className="text-gray-500 text-xs">Level {index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Career Progression Insight */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
        <div className="flex items-center gap-2 text-purple-800 mb-2">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold">Career Growth</span>
        </div>
        <p className="text-purple-700 text-sm">
          Developers see the highest salary growth (46% increase) between junior and mid-level positions, 
          with specialization becoming key for senior+ roles.
        </p>
      </div>
    </div>
  );
};

export default ExperienceAnalysis;