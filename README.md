# ts-helloworld-api

A simple TypeScript Hello World API using Express.

It can be used as a starting point for building more complex API services.

This repo is also used as a test/demo app for deploying to the EasyRunner self-hosted single server PaaS.

## EasyRunner config

The `.easyrunner` folder in the contains a `docker-compose-app.yaml` that will be used by easyrunner to spin up this app in a container.

If using EasyRunner `Deploy Pipeline A`, where the code is built on the host server itself, then you need a `Dockerfile` or `Containerfile` in the root of the repo. This should be setup with 1) an application build stage 2) a runtime container build stage.

We use an app build stage to avoid needing to install any build time dependencies on the host server directly which has many benefits:

- avoid these dependency conflict between different apps and versions of apps.
- you get dependency management codification and version control for free via the Dockerfile.
- you don't need to SSH into the server to install dependencies.
- you can easily and quickly iterate on the app build locally before deploying.


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
