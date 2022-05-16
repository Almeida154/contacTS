FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
# RUN yarn build

EXPOSE 3333

CMD ["yarn", "dev"]