# syntax=docker/dockerfile:1
FROM node:lts-alpine as base

ENV NODE_ENV=production

WORKDIR /front

FROM base as build

COPY --link package.json package-lock.json ./
RUN npm install --production=false

COPY --link . .

ARG VITE_BASE_IMG_URL

ENV VITE_BASE_IMG_URL=${VITE_BASE_IMG_URL}

RUN npm run build
RUN npm prune

FROM base
COPY --from=build /front/dist /front/dist
COPY --from=build /front/node_modules /front/node_modules

EXPOSE 3001
CMD [ "node", "dist/server/server.mjs" ]
