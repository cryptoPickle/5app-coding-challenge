import {modify} from '../handlers'

/**
 * I liked to keep seperated my controller functions another file 
 * that way it is easier to understand and test.
 */
export default {
  modify(req,res) {
    const response = modify(req.body.payload)
    res.json({response})
  }
}