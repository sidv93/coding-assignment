FROM node:erbium

HEALTHCHECK NONE
ARG API_PORT

RUN mkdir -p /home/kuser/app

WORKDIR /home/kuser/app

COPY package*.json /home/kuser/app/

RUN npm i

COPY . /home/kuser/app/

RUN npm run build

EXPOSE ${API_PORT}

CMD [ "node", "dist/index.js" ]
