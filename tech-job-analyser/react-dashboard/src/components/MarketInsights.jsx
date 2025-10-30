import React from 'react';
import { TrendingUp, Users, Clock } from 'lucide-react';

const MarketInsights = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <TrendingUp className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Market Insights</h2>
      </div>

      {/* Salary Trends */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500" />
          Salary Trends
        </h3>
        <div className="space-y-3">
          {data.salary_trends?.map((trend, index) => (
            <div key={trend.year} className="flex justify-between items-center">
              <span className="text-gray-600">{trend.year}</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">£{trend.average_salary?.toLocaleString()}</div>
                <div className="text-sm text-gray-500">{trend.remote_percentage}% remote</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Predictions */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-4 h-4 text-purple-500" />
          2025 Predictions
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Remote work adoption</span>
            <span className="font-semibold text-green-600">{data.market_predictions?.remote_growth_2025}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">AI/ML demand growth</span>
            <span className="font-semibold text-green-600">+{data.market_predictions?.ai_ml_demand_growth}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Average salary</span>
            <span className="font-semibold text-blue-600">£{data.market_predictions?.average_salary_2025?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">UK tech growth</span>
            <span className="font-semibold text-green-600">+{data.market_predictions?.uk_tech_growth}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;