FROM registry.access.redhat.com/ubi7/nodejs-14 as builder
USER root
WORKDIR /
COPY package*.json /
RUN npm install
COPY . /
RUN npm run build

FROM centos/nginx-112-centos7
COPY --from=builder /dist /usr/share/nginx/html