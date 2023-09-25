FROM python:3.9.18-bullseye

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

ENV PORT=3000
ENV INSTANCE_NAME=bearbeardance
ENV INSTANCE_HASH=bearbeardancehash

EXPOSE ${APP_PORT}


CMD ["sh", "run.sh"]
