# Stage 1: Install dependencies
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy installed dependencies and source code
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Expose the port Express runs on
EXPOSE 3001

# Start the app (index.js is in root, uses ES modules)
CMD ["node", "index.js"]
