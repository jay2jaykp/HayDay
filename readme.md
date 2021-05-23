### Prerequisites

- PostgreSQL 12.7 https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- NodeJS 14.17 LTS https://nodejs.org/en/
- Yarn https://classic.yarnpkg.com/en/docs/install/#windows-stable

1. Open PostgreSQL cli (PSQL Shell) and create a new database named `hayday` with this command: `CREEATE DATABASE HAYDAY`
2. Create a `.env` file under `/server` directory and have the following variables in it:

   ```
   NODE_ENV=development
   PORT=5000

   DB_CLIENT=pg
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASS=admin // admin password you gave when you installed the PostgreSQL
   DB_NAME=hayday
   ```

3. Go to `/server` directory using terminal and install the dependencies using `yarn install`

4. Go to `/client` directory using terminal and install the dependencies using `yarn install`

5. To start the client (front-end): run `yarn start`

6. To start the server (back-end): run `yarn start:dev`
