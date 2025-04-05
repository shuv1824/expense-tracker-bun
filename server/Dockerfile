# Use Bun official image
FROM oven/bun:1.1.9

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Start server
CMD ["bun", "run", "dev"]
