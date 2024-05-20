
# SIMPLE NEST.JS TASK API WITH SWAGGER AND JWT AUTH

## Overview

SIMPLE NEST.JS TASK API WITH SWAGGER AND JWT AUTH.

## Requirements

- Node.js(version 18 upward)
- Docker
- npm

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/LexxLuey/basic-nest
cd basic-nest
```

### 2. Start PostgreSQL Container

Make sure Docker is installed and running on your system. Then, execute the following command to start the PostgreSQL container using Docker Compose:

```bash
docker-compose up -d
```

This command will pull the PostgreSQL image and create a container named `postgres` with the specified configuration in `docker-compose.yml`.

### 3. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```


### 4. Set up Prisma

#### 4.1 Install Prisma CLI

If you haven't installed the Prisma CLI globally, you can install it using npm:

```bash
npm install -g prisma
```

Follow the prompts and choose the PostgreSQL database option. Provide the required database connection details.

#### 4.2 Create Database Schema

Define your database schema in `schema.prisma` file according to your project requirements. This has already been done for Task and User models.


---

## Usage

### Running the NestJS Application in Development Mode

To run the NestJS application in development mode, follow these steps:

1. **Start PostgreSQL Container**: Ensure Docker is installed and running on your system. Run the following command to start the PostgreSQL container using Docker Compose (If you have done this already, SKIP):

```bash
docker-compose up -d
```

2. **Set Environment Variables**: Create a `.env` file in the root directory of the project if it doesn't already exist. Define the following environment variables:

```plaintext
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>
JWT_SECRET=<your_jwt_secret_key>
```

Replace `<username>`, `<password>`, and `<database_name>` with your PostgreSQL database credentials and database name. Choose a secure value for `JWT_SECRET`.

3. **Install Dependencies**: Install the project dependencies using npm:

```bash
npm install
```

4. **Run Prisma Migration**: Generate and apply Prisma migrations by running the following commands:

Generate the Prisma Client by running the following command:

```bash
prisma generate
```

Then apply migrations:

```bash
npx prisma migrate dev --name "init"
```

This command will create the necessary tables in your PostgreSQL database based on your Prisma schema.


5. **Start the NestJS Application**: Once the PostgreSQL container is running, the Prisma migrations are applied, and the dependencies are installed, you can start the NestJS application:

```bash
npm run start:dev
```

This command will start the NestJS application in development mode. By default, the application will listen on port 5000.

6. **Access the Application**: You can now access the NestJS application by navigating to `http://localhost:5000/api` in your web browser.

## Contributing


## License


## Acknowledgements


---
