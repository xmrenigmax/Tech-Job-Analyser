import React from 'react';
import SalaryChart from './SalaryChart';
import SkillRecommendations from './SkillRecommendations';
import MarketInsights from './MarketInsights';
import LocationAnalysis from './LocationAnalysis';
import RemoteWorkStats from './RemoteWorkStats';
import ExperienceAnalysis from './ExperienceAnalysis';
import UKSalaryPredictor from './UKSalaryPredictor';

// Import the real UK data instead of fallback data
import ukData from '../data/ukFallbackData.json';

const Dashboard = () => {
  const data = ukData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with UK flag */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl">🇬🇧</span>
              <h1 className="text-4xl font-bold text-gray-900">
                UK Tech Job Market Analyzer
              </h1>
              <span className="text-3xl">🇬🇧</span>
            </div>
            <p className="text-lg text-gray-600 mb-2">
              Real-time insights from {data.summary.total_respondents.toLocaleString()} UK developers
            </p>
            <div className="text-sm text-gray-500">
              Last updated: {new Date(data.metadata.last_updated).toLocaleDateString()}
              {data.metadata.data_quality === 'real_time' && (
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  🔄 Live Data
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Summary Cards with £ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            icon="💰"
            title="Average Salary"
            value={`£${data.summary.average_salary.toLocaleString()}`}
            trend="+5.2% from last year"
            color="green"
          />
          
          <SummaryCard
            icon="🎯"
            title="Top Technology"
            value={data.summary.top_technology}
            trend="Most in-demand"
            color="blue"
          />
          
          <SummaryCard
            icon="🏠"
            title="Remote Work"
            value={`${data.summary.remote_percentage}%`}
            trend="+12% growth"
            color="purple"
          />
          
          <SummaryCard
            icon="📈"
            title="UK Tech Growth"
            value="+8.7% YoY"
            trend="Above EU average"
            color="orange"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalaryChart data={data.analytics.language_salary} currency="£" />
          </div>
          
          <div>
            <UKSalaryPredictor />
          </div>
          
          <div>
            <SkillRecommendations data={data.recommendations} />
          </div>
          
          <div>
            <LocationAnalysis data={data.analytics.location_salary} />
          </div>
          
          <div>
            <RemoteWorkStats data={data.analytics.remote_work_stats} />
          </div>

          <div className="lg:col-span-2">
            <ExperienceAnalysis data={data.analytics.experience_salary} />
          </div>

          <div>
            <MarketInsights data={data.predictions} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ icon, title, value, trend, color = 'blue' }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">
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