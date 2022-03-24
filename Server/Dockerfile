FROM node:16-alpine
#specifying the working directory
WORKDIR /usr/app
#copy package.json to the working directory
COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]