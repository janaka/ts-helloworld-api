# ts-helloworld-api

A simple TypeScript Hello World API using Express.

## Description

This project provides a basic API server built with TypeScript and Express. It can be used as a starting point for building more complex API services.

## Installation

```bash
# Install dependencies
npm install

# Build the TypeScript code
npm run build
```

## Running the Application

```bash
# Start the server
npm start

# For development with hot-reload
npm run dev
```

## Docker Support

This project includes Docker support. To build and run the Docker container:

```bash
# Build the Docker image
docker build -t ts-helloworld-api .

# Run the container
docker run -p 3000:3000 ts-helloworld-api
```

## Debug docker build

`docker build --no-cache --progress=plain -t ts-helloworld-api .`


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Janaka Abeywardhana