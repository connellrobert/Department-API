<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Department API
## Description
The Department API is meant to provide as an example of a NestJS application using mysql to expose information through the GraphQL protocol. It can be used as an individual service, or as part of a cluster.
## Running
1. Have a mysql instance running locally
  > docker build -t some_name -f Dockerfile.db .
2. start the application either locally or through docker
  > docker build -t some_name -f Dockerfile.app
    docker run -p 3000:3000 some_name

or
  > npm i && npm start

## WIP
- [ ] Create configuration for passing db location into app startup