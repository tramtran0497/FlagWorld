FROM node:16.15.0 AS build-environment

WORKDIR "/app"

COPY package*.json . 

RUN npm install

# RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

COPY . . 

RUN npm run build

FROM nginx:1.21.6

WORKDIR /usr/share/nginx/html/

COPY --from=build-environment /app/build/. .

EXPOSE 80