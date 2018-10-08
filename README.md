#NODEJS API-MONGO & REACT

--> need install:
- mongodb

--> setting .env
--> npm install

--> run the apps http://localhost:3000/index.html

## API Endpoint
|  Method  | Endpoint              | Description                 | Data                            |
|----------|-----------------------|-----------------------------|---------------------------------|
| GET      | api/person            | list of persons             | [{}, {}, {}]                    |
| GET      | api/person/:id        | detail of person            | {}                              |
| POST     | api/person            | create new person           | {"type": "POST", "status":""}   |
| PUT      | api/person/:id        | Update a person             | {"type": "PUT", "status":""}    |
| DELETE   | api/person/:id        | Delete a person             | {"type": "DELETE", "status":""} |