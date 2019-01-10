import express from "express"
import bodyParser from "body-parser"
import config from "./config"
import routes from './Routes'
const {PORT} = config

//Initialalize express, middlewares etc

const app = express()

//Body parser is an library to extract body of request stream.
//it exposes the request inside body (req.body)
app.use(bodyParser.json())

//Eventhough we have one simple endpoint we can version it for 
//later possible changes.

app.use("/apiv1", routes())

//Listening the application takes PORT from env file. If nothing is there
//default value come in play. Also binding 0.0.0.0 if some point of the time 
//wanted to use inside of docker container, localhost, 127.0.0.0 or no value  points loopback adress
//so second param could cause trouble to reach to server. Likely you will recive empty response because 
//container would bind its own local. To use 0.0.0.0 solves the problem because it means listen
//enabling connectivity to outside.

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) return console.log(`Error while starting server ${err}`)
  console.log(`Server started on ${PORT}`)
})


export default app