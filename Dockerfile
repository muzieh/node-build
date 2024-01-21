FROM node:18-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY src ./src

EXPOSE 8080

CMD ["node", "./src/index.js"]