# Body-Parser
A Node.js body parsing _middleware_, available under the `req.body` property.</br></br>
**You need to use bodyParser() if you want the form data to be available in req.body !!!** </br></br>
_bodyParser returns a function that acts as middleware_ </br></br>
Using it looks something like this: </br>
`app.use(bodyParser.json());` </br>

## API
`var bodyParser = require('body-parser')` </br>
The bodyParser object exposes various factories to create middlewares. All middlewares will populate `req.body` property with parsed body when the `content-type` request header matches the type option, or an empty object ({}) if there was no body to parse, the `content-type` was not matched, or an error occurred.
