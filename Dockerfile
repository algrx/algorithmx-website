# === install dependencies ===
FROM node:14 as setup
WORKDIR /app

COPY . ./
RUN npm ci
