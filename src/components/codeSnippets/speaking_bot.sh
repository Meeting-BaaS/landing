#!/bin/bash
curl -X POST "https://speaking.meetingbaas.com/bots" \
-H "Content-Type: application/json" \
-d '{
  "meeting_url": "https://us06web.zoom.us/j/123456789?pwd=example",
  "personas": ["baas_onboarder"],
  "meeting_baas_api_key": "your-api-key"
}' 