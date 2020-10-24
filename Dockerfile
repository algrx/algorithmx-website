# === install dependencies ===
FROM node:11 as setup
WORKDIR /app

COPY . ./
RUN npm ci
