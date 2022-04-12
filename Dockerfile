FROM registry.access.redhat.com/ubi7/nodejs-14 as builder
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run builder

FROM centos/nginx-112-centos7
COPY --from=builder /app/dist /usr/share/nginx/html