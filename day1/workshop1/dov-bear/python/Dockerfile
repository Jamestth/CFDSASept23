FROM python:3.9.18-bullseye

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

ENV PORT=3000
ENV INSTANCE_NAME=sss
ENV POINSTANCE_HASHRT=ssx

EXPOSE ${APP_PORT}


CMD ["sh", "run.sh"]
