# School API

## Overview
This project provides a RESTful API to manage schools, including adding, fetching, and listing schools sorted by proximity to a user's location.

## Features
* Add a new school with name, address, latitude, and longitude validation.
* Fetch all schools with their details.
* Sort and list schools by proximity to the user's location based on geographical distance.

## Endpoints
1. Add a New School
    * Endpoint: /addSchool
    * Method: POST
    * Request Body:
      ```
      {
          "name": "School Name",
          "address": "School Address",
          "latitude": 43.00,
          "longitude": 54.10329
      }
      ```
    * Response:
       ```
      {
          "message": "School added successfully",
      }
      ```
    * On validation failure:
       ```
       {
            "errors": [
                "Please enter school name",
                "Latitude is required",
                "Longitude is required"
            ]
        }
       ```
2. List All Schools Sorted by Proximity
    * Endpoint: /listSchools
    * Method: GET
    * Query Parameter:
      * latitude: User's latitude
      * longitude: User's longitude
    * Example:
      ```
      GET http://localhost:5000/listSchools?latitude=67.890&longitude=90.45678
      ```  
    * Response:
      ```
      {
            "success": true,
            "data": [
                {
                    "id": 1,
                    "name": "School Name",
                    "address": "School Address",
                    "latitude": 43.00,
                    "longitude": 54.10329,
                    "distance": 3491.617154120299
                },
                ...
            ]
        }
      ```
