# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
#### 
- axios - http request client
- bootstrap - component and grid system framework
### Q) What's the command to start the frontend application locally?
### A) `npm start` or through docker: `docker-compose -f docker-compose.yml up`

### Q) What libraries did you add to the backend? What are they used for?
### A) 
#### 
- koa - light weight api framework 
- axios - http request client
- bignumber - used for arbitrary-precision operations
- eslint - automatically formatting 
- jest - unit tests

### Q) What's the command to start the backend application locally?
### A) `npm start` or through docker: `docker-compose -f docker-compose.yml up`. Would suggest running it through `npm start` as through docker can be a little slow because it's 

### Q) Any other comments we should read before evaluating your solution?
### A) Please read `README.md` file in `backend` / `frontend` directories

---

# General:

### Q) If you had more time, what further improvements or new features would you add?
### A) 
#### Backend
- More unit testing around the backend providers.
- Implementing joi as a validation middleware layer and add proper validation against the currency symbols received.
- Health check on the backend service through the docker-compose file (endpoint is there just need some docker config)
- Request formatter middleware to handle errors in the application and report back through proper status codes and possible error messages (depending on if the application is public)
#### Frontend
- Lazy load currency cards to make sure only the ones in the viewport are rendered 
- Tests

### Q) Which parts are you most proud of? And why?
### A) Proud of the whole thing but if I were to choose just one it would be backend Providers - because it's ridiculous easy to add a new one.

### Q) Which parts did you spend the most time with? What did you find most difficult?
### A) Providers API documentation. Trying to understand how the order books are exposed and what do the indexed arrays represent.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
### A) It was good, straight forward and well planned. If I were to change anything, I would probably add as a requirement unit tests, or at least a nice to have.
