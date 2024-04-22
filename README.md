

## Description

Serves the APIs for the Water Book App

Framework used: NestJS (Express server)
Database: MongoDB (Hosted on AWS cloud in MongoDB Atlas)

API Endpoints: 
GET: http://localhost:3000/water-service/readings
GET with timestamp filter: http://localhost:3000/water-service/readings?$filter=timestamp lte 2024-04-21T05:03:38.229Z
POST: http://localhost:3000/water-service/readings 
        POST Payload: 
        {
            "pressure":1,
            "flow": 1.3
        }

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start

```

