FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# source is mounted at runtime via volume for hot reload
EXPOSE 5173

CMD ["npm", "run", "dev"]
