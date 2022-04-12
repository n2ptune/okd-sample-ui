FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run builder

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html