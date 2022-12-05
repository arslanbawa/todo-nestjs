FROM node:14.21.1-alpine
WORKDIR /app

COPY ./package.json ./
RUN npm i
COPY . .

CMD ["npm", "run", "start"]