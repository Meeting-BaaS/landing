import json

import requests

# API endpoint
url = "https://speaking.meetingbaas.com/bots"

# Request headers
headers = {"Content-Type": "application/json"}

# Request payload
payload = {
    "meeting_url": "https://meet.google.com/abc-defg-hij",
    "personas": ["interviewer", "note_taker"],
    "meeting_baas_api_key": "your-api-key",
    "websocket_url": "wss://your-server.com/ws",  # Optional
    "tts_provider": "cartesia",  # Optional
    "stt_provider": "deepgram",  # Optional
}

# Send the request
response = requests.post(url, headers=headers, data=json.dumps(payload))

# Process the response
if response.status_code == 200:
    result = response.json()
    print(f"Success! Bot ID: {result.get('bot_id')}")
    print(f"Bot Name: {result.get('bot_name')}")
else:
    print(f"Error: {response.status_code}")
    print(response.text)
