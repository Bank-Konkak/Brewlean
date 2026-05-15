# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# คัดเลือกไฟล์ package เพื่อติดตั้ง dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# สั่ง Build โปรเจกต์ (Next.js หรือ Vite/React)
RUN npm run build

# Stage 3: Production server
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# สร้าง User ใหม่เพื่อความปลอดภัย (ไม่รันด้วย root)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# คัดลอกเฉพาะไฟล์ที่จำเป็นจากการ Build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 8082

ENV PORT 8082

# รันแอปพลิเคชัน
CMD ["npm", "start"]
