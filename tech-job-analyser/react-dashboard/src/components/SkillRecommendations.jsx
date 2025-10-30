import React from 'react';
import { Zap, TrendingUp, Star } from 'lucide-react';

const SkillRecommendations = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Zap className="w-5 h-5 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Skill Recommendations</h2>
      </div>

      {/* Top ROI Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          Highest ROI Skills
        </h3>
        <div className="space-y-3">
          {data.top_roi_skills?.slice(0, 5).map((skill, index) => (
            <div key={skill.LanguageWorkedWith} className="border border-gray-200 rounded-lg p-3 hover:border-purple-300 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-gray-900">{skill.LanguageWorkedWith}</span>
                <span className="text-green-600 font-bold">£{skill.median?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{skill.demand_percentage}% demand</span>
                <span>ROI: {skill.roi_score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(skill.roi_score / (data.top_roi_skills[0]?.roi_score || 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emerging Technologies */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          Emerging Technologies
        </h3>
        <div className="space-y-2">
          {data.emerging_technologies && Object.entries(data.emerging_technologies).map(([tech, info]) => (
            <div key={tech} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
              <span className="font-medium text-gray-900">{tech}</span>
              <div className="text-right">
                <div className="text-green-600 text-sm font-semibold">+{info.growth}%</div>
                <div className="text-gray-500 text-xs">{info.demand} demand</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillRecommendations;