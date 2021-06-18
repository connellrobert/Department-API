<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Department API
## Description
The Department API is meant to provide as an example of a NestJS application using mysql to expose information through the GraphQL protocol. It can be used as an individual service, or as part of a cluster.
## Running
1. Have a mysql instance running locally, a dockerfile is available for a sample database
  > cd datasource && docker build -t some_name -p 3306:3306 -f Dockerfile.db . && cd ../
2. start the application either locally or through docker
  > docker build -t some_name -f Dockerfile.app .

  > docker run -p \< port \>:\< port \> some_name

or
  > npm i && npm start

### Environment Variables
 > Environment variables are available to be included in the dockerfile. Ensure the following variables are set either through the dockerfile or through the run command
1. DATASOURCE_PORT
2. ENV DATASOURCE_USERNAME
3. ENV DATASOURCE_PASSWORD
4. ENV DATASOURCE_DATABASE
5. ENV PORT

## WIP
- [X] Create configuration for passing db location into app startup