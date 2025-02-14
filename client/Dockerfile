# Build stage
FROM node:20.9.0-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app with environment variable
ARG API_URL
ENV API_URL=${API_URL}
RUN npm run build

# Production stage
FROM node:20.9.0-alpine

WORKDIR /app

# Install serve package globally
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-p", "3000"]