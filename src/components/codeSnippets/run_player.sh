#!/bin/bash
# 🚀 Quick Start for Video Player with Synchronized Transcript 🚀
# Save this file as run.sh, chmod +x run.sh, and run it
# ⚠️ Make sure you have Git, Node.js, and Yarn installed before proceeding!

# Clone the repository
echo "📥 Cloning the repository..."
git clone https://github.com/Meeting-Baas/meeting-bot-as-a-service && cd meeting-bot-as-a-service || { echo "❌ Error: Failed to clone repository"; exit 1; }

# Navigate to the player interface directory
echo "📂 Navigating to player interface directory..."
cd apps/player-interface || { echo "❌ Error: Failed to navigate to player interface directory"; exit 2; }

# Install dependencies
echo "🔧 Installing dependencies..."
yarn install || { echo "❌ Error: Failed to install dependencies"; exit 3; }

# Run the application
echo "🚀 Starting the development server..."
yarn dev || { echo "❌ Error: Failed to start the development server"; exit 4; }

echo "✅ Setup complete! The application should now be running on your local development server at http://localhost:3000"