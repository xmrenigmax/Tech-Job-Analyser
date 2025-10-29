import React from 'react';
import { TrendingUp, DollarSign, MapPin, Laptop, Target, Code, Users, Zap } from 'lucide-react';
import SalaryChart from './SalaryChart';
import SkillRecommendations from './SkillRecommendations';
import MarketInsights from './MarketInsights';
import LocationAnalysis from './LocationAnalysis';
import RemoteWorkStats from './RemoteWorkStats';

// Fallback data - replace with your JSON imports
import fallbackData from '../data/fallbackData';

const Dashboard = () => {
  const data = fallbackData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🚀 Tech Job Market Analyzer
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Real-time insights from {data.summary.total_respondents.toLocaleString()} developers worldwide
            </p>
            <div className="text-sm text-gray-500">
              Last updated: {new Date(data.metadata.last_updated).toLocaleDateString()}
            </div>
          </div>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            icon={<DollarSign className="w-8 h-8" />}
            title="Average Salary"
            value={`$${data.summary.average_salary.toLocaleString()}`}
            trend="+5.2% from last year"
            color="green"
          />
          
          <SummaryCard
            icon={<Target className="w-8 h-8" />}
            title="Top Technology"
            value={data.summary.top_technology}
            trend="Most in-demand"
            color="blue"
          />
          
          <SummaryCard
            icon={<Laptop className="w-8 h-8" />}
            title="Remote Work"
            value={`${data.summary.remote_percentage}%`}
            trend="+12% growth"
            color="purple"
          />
          
          <SummaryCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Market Trend"
            value="+15% YoY"
            trend="Accelerating growth"
            color="orange"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="lg:col-span-2 xl:col-span-2">
            <SalaryChart data={data.analytics.language_salary} />
          </div>
          
          <div className="lg:col-span-1">
            <SkillRecommendations data={data.recommendations} />
          </div>
          
          <div>
            <MarketInsights data={data.predictions} />
          </div>
          
          <div>
            <LocationAnalysis data={data.analytics.location_salary} />
          </div>
          
          <div>
            <RemoteWorkStats data={data.analytics.remote_work_stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ icon, title, value, trend, color = 'blue' }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[color]} text-white`}>
          {icon}
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-green-600 font-medium">{trend}</div>
    </div>
  );
};

export default Dashboard;