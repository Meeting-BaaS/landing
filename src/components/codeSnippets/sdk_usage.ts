// This is a code snippet for display purposes only
const sdkUsageContent = `// SDK Example: Join a meeting with a bot
import { BaasClient } from '@meeting-baas/sdk';

// Initialize client 
const client = new BaasClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.meetingbaas.com'
});

// Join a meeting with a bot
async function joinMeeting() {
  try {
    const botId = await client.join({
      joinRequest: {
        meetingUrl: 'https://meet.google.com/abc-def-ghi',
        botName: 'Meeting Assistant',
        reserved: true
      }
    });
    console.log('Bot created:', botId);
  } catch (error) {
    console.error('Failed to join:', error);
  }
}`

export default sdkUsageContent
