import {load} from "dotenv";

/*
*dotenv.load simply goes to root of the project with the help of process.cwd  and takes env file
*pareses it and  assigns to process.env.
* like process.env[key] = parsedsomevalue
*/
load()


//Loading ENV variables from .env file.



export default {
  PORT : process.env.PORT || 9191
}
