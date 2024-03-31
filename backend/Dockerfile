# Use a specific Node.js version instead of 'latest' to ensure consistency
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Define the port for the container
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
