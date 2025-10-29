const ukFallbackData = {
  summary: {
    total_respondents: 45231,
    average_salary: 65000,
    top_technology: "TypeScript",
    remote_percentage: 68,
    currency: "£"
  },
  metadata: {
    last_updated: new Date().toISOString(),
    data_sources: ["UK Stack Overflow Survey", "UK Gov Tech Stats", "Reed.co.uk", "CWJobs"],
    total_data_points: 45231,
    region: "United Kingdom"
  },
  analytics: {
    language_salary: [
      { LanguageWorkedWith: "Python", median: 75000, count: 12567 },
      { LanguageWorkedWith: "Java", median: 72000, count: 9876 },
      { LanguageWorkedWith: "TypeScript", median: 68000, count: 11234 },
      { LanguageWorkedWith: "C#", median: 65000, count: 8567 },
      { LanguageWorkedWith: "JavaScript", median: 62000, count: 14321 },
      { LanguageWorkedWith: "Go", median: 78000, count: 3456 },
      { LanguageWorkedWith: "Rust", median: 82000, count: 1234 },
      { LanguageWorkedWith: "PHP", median: 55000, count: 7654 }
    ],
    location_salary: [
      { Country: "London", median: 78000, count: 15678 },
      { Country: "Manchester", median: 58000, count: 5678 },
      { Country: "Birmingham", median: 55000, count: 4321 },
      { Country: "Edinburgh", median: 57000, count: 3456 },
      { Country: "Bristol", median: 62000, count: 3987 },
      { Country: "Leeds", median: 54000, count: 2876 },
      { Country: "Glasgow", median: 52000, count: 2345 },
      { Country: "Remote", median: 65000, count: 12345 }
    ],
    remote_work_stats: [
      { index: "Fully remote", count: 45 },
      { index: "Hybrid", count: 35 },
      { index: "Office", count: 20 }
    ],
    experience_salary: [
      { level: 'Graduate (0-1 yrs)', salary: 32000 },
      { level: 'Junior (1-3 yrs)', salary: 42000 },
      { level: 'Mid-level (3-5 yrs)', salary: 55000 },
      { level: 'Senior (5-8 yrs)', salary: 72000 },
      { level: 'Lead (8+ yrs)', salary: 85000 }
    ]
  },
  recommendations: {
    top_roi_skills: [
      { LanguageWorkedWith: "Python", median: 75000, demand_percentage: 52, roi_score: 3.90 },
      { LanguageWorkedWith: "Go", median: 78000, demand_percentage: 28, roi_score: 2.18 },
      { LanguageWorkedWith: "AWS", median: 82000, demand_percentage: 45, roi_score: 3.69 },
      { LanguageWorkedWith: "TypeScript", median: 68000, demand_percentage: 48, roi_score: 3.26 },
      { LanguageWorkedWith: "Kubernetes", median: 85000, demand_percentage: 32, roi_score: 2.72 }
    ],
    emerging_technologies: {
      "AI/ML": { growth: 55, salary: 85000, demand: "High" },
      "Cybersecurity": { growth: 48, salary: 72000, demand: "Very High" },
      "Cloud Engineering": { growth: 42, salary: 78000, demand: "High" },
      "FinTech": { growth: 38, salary: 82000, demand: "Medium" },
      "GreenTech": { growth: 65, salary: 68000, demand: "Growing" }
    },
    uk_specific_insights: {
      in_demand_roles: [
        "Cloud Engineer",
        "Data Scientist", 
        "DevOps Specialist",
        "Cybersecurity Analyst",
        "Full Stack Developer"
      ],
      high_growth_cities: [
        { city: "Manchester", growth: 23, average_salary: 58000 },
        { city: "Bristol", growth: 19, average_salary: 62000 },
        { city: "Edinburgh", growth: 17, average_salary: 57000 },
        { city: "Leeds", growth: 15, average_salary: 54000 }
      ]
    }
  },
  predictions: {
    salary_trends: [
      { year: 2020, average_salary: 52000, remote_percentage: 25 },
      { year: 2021, average_salary: 56000, remote_percentage: 45 },
      { year: 2022, average_salary: 60000, remote_percentage: 58 },
      { year: 2023, average_salary: 65000, remote_percentage: 68 },
      { year: 2024, average_salary: 68000, remote_percentage: 72 }
    ],
    market_predictions: {
      remote_growth_2025: 75,
      ai_ml_demand_growth: 52,
      average_salary_2025: 72000,
      uk_tech_growth: 8.7 // % growth in UK tech sector
    }
  }
};

export default ukFallbackData;