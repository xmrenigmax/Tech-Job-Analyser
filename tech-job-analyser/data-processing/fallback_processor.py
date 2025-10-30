"""
Fallback data processor for when real APIs are unavailable
"""

import numpy as np
from datetime import datetime

def create_fallback_data():
    """Create realistic fallback UK data"""
    print("🔄 Using fallback data (APIs unavailable)")
    
    return {
        'summary': {
            'total_respondents': 45231,
            'average_salary': 62000,
            'top_technology': "Python",
            'remote_percentage': 65,
            'currency': '£'
        },
        'metadata': {
            'last_updated': datetime.now().isoformat(),
            'data_sources': ['Fallback Analysis'],
            'total_data_points': 1000,
            'region': 'United Kingdom',
            'update_frequency': 'weekly',
            'data_quality': 'fallback'
        },
        'analytics': {
            'language_salary': [
                {'LanguageWorkedWith': 'Python', 'median': 65000, 'count': 12567},
                {'LanguageWorkedWith': 'Java', 'median': 60000, 'count': 9876},
                {'LanguageWorkedWith': 'TypeScript', 'median': 62000, 'count': 11234},
                {'LanguageWorkedWith': 'JavaScript', 'median': 55000, 'count': 14321},
                {'LanguageWorkedWith': 'AWS', 'median': 70000, 'count': 8567},
                {'LanguageWorkedWith': 'Docker', 'median': 68000, 'count': 6543},
                {'LanguageWorkedWith': 'Kubernetes', 'median': 72000, 'count': 5432},
                {'LanguageWorkedWith': 'React', 'median': 58000, 'count': 9876}
            ],
            'location_salary': [
                {'Country': 'London', 'median': 72000, 'count': 15678},
                {'Country': 'Manchester', 'median': 52000, 'count': 5678},
                {'Country': 'Bristol', 'median': 58000, 'count': 3987},
                {'Country': 'Edinburgh', 'median': 54000, 'count': 3456},
                {'Country': 'Remote', 'median': 60000, 'count': 12345}
            ],
            'remote_work_stats': [
                {'index': 'Fully remote', 'count': 45},
                {'index': 'Hybrid', 'count': 35},
                {'index': 'Office', 'count': 20}
            ],
            'experience_salary': [
                {'level': 'Graduate (0-1 yrs)', 'salary': 28000},
                {'level': 'Junior (1-3 yrs)', 'salary': 38000},
                {'level': 'Mid-level (3-5 yrs)', 'salary': 52000},
                {'level': 'Senior (5-8 yrs)', 'salary': 68000},
                {'level': 'Lead (8+ yrs)', 'salary': 82000}
            ]
        },
        'recommendations': {
            'top_roi_skills': [
                {'LanguageWorkedWith': 'Python', 'median': 65000, 'demand_percentage': 52, 'roi_score': 3.38},
                {'LanguageWorkedWith': 'AWS', 'median': 70000, 'demand_percentage': 45, 'roi_score': 3.15},
                {'LanguageWorkedWith': 'TypeScript', 'median': 62000, 'demand_percentage': 48, 'roi_score': 2.98},
                {'LanguageWorkedWith': 'Kubernetes', 'median': 72000, 'demand_percentage': 32, 'roi_score': 2.30},
                {'LanguageWorkedWith': 'Java', 'median': 60000, 'demand_percentage': 38, 'roi_score': 2.28}
            ],
            'emerging_technologies': {
                'AI/ML Engineering': {'growth': 55, 'salary': 75000, 'demand': 'High'},
                'Cloud Security': {'growth': 48, 'salary': 68000, 'demand': 'High'},
                'DevOps Engineering': {'growth': 45, 'salary': 65000, 'demand': 'High'},
                'Data Engineering': {'growth': 42, 'salary': 68000, 'demand': 'High'}
            }
        },
        'predictions': {
            'salary_trends': [
                {'year': 2020, 'average_salary': 52000, 'remote_percentage': 25},
                {'year': 2021, 'average_salary': 56000, 'remote_percentage': 45},
                {'year': 2022, 'average_salary': 59000, 'remote_percentage': 55},
                {'year': 2023, 'average_salary': 62000, 'remote_percentage': 65},
                {'year': 2024, 'average_salary': 65000, 'remote_percentage': 70}
            ],
            'market_predictions': {
                'remote_growth_2025': 75,
                'ai_ml_demand_growth': 50,
                'average_salary_2025': 68000,
                'uk_tech_growth': 8.5
            }
        }
    }