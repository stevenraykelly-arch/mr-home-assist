import os
import requests
import sys
import json
from dotenv import load_dotenv

def main():
    load_dotenv("config.env")
    
    api_url = os.getenv("COOLIFY_API_URL", "").replace('"', '').replace("'", "")
    token = os.getenv("COOLIFY_TOKEN", "").replace('"', '').replace("'", "")
    
    if len(sys.argv) < 2:
        print("Usage: python check_deployment.py <app_uuid>")
        return

    app_uuid = sys.argv[1]
    
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    # Option to check specific deployment
    if len(sys.argv) > 2:
        # ... (Previous code omitted for brevity)
        pass

    # 3. List Deployments specific to App
    print(f"\n--- List Deployments via App Endpoint ---")
    try:
        # Guessing endpoint based on Coolify structure
        # /applications/{uuid}/deployments might not exist, but let's try
        # Or maybe it's filter param on /deployments
        
        # Try finding deployments in the Application Details itself?
        # Sometimes apps embed latest deployments.
        
        # Try: /deployments with filter
        d_url = f"{api_url}/deployments"
        params = {"filter[application_uuid]": app_uuid, "sort": "-created_at"}
        resp = requests.get(d_url, headers=headers, params=params)
        print(f"Filtered List Status: {resp.status_code}")
        if resp.status_code == 200:
             data = resp.json()
             deployments = data.get('deployments', [])
             if isinstance(data, list): deployments = data
             
             print(f"Found {len(deployments)} deployments for app.")
             if len(deployments) > 0:
                  latest = deployments[0]
                  print(f"Latest: {latest.get('uuid')} - {latest.get('status')}")
                  
                  # Try to get logs for THIS one
                  dep_uuid = latest.get('uuid')
                  print(f"Fetching logs for {dep_uuid}...")
                  # Try standard log endpoint again
                  l_url = f"{api_url}/deployments/{dep_uuid}/logs"
                  r_log = requests.get(l_url, headers=headers)
                  if r_log.status_code == 200:
                       print("--- LOGS ---")
                       print(r_log.text[-2000:])
                       print("--- END ---")
                  else:
                       print(r_log.text)
        else:
             print(resp.text)

    except Exception as e:
         print(e)
    try:
        deployments_url = f"{api_url}/deployments?sort=-created_at&limit=5"
        resp = requests.get(deployments_url, headers=headers)
        if resp.status_code == 200:
             data = resp.json()
             if isinstance(data, list):
                 print(f"Received List of {len(data)} deployments")
                 if len(data) > 0:
                     deploy = data[0]
                     print("Sample Deployment:")
                     print(json.dumps(deploy, indent=2))
             elif isinstance(data, dict):
                 print(f"Received Dict keys: {data.keys()}")
                 if 'deployments' in data:
                      print(f"Found {len(data['deployments'])} deployments")
                      if len(data['deployments']) > 0:
                           # Try to find our specific deployment if possible
                           print(json.dumps(data['deployments'][0], indent=2))
        else:
             print(f"List failed: {resp.status_code} - {resp.text}")

    except Exception as e:
        print(f"Error listing deployments: {e}")

    # 2. Get Application Specifics
    print(f"\n--- Get Application {app_uuid} ---")
    try:
         app_url = f"{api_url}/applications/{app_uuid}"
         resp = requests.get(app_url, headers=headers)
         print(f"Status: {resp.status_code}")
         if resp.status_code == 200:
             print(json.dumps(resp.json(), indent=2))
         else:
             print(resp.text)
    except Exception as e:
        print(f"Error getting app: {e}")

if __name__ == "__main__":
    main()
