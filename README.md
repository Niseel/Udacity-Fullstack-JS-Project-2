# Project 2 - FullStack JS - Udacity-build-a-storefront-backend
Build a JavaScript API based on requirements.


## Installation Instructions:
Install packages used in this project and how to install them.
`npm i`


Install packages db-migration with global flag.
`npm i -g db-migrate`


## Environmental Variables Set up

Create `.env` file in root directory if it not exists
```
POSTGRES_HOST=localhost
DEV_POSTGRES_DB=dev_db
TEST_POSTGRES_DB=test_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password123
ENV=dev
SECRET_KEY=keyJWT4me
BCRYPT_PASSWORD=thanhnc40
SALT_ROUNDS=10

```

### Format

`npm run format` to run prettier


### Create Databases and Migrations

`npm run create-dev-db; npm run create-test-db;`


### Start

`npm run start` to start the app and get access via http://localhost:3000:


### Test

`npm run test` to test


## Endpoint Access

All endpoints are described in the [REQUIREMENT.md](REQUIREMENTS.md) file.

## Token and Authentication

Tokens are passed along with the http header as

```
Authorization   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMiIsInVzZXJuYW1lIjoidGVzdCIsImZpcnN0bmFtZSI6IlNhbGxpZSIsImxhc3RuYW1lIjoiVGVzdCIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRHSWFmOUdoSkVQaEdyc0hGVERwaTllbk8xTzNYUDFoSzdzRzdPU0hoN2ZORG5PdWc2QjJrYSJ9LCJpYXQiOjE2OTc5MDUwNDl9.GdAczXCp1SCNWhPQaQKrICZK4MBSjWDdEPsroShVyAw
```