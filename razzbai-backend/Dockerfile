FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Bundle app source
COPY src ./src

ENV NODE_ENV=production
# Respect Render's PORT env var
ENV PORT=4000
EXPOSE 4000

CMD ["node", "src/server.js"]
