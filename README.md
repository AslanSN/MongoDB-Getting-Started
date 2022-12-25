# README PROVISIONAL

# Minimal Users API

> ### by AslanSN

Small user API based on a NUWE task called "MongoDB getting started" with extra password in the user model considering that a minimum of security is adequate.

## Technologies

For this API I used Node.js with Express managing MongoDB with Mongoose.

For the tests we are going to use jest and will be added soon.

The most basic bugs are managed by Middlewares.

## Tasks

1. The server connects to MongoDB <i>(local rn)</i> · `./index.js` ·
2. Users model:

```JavaScript
const userSchema = new Schema({
 username: {
  type: String,
  unique: true,
  required: true,
 },
 age: Number,
 city: String,
})
```

<i>You can check all the model at the `'./models/User.js'` file</i>

3. Controller to create the user ·  `'./controllers/users.js'` ·
4. Controller to delete the user · `'./controllers/users.js'` ·
5. Controller to return the user · `'./controllers/users.js'` ·
6. Controller to update the user. `'./controllers/putUsers.js`
7. Server can be lifted and to the previous actions. ✔️

## How to run it

Nowadays the API is only local, so you must lift up the server doing on your bash:

```bash
npm i  #To install the app dependencies
npm start
```

<i>Nodemon and mongoose will be called. If this doesn't work, please put an issue request.</i>

- You shall open your browser at the url: ['http://localhost:3002/api/users'](http://localhost:3002/api/users) to do your all the API actions needed.
- You can use Postman, Insomnia, Mockoon or the .rest files at `./requests/` files to do the actions and to see the API behaviour.

### Extra

If you want to use the .rest files or you want to get inside the entire app you can use `git clone url` or just download the zip, extract on your device and open it with VS Code.

I suggest you to use **Gitpod** as long as let you open the app on the browser without clonning needed.

## Tests

Tests in Jest are still to be carried out. However, in the "requests" folder you can see that I have made the log of the API operation according to the current state.

### TO DO

It remains to carry out a controller for each type of call (GET, POST, DELETE and PUT) as required in the tasks of the exercise.

## Future projects

- Endpoints with PUT and PATCH will be added as needed controlled by a middleware.
- I intend to specialize more in TypeScript to make more powerful and controlled APIs.
- I am studying to practice the use of the TDD (test drive development) protocol due to the robustness it gives to the applications developed under that system.
- I am also studying to change my test manager to Vitest instead of Jest. I am following the trophy of Kent C. Dodds' tests. Priority to integration testing with unit and static testing fundamentals and with an e2e-test topping.
