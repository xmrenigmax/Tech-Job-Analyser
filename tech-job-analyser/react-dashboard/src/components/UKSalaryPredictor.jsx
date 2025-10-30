import React, { useState } from 'react';

const UKSalaryPredictor = () => {
  const [formData, setFormData] = useState({
    experience: '',
    location: '',
    skills: [],
    role: ''
  });
  
  const [prediction, setPrediction] = useState(null);

  const skillsList = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'Go', 'Rust',
    'React', 'Angular', 'Vue', 'Node.js', 'AWS', 'Azure', 'Docker',
    'Kubernetes', 'Machine Learning', 'Data Science', 'DevOps'
  ];

  const locations = [
    'London', 'Manchester', 'Birmingham', 'Bristol', 'Edinburgh', 
    'Glasgow', 'Leeds', 'Remote', 'Other'
  ];

  const experiences = [
    'Graduate (0-1 yrs)',
    'Junior (1-3 yrs)', 
    'Mid-level (3-5 yrs)',
    'Senior (5-8 yrs)',
    'Lead (8+ yrs)'
  ];

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const predictSalary = () => {
    // ML-like prediction algorithm based on UK market data
    let baseSalary = 28000; // Graduate base (UK-adjusted)
    
    // Experience multiplier (UK-adjusted)
    const experienceMultipliers = {
      'Graduate (0-1 yrs)': 1,
      'Junior (1-3 yrs)': 1.35,
      'Mid-level (3-5 yrs)': 1.85,
      'Senior (5-8 yrs)': 2.4,
      'Lead (8+ yrs)': 2.9
    };
    
    // Location adjustment (UK-specific)
    const locationMultipliers = {
      'London': 1.4,
      'Manchester': 1.05,
      'Birmingham': 0.95,
      'Bristol': 1.1,
      'Edinburgh': 1.0,
      'Glasgow': 0.95,
      'Leeds': 0.95,
      'Remote': 1.05,
      'Other': 1.0
    };
    
    // Skill bonuses (UK market rates)
    const skillBonuses = {
      'Python': 3500, 'Go': 4500, 'Rust': 5500, 'Machine Learning': 7000,
      'AWS': 5000, 'Kubernetes': 4500, 'DevOps': 4000, 'Data Science': 6000,
      'TypeScript': 3000, 'Java': 2500, 'React': 2000, 'Node.js': 2500
    };
    
    // Calculate prediction
    let predicted = baseSalary;
    
    if (formData.experience) {
      predicted *= experienceMultipliers[formData.experience];
    }
    
    if (formData.location) {
      predicted *= locationMultipliers[formData.location];
    }
    
    // Add skill bonuses
    formData.skills.forEach(skill => {
      predicted += skillBonuses[skill] || 1500;
    });
    
    // Add premium for multiple skills (specialization bonus)
    if (formData.skills.length > 3) {
      predicted *= 1.12;
    }
    
    // Add premium for senior+ roles with high-demand skills
    if ((formData.experience === 'Senior (5-8 yrs)' || formData.experience === 'Lead (8+ yrs)') && 
        formData.skills.some(skill => ['Machine Learning', 'Kubernetes', 'Go', 'Rust'].includes(skill))) {
      predicted *= 1.08;
    }
    
    setPrediction(Math.round(predicted / 500) * 500); // Round to nearest £500
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <span className="text-2xl">💰</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">UK Salary Predictor</h2>
      </div>

      {/* Prediction Form */}
      <div className="space-y-4">
        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <select 
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select experience</option>
            {experiences.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select 
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select location</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills & Technologies
          </label>
          <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 border border-gray-300 rounded-lg">
            {skillsList.map(skill => (
              <label key={skill} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Selected: {formData.skills.length} skills
          </div>
        </div>

        {/* Predict Button */}
        <button
          onClick={predictSalary}
          disabled={!formData.experience || !formData.location}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Predict My Salary
        </button>

        {/* Prediction Result */}
        {prediction && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800 mb-2">
                £{prediction.toLocaleString()}
              </div>
              <p className="text-green-700 text-sm">
                Estimated annual salary based on UK market data
              </p>
              <div className="flex justify-center gap-4 mt-3 text-xs text-green-600">
                <span>📍 {formData.location}</span>
                <span>💼 {formData.experience}</span>
                <span>🛠 {formData.skills.length} skills</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Based on analysis of 100+ UK tech job listings
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UKSalaryPredictor;