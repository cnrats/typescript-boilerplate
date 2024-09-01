FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts
COPY dist ./dist
CMD ["npm", "start"]
