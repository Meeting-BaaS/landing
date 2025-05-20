#!/bin/bash
# 🚀 Quick Start for Transcript Seeker 🚀
# Save this file as run.sh, chmod +x run.sh, and run it
# ⚠️ Make sure you have Git, Node.js, and Yarn installed before proceeding!

# clone and navigate to the repo
git clone https://github.com/Meeting-Baas/transcript-seeker && cd transcript-seeker

# Install dependencies
echo "🔧 Installing dependencies..."
yarn install && yarn install:all || { echo "❌ Error: Failed to install dependencies"; exit 1; }

echo "🏗️ Building dependencies..."
yarn run build || { echo "❌ Error: Failed to build dependencies"; exit 2; }

echo "📄 Copying .env file..."
cp .env.example .env || { echo "⚠️ Warning: Failed to copy .env file. You may need to set up environment variables manually."; }

echo "🚀 Starting the development server..."
cd client && yarn run dev || { echo "❌ Error: Failed to start the development server"; exit 3; }