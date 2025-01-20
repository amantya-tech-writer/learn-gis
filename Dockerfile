FROM node:22.5.0-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]