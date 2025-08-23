# deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
ENV HUSKY=0
RUN npm ci

# build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV GITHUB_USERNAME=mehmetsagir
ENV BASE_URL=http://localhost:3000
RUN npm run build

# run (standalone)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node","server.js"]
