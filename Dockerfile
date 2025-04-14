# Use the latest LTS Node.js slim image as the base
FROM node:lts

# Create app directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including development dependencies needed for building)
RUN npm ci

# Copy the source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Set environment variable
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]