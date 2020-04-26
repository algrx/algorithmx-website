# === install dependencies ===
FROM node:11 as install
COPY . /app
WORKDIR /app
RUN npm ci
