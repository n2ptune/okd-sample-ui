FROM registry.access.redhat.com/ubi7/nodejs-14 as builder
USER root
RUN mkdir /app
RUN chown -R 1001:0 /app
USER 1001
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM centos/nginx-112-centos7
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]