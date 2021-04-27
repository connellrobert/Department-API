FROM node:14
WORKDIR /app
COPY . /app
RUN npm ci && npm run build
ENTRYPOINT ["node","dist/main"]