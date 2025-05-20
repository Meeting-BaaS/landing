#!/bin/bash
API_KEY=$1
MEETING_URL=$2
curl -X POST "https://api.meetingbaas.com/bots" \
     -H "Content-Type: application/json" \
     -H "x-spoke-api-key: $API_KEY" \
     -d '{
           "meeting_url": "'"$MEETING_URL"'",
           "bot_name": "Your Bot",
           "speech_to_text": "Gladia"
         }'