# Pitch Perfect Backend

## Overview

Pitch Perfect Backend is a server application designed to generate cover letters using Google's Generative AI. The server is built using Express.js and includes API endpoints for generating cover letters and performing live checks. The cover letter generation endpoint processes incoming requests with a resume and job description, formulates a prompt for the AI, and returns a professionally structured cover letter.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Live Check](#live-check)
  - [Generate Cover Letter](#generate-cover-letter)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [License](#license)

## Why This Project Was Needed

In today's competitive job market, a well-crafted cover letter can make a significant difference in securing an interview. However, many job seekers struggle to articulate their experiences and skills effectively. Pitch Perfect Backend addresses this challenge by leveraging AI to generate personalized, professional cover letters that highlight relevant experiences and match job descriptions. This tool aims to simplify the job application process, saving time and effort while increasing the chances of making a positive impression on potential employers.

## Features

- **Automated Cover Letter Generation**: Uses Google Generative AI to create tailored cover letters based on the provided resume and job description.
- **Live Check Endpoint**: Provides a simple endpoint to verify that the server is running and responsive.
- **Environment Variable Configuration**: Easily configure the server and AI integration using environment variables.
- **CORS Support**: Allows cross-origin requests, making it easier to integrate with front-end applications.
- **Error Handling and Logging**: Robust error handling and logging for better maintainability and debugging.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pitch-perfect-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd pitch-perfect-backend
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add your Google Generative AI API key:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key
   PORT=3000
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. The server will start and listen on the port specified in the environment variables (default is 3000).

## API Endpoints

### Live Check

- **Endpoint:** `/api/livecheck`
- **Method:** `GET`
- **Description:** This endpoint checks if the server is running and responsive.
- **Response:**
  - **Status Code:** 200
  - **Body:** "Server is running"

#### Example Request
```sh
curl -X GET http://localhost:3000/api/livecheck
```

#### Example Response
```text
Server is running
```

### Generate Cover Letter

- **Endpoint:** `/api/generateCoverLetter`
- **Method:** `POST`
- **Description:** This endpoint generates a cover letter based on the provided resume and job description.
- **Request Body:**
  - **resume:** (string) The text content of the resume.
  - **jobDescription:** (string) The text content of the job description.
- **Response:**
  - **Status Code:** 200
  - **Body:** JSON object containing the generated cover letter.

#### Example Request
```sh
curl -X POST http://localhost:3000/api/generateCoverLetter \
-H "Content-Type: application/json" \
-d '{
  "resume": "Your resume text here",
  "jobDescription": "Job description text here"
}'
```

#### Example Response
```json
{
  "coverLetter": "Generated cover letter text here"
}
```

## Environment Variables

The project requires the following environment variables:

- `GOOGLE_GENERATIVE_AI_API_KEY`: Your API key for Google Generative AI.
- `PORT`: (Optional) The port on which the server will listen. Defaults to 3000 if not provided.

## Project Structure

```
pitch-perfect-backend/
├── src/
│   ├── routes/
│   │   ├── generateCoverLetter.js
│   │   └── livecheck.js
│   ├── routes.js
│   └── server.js
├── .env
├── package.json
├── package-lock.json
└── README.md
```

- **src/server.js**: Main entry point for the server application. Sets up the Express server, loads environment variables, and mounts the API routes.
- **src/routes.js**: Defines the routing for the server's API endpoints.
- **src/routes/generateCoverLetter.js**: Handler for generating cover letters using Google Generative AI.
- **src/routes/livecheck.js**: Handler for the live check endpoint.

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS (Cross-Origin Resource Sharing).
- [dotenv](https://www.npmjs.com/package/dotenv): Module for loading environment variables from a `.env` file.
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai): Google Generative AI SDK for Node.js.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
