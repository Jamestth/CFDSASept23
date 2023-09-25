# Build Stage
ARG NODE_VERSION=20
FROM node:${NODE_VERSION} as builder

WORKDIR /app

COPY main.js .
COPY package.json .
COPY package-lock.json .
COPY public public
COPY views views

RUN npm ci


# Run Stage
ENV APP_PORT=3000
EXPOSE ${APP_PORT}

ENTRYPOINT node /app/main.js

# ENTRYPOINT [ "node" ]
