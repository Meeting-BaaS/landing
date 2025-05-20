import sys
import requests

API_KEY = sys.argv[1]
MEETING_URL = sys.argv[2]

response = requests.post("https://api.meetingbaas.com/bots", json={
    "meeting_url": MEETING_URL,
    "reserved": False,
    "bot_name": "My first bot",
    "bot_image": "https://meetingbaas.com/static/a7d46fd33668f28baa9cbf66005489f0/a6312/preview.png",
    "entry_message": "Hello. I will be recording this meeting 🐟.",
    "speech_to_text": "Gladia",
    "deduplication_key": "null"
}, headers={
    "Content-Type": "application/json",
    "x-spoke-api-key": API_KEY
})

print(response.text)