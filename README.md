# SkillPilots Hello World Server

A minimal Express.js web server that responds to a request at `/` with `Hello World`.

## Features

- Serves a simple `GET /` endpoint.
- Runs locally on port `3000`.
- Includes an automated response test using Node.js's built-in test runner.

## Technologies

- Node.js
- Express.js 5

## Prerequisites

- Node.js 18 or later
- npm (included with Node.js)

## Installation

From the project directory, install the dependencies:

```sh
npm install
```

## Setup and run

Start the server:

```sh
npm start
```

The server listens at <http://localhost:3000>. Keep the terminal running while you use the endpoint.

## API endpoint

### `GET /`

Returns the plain-text response:

```text
Hello World
```

For example, request it with:

```sh
curl http://localhost:3000/
```

## Testing

Run the automated endpoint test:

```sh
npm test
```

To check the running server manually, start it with `npm start` in one terminal and run the `curl` command above in another. The response body should be exactly `Hello World`.
