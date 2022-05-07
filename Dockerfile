FROM node:16

RUN apt-get update

ENV port=5432

EXPOSE 5432

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

USER node

CMD ["yarn", "dev"]