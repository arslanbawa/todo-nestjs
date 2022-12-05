FROM node:14.21.1-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start:dev"  ]