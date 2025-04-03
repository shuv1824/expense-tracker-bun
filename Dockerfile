FROM oven/bun:alpine AS frontend-dev

WORKDIR /app/frontend

COPY bun.lockb package.json ./
RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "dev"]


FROM oven/bun:alpine AS backend

WORKDIR /app

COPY bun.lockb package.json ./
RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "run", "dev"]
