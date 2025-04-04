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

# Expose frontend port
EXPOSE 3000

# Start Vite dev server
CMD ["bun", "run", "dev"]
