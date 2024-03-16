# syntax=docker/dockerfile:1
FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /back

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run start
