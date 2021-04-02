# Petful Server

Live application: [https://petful-client-lyart.vercel.app/](https://petful-client-lyart.vercel.app/)<br/>

Client Repo: [https://github.com/Nishat322/Petful-client](https://github.com/Nishat322/Petful-client) <br/>

## API Documentation

### Petful Endpoints 

#### /api/people
    GET: Return an array of people waiting in the queue to adopt pet
    POST: Add person to the end of the queue
    DELETE: Delete person in at the front of the queue
    
#### /api/pets  
    GET: Return all pets in queue
    DELETE: Delete the first animal in both queues

#### /api/cats
    GET: Return the first cat in cat queue 
    DELETE: Delete the first cat in the queue

#### /api/dogs
    GET: Return the first dog in dog queue
    DELETE: Delete the first dog in the queue 


## Tech Stack
### Backend

- RESTful API
- Node & Express
- Deployed Heroku