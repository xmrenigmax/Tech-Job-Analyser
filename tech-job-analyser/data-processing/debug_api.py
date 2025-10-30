#!/usr/bin/env python3
"""
Debug script to see exactly what the Adzuna API is returning
"""

import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

def debug_adzuna_api():
    app_id = os.environ.get('ADZUNA_APP_ID')
    app_key = os.environ.get('ADZUNA_APP_KEY')
    
    print("🔧 Debugging Adzuna API...")
    print(f"App ID: {app_id[:8]}...")
    print(f"App Key: {app_key[:8]}...")
    
    # Test different search parameters
    test_searches = [
        {'what': 'python', 'description': 'Python jobs'},
        {'what': 'developer', 'description': 'Developer jobs'},
        {'what': 'software engineer', 'description': 'Software engineer jobs'},
        {'what': 'javascript', 'description': 'JavaScript jobs'},
        {'what': '', 'description': 'All tech jobs (empty search)'}
    ]
    
    for search in test_searches:
        print(f"\n🔍 Testing: {search['description']}")
        url = "https://api.adzuna.com/v1/api/jobs/gb/search/1"
        params = {
            'app_id': app_id,
            'app_key': app_key,
            'what': search['what'],
            'content-type': 'application/json',
            'results_per_page': 5
        }
        
        try:
            response = requests.get(url, params=params, timeout=10)
            print(f"   Status: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                results = data.get('results', [])
                print(f"   Results found: {len(results)}")
                
                if results:
                    print("   Sample jobs:")
                    for i, job in enumerate(results[:2]):  # Show first 2 jobs
                        print(f"     {i+1}. {job.get('title', 'No title')}")
                        print(f"        Salary: {job.get('salary_min')} - {job.get('salary_max')}")
                        print(f"        Location: {job.get('location', {}).get('display_name', 'Unknown')}")
                else:
                    print("   ❌ No results returned")
                    # Print the full response to see what's happening
                    print(f"   Full response keys: {list(data.keys())}")
                    if 'results' in data:
                        print(f"   Results type: {type(data['results'])}")
                    
        except Exception as e:
            print(f"   ❌ Error: {e}")

if __name__ == "__main__":
    debug_adzuna_api()