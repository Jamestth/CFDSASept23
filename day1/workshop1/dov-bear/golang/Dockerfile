FROM golang:1.21.1-alpine3.18 as builder

WORKDIR /app

COPY . .

RUN apk update && apk add gcc 

RUN go build -o main ./...

FROM alpine:3.18
WORKDIR /app
COPY --from=builder /app/main .
COPY public public
COPY templates templates

ENV PORT=3000
ENV INSTANCE_NAME=bearbeardance
ENV INSTANCE_HASH=bearbeardancehash

EXPOSE ${APP_PORT}

RUN apk update && apk add curl gcc bash

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -X GET -sf http://localhost:${APP_PORT}/healthz > /dev/null || exit 1


RUN ls && pwd

ENTRYPOINT /app/main
# ENTRYPOINT /bin/sh
