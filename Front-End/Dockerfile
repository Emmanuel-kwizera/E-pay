FROM node:16-alpine

WORKDIR /usr/app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 80

RUN npm run build 

CMD [ "npm","run", "preview"]