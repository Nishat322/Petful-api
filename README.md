# Petful Server

Live application: [https://petful-client-lyart.vercel.app/](https://petful-client-lyart.vercel.app/)<br/>

Live Repo: [https://github.com/Nishat322/Petful-client](https://github.com/Nishat322/Petful-client) <br/>

Server: [https://apricot-cake-94060.herokuapp.com/api](https://apricot-cake-94060.herokuapp.com/api)

## API Documentation

### Petful Endpoints

#### /api/people
    GET: Return an array of people waiting in the queue to adopt pet.
    POST: Add person to the end of the queue.
    DELETE: Delete person in at the front of the queue.
    
#### /api/pets  
    GET: Return all pets in queue including cats and dogs.
    DELETE: Delete the first animal in both of the dog queue and cat queue.

#### /api/pets 
    GET /api/cat: Return the first cat in cat queue.
    GET /api/dog: Return the first dog in dog queue.


## Tech Stack
### Backend

- RESTful API
- Node & Express
- Deployed Heroku