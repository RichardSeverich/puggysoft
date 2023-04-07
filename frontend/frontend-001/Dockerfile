FROM node:14.17.3-stretch-slim
RUN mkdir -p /app/
WORKDIR /app
COPY build build
EXPOSE 4200
CMD [ "npx", "http-server", "build", "-p", "4200"]
