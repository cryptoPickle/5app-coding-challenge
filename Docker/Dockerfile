FROM node:10-alpine

WORKDIR /usr/src/modifyapi

COPY ./package.json .

RUN npm install && npm install  pm2 -g

COPY . . 

CMD ["npm", "run", "start"]