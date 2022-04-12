FROM registry.access.redhat.com/ubi7/nodejs-14 as builder
USER root
COPY upload/src /tmp/src
RUN chown -R 1001:0 /tmp/src
USER 1001
RUN /usr/libexec/s2i/assemble
RUN mkdir /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM centos/nginx-112-centos7
COPY --from=builder /app/dist /usr/share/nginx/html