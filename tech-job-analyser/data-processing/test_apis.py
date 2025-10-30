#!/usr/bin/env python3
"""
Test script to verify API credentials and connectivity
"""

import os
import requests
from dotenv import load_dotenv

load_dotenv()

def test_adzuna_api():
    """Test Adzuna API connectivity"""
    app_id = os.environ.get('ADZUNA_APP_ID')
    app_key = os.environ.get('ADZUNA_APP_KEY')
    
    print("🔍 Testing Adzuna API...")
    print(f"App ID: {app_id[:8] + '...' if app_id else 'NOT FOUND'}")
    print(f"App Key: {app_key[:8] + '...' if app_key else 'NOT FOUND'}")
    
    if not app_id or not app_key:
        print("❌ Adzuna credentials missing from .env file")
        return False
    
    try:
        url = "https://api.adzuna.com/v1/api/jobs/gb/search/1"
        params = {
            'app_id': app_id,
            'app_key': app_key,
            'what': 'python developer',
            'content-type': 'application/json'
        }
        
        response = requests.get(url, params=params, timeout=10)
        print(f"API Response Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ API working! Found {len(data.get('results', []))} jobs")
            return True
        else:
            print(f"❌ API error: {response.status_code} - {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ API connection failed: {e}")
        return False

def test_environment():
    """Test environment setup"""
    print("\n🔍 Testing environment...")
    env_file = '.env'
    if os.path.exists(env_file):
        print(f"✅ .env file found at: {os.path.abspath(env_file)}")
        with open(env_file, 'r') as f:
            content = f.read()
            if 'ADZUNA_APP_ID' in content and 'ADZUNA_APP_KEY' in content:
                print("✅ Adzuna credentials found in .env file")
            else:
                print("❌ Adzuna credentials missing from .env file")
    else:
        print("❌ .env file not found")

if __name__ == "__main__":
    print("🚀 Testing API Connectivity")
    print("=" * 50)
    
    test_environment()
    test_adzuna_api()
    
    print("\n💡 If APIs are failing, you can:")
    print("1. Get free Adzuna API keys at: https://developer.adzuna.com/")
    print("2. Add them to your .env file")
    print("3. The system will use fallback data until APIs work")