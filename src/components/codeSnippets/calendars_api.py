import json
from datetime import datetime, timedelta

import requests

# Your API key
api_key = "your-meetingbaas-api-key"

# API endpoints
base_url = "https://api.meetingbaas.com"
calendars_url = f"{base_url}/calendars"

# Headers for authentication
headers = {"Content-Type": "application/json", "x-spoke-api-key": api_key}


# 1. List connected calendar providers
def list_calendar_providers():
    response = requests.get(f"{calendars_url}/providers", headers=headers)
    return response.json()


# 2. Schedule bots for all team meetings in the next week
def schedule_bots_for_team_meetings():
    # Calculate date range (next 7 days)
    today = datetime.now().isoformat()
    next_week = (datetime.now() + timedelta(days=7)).isoformat()

    # Query parameters to find team meetings
    params = {"start_time": today, "end_time": next_week, "query": "Team Meeting"}

    # Get matching events
    events_response = requests.get(
        f"{calendars_url}/events", headers=headers, params=params
    )

    if events_response.status_code != 200:
        return f"Error fetching events: {events_response.text}"

    events = events_response.json().get("events", [])
    scheduled_bots = []

    # Schedule a bot for each meeting
    for event in events:
        bot_data = {
            "meeting_url": event.get("meeting_url"),
            "scheduled_time": event.get("start_time"),
            "bot_name": "Team Meeting Recorder",
            "speech_to_text": "Gladia",
            "entry_message": "I'll be recording this team meeting.",
        }

        bot_response = requests.post(f"{base_url}/bots", headers=headers, json=bot_data)

        if bot_response.status_code == 200:
            bot = bot_response.json()
            scheduled_bots.append(
                {
                    "event_id": event.get("id"),
                    "event_title": event.get("title"),
                    "bot_id": bot.get("bot_id"),
                }
            )

    return {"total_events": len(events), "scheduled_bots": scheduled_bots}


# Run the example
if __name__ == "__main__":
    providers = list_calendar_providers()
    print(f"Connected calendar providers: {providers}")

    result = schedule_bots_for_team_meetings()
    print(json.dumps(result, indent=2))
